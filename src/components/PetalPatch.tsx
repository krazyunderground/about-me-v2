import { createSignal, onMount, onCleanup } from "solid-js";

const GAME_W = 1920;
const GAME_H = 1080;
const MAX_DISPLAY_W = 1100;

const PP = () => {
  let wrapperRef: HTMLDivElement | undefined;
  const [displayWidth, setDisplayWidth] = createSignal(960);

  const scale = () => displayWidth() / GAME_W;
  const displayHeight = () => Math.round(GAME_H * scale());

  const updateScale = () => {
    if (wrapperRef) {
      const availableWidth = wrapperRef.clientWidth;
      setDisplayWidth(Math.min(availableWidth, MAX_DISPLAY_W));
    }
  };

  onMount(() => {
    updateScale();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScale);
    }
  });

  onCleanup(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateScale);
    }
  });

  return (
    <div ref={wrapperRef} style="width:100%; display:flex; justify-content:center;">
      <div style={`width:${displayWidth()}px; height:${displayHeight()}px; overflow:hidden;`}>
        <div style={`width:${GAME_W}px; height:${GAME_H}px; transform:scale(${scale()}); transform-origin:top left;`}>
          {/* @ts-expect-error vendor attributes (mozallowfullscreen, msallowfullscreen, webkitallowfullscreen) not in JSX types */}
          <iframe mozallowfullscreen={true} allow="autoplay; fullscreen" src="./petalpatch/petalpatch.html" style="border:0 none;" name="Petal Patch" scrolling="no" msallowfullscreen={true} allowfullscreen={true} allowtransparency={true} frameborder="0" height={`${GAME_H}px`} width={`${GAME_W}px`}></iframe>
        </div>
      </div>
    </div>
  );
}

export default PP