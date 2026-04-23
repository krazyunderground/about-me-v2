import { createSignal, onMount, onCleanup } from "solid-js";

const GAME_W = 1280;
const GAME_H = 720;

const PP = () => {
  let containerRef: HTMLDivElement | undefined;
  const [scale, setScale] = createSignal(1);

  const updateScale = () => {
    if (containerRef) {
      const s = containerRef.clientWidth / GAME_W;
      setScale(s);
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
    <div ref={containerRef} style={`width:100%; max-width:${GAME_W}px; margin:0 auto; height:${GAME_H * scale()}px; overflow:hidden;`}>
      <div style={`width:${GAME_W}px; height:${GAME_H}px; transform:scale(${scale()}); transform-origin:top left;`}>
        {/* @ts-expect-error vendor attributes (mozallowfullscreen, msallowfullscreen, webkitallowfullscreen) not in JSX types */}
        <iframe mozallowfullscreen={true} allow="autoplay; fullscreen" src="./petalpatch/petalpatch.html" style="border:0 none;" name="Petal Patch" scrolling="no" msallowfullscreen={true} allowfullscreen={true} allowtransparency={true} frameborder="0" height={`${GAME_H}px`} width={`${GAME_W}px`}></iframe>
      </div>
    </div>
  );
}

export default PP