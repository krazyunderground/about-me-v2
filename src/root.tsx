// @refresh reload
import gsap from "gsap";
import { Suspense } from "solid-js";
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'solid-icons/ai'
import { BsDiscord } from 'solid-icons/bs'
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Nav from "./components/Nav";
import "./root.css";

const animationdown = (element, _accessor) => {
  gsap.from(element, {duration: 1, x: "100%", ease:"power4"})
}

const animationup = (element, _accessor) => {
  gsap.from(element, {duration: 1, y: "6000%", ease:"power4"})
}

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>KrazyUG's page</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Nav />
          <ErrorBoundary>
            <Suspense>
              <main class="body" use:animationdown>
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
            </Suspense>
            <footer use:animationup>
              <A href="https://twitter.com/krazy_ug"><AiOutlineTwitter size={48} /></A> <a href="https://github.com/krazyunderground"><AiOutlineGithub size={48} /></a> <A href="discord://-/users/832810404882677761/"><BsDiscord  size={48}/></A><br />
              <strong>krazy&commat;krazyunderground&period;xyz</strong>
            </footer>
          </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
