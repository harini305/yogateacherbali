"use client";

import { useState } from "react";
import Img from "./Img";
import { PlayIcon } from "./Icons";
import styles from "./VideoFacade.module.css";

// Click-to-load YouTube player: no third-party requests until the visitor asks.
export default function VideoFacade({ id, title, poster, posterAlt = "" }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.video}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.trigger} onClick={() => setPlaying(true)}>
          <Img name={poster} alt={posterAlt} sizes="(min-width: 1024px) 60vw, 100vw" />
          <span className={styles.play}>
            <PlayIcon />
          </span>
          <span className={styles.caption}>
            <span className="visually-hidden">Play video: </span>
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
