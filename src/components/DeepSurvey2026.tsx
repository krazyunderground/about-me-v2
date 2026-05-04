import { createSignal, onMount, onCleanup } from "solid-js";

const ASPECT_W = 16;
const ASPECT_H = 9;
const MAX_DISPLAY_W = 1100;

const DS2026 = () => {
  let wrapperRef: HTMLDivElement | undefined;
  const [displayWidth, setDisplayWidth] = createSignal(960);

  const displayHeight = () => Math.round(displayWidth() * (ASPECT_H / ASPECT_W));

  const updateSize = () => {
    if (wrapperRef) {
      const availableWidth = wrapperRef.clientWidth;
      setDisplayWidth(Math.min(availableWidth, MAX_DISPLAY_W));
    }
  };

  onMount(() => {
    updateSize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateSize);
    }
  });

  onCleanup(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateSize);
    }
  });

  return (
    <div ref={wrapperRef} style="width:100%; display:flex; justify-content:center;">
      <div style={`width:${displayWidth()}px; height:${displayHeight()}px;`}>
        {/* @ts-expect-error vendor attributes (mozallowfullscreen, msallowfullscreen, webkitallowfullscreen) not in JSX types */}
        <iframe mozallowfullscreen={true} allow="autoplay; fullscreen" src="./ds2026/ds2026.html" style="border:0 none;" name="Deep Survey 2026" scrolling="no" msallowfullscreen={true} allowfullscreen={true} allowtransparency={true} frameborder="0" height={`${displayHeight()}px`} width={`${displayWidth()}px`}></iframe>
      </div>
    </div>
  );
};

export default DS2026;
