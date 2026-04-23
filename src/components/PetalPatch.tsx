const PP = () => {
  return (
    <div style="display:flex; justify-content:center;">
      <div style="width:960px; height:540px; overflow:hidden; flex-shrink:0;">
          {/* @ts-expect-error vendor attributes (mozallowfullscreen, msallowfullscreen, webkitallowfullscreen) not in JSX types */}
          <iframe mozallowfullscreen={true} allow="autoplay; fullscreen" src="./petalpatch/petalpatch.html" style="border:0px #000000 none; transform:scale(0.75); transform-origin:top left;" name="Petal Patch" scrolling="no" msallowfullscreen={true} allowfullscreen={true} allowtransparency={true} frameborder="0" height="720px" width="1280px"></iframe>
      </div>
    </div>
  )
}

export default PP