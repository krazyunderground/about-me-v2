// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import gsap from "gsap";
import { onMount, Suspense } from "solid-js";
import { AiOutlineTwitter, AiOutlineGithub } from "solid-icons/ai";
import { BsDiscord } from "solid-icons/bs";
import Nav from "./components/Nav";
import "./root.css";

const animationdown = (element: HTMLElement) => {
  gsap.from(element, { duration: 1, x: "100%", ease: "power4" });
};

export default function App() {
  let mainRef: HTMLElement | undefined;
  let footerRef: HTMLElement | undefined;

  onMount(() => {
    if (mainRef) animationdown(mainRef);
    if (footerRef) animationdown(footerRef);
  });

  return (
    <MetaProvider>
      <Title>KrazyUG's page</Title>
      <Router
        root={(props) => (
          <>
            <Nav />
            <main class="body" ref={mainRef}>
              <Suspense>{props.children}</Suspense>
            </main>
            <footer ref={footerRef}>
              <A href="https://twitter.com/krazy_ug">
                <AiOutlineTwitter size={48} />
              </A>{" "}
              <a href="https://github.com/krazyunderground">
                <AiOutlineGithub size={48} />
              </a>{" "}
              <A href="discord://-/users/832810404882677761/">
                <BsDiscord size={48} />
              </A>
              <br />
              <strong>krazy&commat;krazyunderground&period;xyz</strong>
            </footer>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}