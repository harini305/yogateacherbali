import { preload } from "react-dom";
import images from "@/lib/images.generated";

// Responsive <img> for the locally generated WebP derivatives.
// Next.js image optimization is disabled, so srcset/sizes are written here.
export default function Img({ name, alt, sizes = "100vw", priority = false, className, style, ...rest }) {
  const image = images[name];
  if (!image) throw new Error(`Unknown image: ${name}`);

  const { variants, width, height } = image;
  const srcSet = variants.map((v) => `${v.src} ${v.w}w`).join(", ");
  const fallback = (variants.find((v) => v.w >= 1000) || variants[variants.length - 1]).src;

  if (priority) {
    preload(fallback, { as: "image", imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: "high" });
  }

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      className={className}
      style={style}
      {...rest}
    />
  );
}
