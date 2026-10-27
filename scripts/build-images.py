"""Generate resized WebP derivatives of the original YogaFX assets.

Reads from docs/source-audit/assets-original (never modified) and writes to
public/images, plus lib/images.generated.js with the dimensions of every
derivative so pages can render explicit width/height and srcset values.

Run: npm run images
"""
import json
import os
import shutil

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "assets-original")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "lib", "images.generated.js")

Y = "yogafxteachertraining.com/"

# key: (source, target widths, optional crop box as fractions l,t,r,b)
PHOTOS = {
    "hero-ian": (Y + "2025/11/yogafx-teacher-training.jpeg", [640, 1024, 1600], None),
    "ian-bali": (Y + "2023/07/ian-yogafx-bali.jpeg", [640, 1280], (0, 0, 1, 0.83)),
    "championship": (Y + "2026/06/world-yogasana-championship-2026-indonesia-medallists.jpg", [640, 1024, 1600], None),
    "street-group": (Y + "2018/05/YogaFX_Yoga-Activity-110.jpg", [640, 1024, 1600], None),
    "mat-group": (Y + "2018/05/YogaFX_Yoga-Activity-443.jpg", [640, 1024, 1600], None),
    "grad-2019": (Y + "2019/04/YogaFX-January-2019-Course-21.jpeg", [640, 1080], None),
    "selfie-2019": (Y + "2019/04/YogaFX-January-2019-Course-23.jpeg", [640, 1080], None),
    "kit-collage": (Y + "2019/11/YogaFX-Main-Event-Collage.jpg", [640, 1024, 1600], None),
    "kit-table": (Y + "2018/05/20190122_124745-scaled-e1576025001642.jpg", [480, 960, 1440], None),
    "mat-circle": (Y + "2019/12/YogaFX-January-2019-15.jpg", [640, 1024, 1600], None),
    "about-group": (Y + "2023/07/Hot-Yoga-Online-Yoga-Training.jpg", [640, 1024, 1600], None),
    "correction": (Y + "2023/07/Online-Yoga-Teacher-Vacancy.jpg", [640, 1024, 1600], None),
    "online-cover": (Y + "2025/10/online-course-cover.jpg", [640, 1280], None),
    "precourse": ("bikramyogateachertraining.info/2023/08/1.jpg", [750], None),
    "in-bali": ("bikramyogateachertraining.info/2023/08/2.jpg", [750], None),
    "certification": ("bikramyogateachertraining.info/2023/08/3.jpg", [750], None),
    "faq-book": (Y + "2025/03/FAQ-1.jpg", [640, 1200], None),
    "grad-slide": (Y + "2019/12/Slide-Bikram-1.jpg", [640, 1024, 1600], None),
    "ya-badge": (Y + "2019/11/YogaFX-RYT-200-Yoga-Alliance.jpg", [320, 640], None),
    "teaching-map": (Y + "2023/07/Screen-Shot-2023-05-18-at-14.31.35.png", [640, 913], None),
}

# Logos and icons are copied (GIFs keep their animation) or lightly resized.
COPIES = {
    "logo-yoga-life-white.gif": Y + "2020/02/yoga-teacher-training-bali-transparent.gif",
    "payment-methods.webp": Y + "2022/05/yogafx-payment-logo.webp",
}


def save_webp(im, path, quality=72):
    im.save(path, "WEBP", quality=quality, method=6)


def main():
    # Start clean so assets dropped from the lists never linger in production.
    shutil.rmtree(OUT, ignore_errors=True)
    os.makedirs(OUT)
    manifest = {}

    for key, (rel, widths, crop) in PHOTOS.items():
        im = Image.open(os.path.join(SRC, rel)).convert("RGB")
        if crop:
            w, h = im.size
            im = im.crop((int(crop[0] * w), int(crop[1] * h), int(crop[2] * w), int(crop[3] * h)))
        variants = []
        for target in widths:
            target = min(target, im.width)
            if any(v["w"] == target for v in variants):
                continue
            height = round(im.height * target / im.width)
            out = im.resize((target, height), Image.LANCZOS) if target != im.width else im
            name = f"{key}-{target}.webp"
            save_webp(out, os.path.join(OUT, name))
            variants.append({"src": f"/images/{name}", "w": target, "h": height})
        manifest[key] = {"width": im.width, "height": im.height, "variants": variants}

    # YogaFX wordmark: transparent PNG, resized for header/footer use at 2x.
    wm = Image.open(os.path.join(SRC, Y + "2022/05/yogafx.png")).convert("RGBA")
    for target in (360, 720):
        h = round(wm.height * target / wm.width)
        wm.resize((target, h), Image.LANCZOS).save(os.path.join(OUT, f"logo-yogafx-{target}.png"), optimize=True)
    manifest["logo-yogafx"] = {"width": wm.width, "height": wm.height}

    for name, rel in COPIES.items():
        shutil.copyfile(os.path.join(SRC, rel), os.path.join(OUT, name))

    # Social share image (original OG image), JPEG for broad crawler support.
    og = Image.open(os.path.join(SRC, Y + "2020/05/YogaFX-Yoga-Teacher-Training-Bali-80.jpg")).convert("RGB")
    og.resize((1200, round(og.height * 1200 / og.width)), Image.LANCZOS).save(
        os.path.join(OUT, "og-yogafx.jpg"), quality=78, optimize=True, progressive=True
    )

    # Favicon from the original heart mark.
    app_dir = os.path.join(ROOT, "app")
    os.makedirs(app_dir, exist_ok=True)
    heart = Image.open(os.path.join(SRC, Y + "2021/01/heart-1.png")).convert("RGBA")
    canvas = Image.new("RGBA", (154, 154), (0, 0, 0, 0))
    canvas.paste(heart, (0, 5), heart)
    canvas.save(os.path.join(app_dir, "icon.png"))
    canvas.resize((180, 180), Image.LANCZOS).save(os.path.join(app_dir, "apple-icon.png"))

    with open(MANIFEST, "w", encoding="utf-8") as f:
        f.write("// Generated by scripts/build-images.py. Do not edit by hand.\n")
        f.write("const images = " + json.dumps(manifest, indent=2) + ";\n\nexport default images;\n")

    total = sum(os.path.getsize(os.path.join(OUT, n)) for n in os.listdir(OUT))
    print(f"{len(os.listdir(OUT))} files, {total / 1024 / 1024:.2f} MB in public/images")


if __name__ == "__main__":
    main()
