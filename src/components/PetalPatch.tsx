const PP = () => {
  return (
    <div>
        {/* @ts-expect-error vendor attributes (mozallowfullscreen, msallowfullscreen, webkitallowfullscreen) not in JSX types */}
        <iframe mozallowfullscreen={true} allow="autoplay; fullscreen" src="./petalpatch/petalpatch.html" style="border:0px #000000 none;" name="Biggest Bird Game" scrolling="no" msallowfullscreen={true} allowfullscreen={true} allowtransparency={true} frameborder="0" height="540px" width="960px"></iframe>
    </div>
  )
}

export default PP