import React from "react";

// Styles
import styles from "./styles/Loader.module.css";

export default function Loading() {
  // Random texts to show in loading screen. Do a pr and add more ;)
  const texts = [
    <span key="1">Beep Boop.</span>,
    <span key="2">Remembering what i forgot.</span>,
    <span key="3">Gimme a minute</span>,
    <span key="4">
      Error <code>200</code>. Wait thats not a error.
    </span>,
    <span key="5">Wait, i lost my brain</span>,
    <span key="6">Hey there</span>,
    <span key="7">Im bored, lets talk</span>,
    <span key="8">Zzz. Im trying to sleep can{"'"}t you see ?</span>,
    <span key="9">Tryin to rizz you up</span>,
    <span key="10">This loading looks very cool</span>,
    <span key="11">I want a friend like you</span>,
    <span key="12">Hey wassup</span>,
    <span key="13">Initializing my brain</span>,
  ];

  const random = Math.floor(Math.random() * texts.length);

  return (
    <div className={[styles.loader, "loadScreen"].join(" ")}>
      <svg
        className={styles.loadingRing}
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--hsl-special-color)" />
            <stop offset="100%" stopColor="var(--hsl-special-color-end)" />
          </linearGradient>
        </defs>
        <circle
          className={styles.circle}
          r="56"
          cx="64"
          cy="64"
          fill="none"
          stroke="var(--hsl-background-dark)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          className={styles.worm}
          d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="44 1111"
          strokeDashoffset="10"
        />
      </svg>
      <h2 className={styles.loadTitle}>{texts[random]}</h2>
    </div>
  );
}
