"use client";

import { useState } from "react";
import { intakes, masterclass, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./IntakePlanner.module.css";

const NO_PREFERENCE = "Not sure yet";

function splitLabel(label) {
  const [day, dash, end, ...rest] = label.split(" ");
  return { days: `${day} ${dash} ${end}`, month: rest.join(" ") };
}

// Lets a visitor pick an intake and room preference, then opens WhatsApp with
// those choices added to the original prefilled message. Nothing is booked or
// submitted here: the team confirms availability and fees in the chat.
export default function IntakePlanner() {
  const [intake, setIntake] = useState(0);
  const [room, setRoom] = useState(NO_PREFERENCE);
  const selected = intakes[intake];
  const [next, ...later] = intakes;
  const nextParts = splitLabel(next.label);

  const href = whatsappLink([
    `Course date: ${selected.label}`,
    room !== NO_PREFERENCE ? `Room preference: ${room}` : null,
  ]);

  return (
    <div className={styles.planner}>
      <fieldset className={styles.dates}>
        <legend className={styles.legend}>Choose a course date</legend>

        <label className={`${styles.date} ${styles.featured}`}>
          <input type="radio" name="intake" value={0} checked={intake === 0} onChange={() => setIntake(0)} />
          <span className={styles.dateText}>
            <span className={styles.next}>Next intake</span>
            <span className={styles.dateDays}>{nextParts.days}</span>
            <span className={styles.dateMonth}>{nextParts.month} · Seminyak, Bali</span>
          </span>
        </label>

        <div className={styles.dateGrid}>
          {later.map((item, idx) => {
            const i = idx + 1;
            const { days, month } = splitLabel(item.label);
            return (
              <label key={item.label} className={styles.date}>
                <input type="radio" name="intake" value={i} checked={intake === i} onChange={() => setIntake(i)} />
                <span className={styles.dateText}>
                  <span className={styles.dateDays}>{days}</span>
                  <span className={styles.dateMonth}>{month}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className={styles.side}>
        <fieldset className={styles.rooms}>
          <legend className={styles.legend}>Room preference</legend>
          <div className={styles.roomRow}>
            {[...masterclass.rooms, NO_PREFERENCE].map((r) => (
              <label key={r} className={styles.room}>
                <input type="radio" name="room" value={r} checked={room === r} onChange={() => setRoom(r)} />
                <span>{r}</span>
              </label>
            ))}
          </div>
          <p className={styles.roomNote}>{masterclass.roomNote}</p>
        </fieldset>

        <div className={styles.summary} aria-live="polite">
          <dl>
            <div>
              <dt>Dates</dt>
              <dd>{selected.label}</dd>
            </div>
            <div>
              <dt>Room</dt>
              <dd>{room}</dd>
            </div>
            <div className={styles.wide}>
              <dt>Course fee</dt>
              <dd>{masterclass.fee ?? "Confirmed by our team when you enquire"}</dd>
            </div>
          </dl>
          <a href={href} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Ask about these dates
          </a>
        </div>
      </div>
    </div>
  );
}
