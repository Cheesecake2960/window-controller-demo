"use client";

import { useState } from "react";

export default function Home() {
  const [childWindow, setChildWindow] = useState<Window | null>(null);
  
  const windowHeight = 400;
  const windowWidth = 400;

  function moveChildWindow(x: number, y: number) {
    childWindow?.moveBy(x, y);
  }

  const onClickOpenButton = () => {
    setChildWindow(window.open("about:blank", "_blank", `width=${windowWidth},height=${windowHeight},resizable=no`));
  }

  return (
    <div>
      <button onClick={onClickOpenButton}>Open</button>
      <div>
        <button onClick={() => moveChildWindow(0, -100)}>🔼</button>
        <button onClick={() => moveChildWindow(0, 100)}>🔽</button>
        <button onClick={() => moveChildWindow(-100, 0)}>◀️</button>
        <button onClick={() => moveChildWindow(100, 0)}>▶️</button>
      </div>
    </div>
  );
}
