import { A } from 'solid-start'
import styles from './nav.module.scss'
import gsap from "gsap";

const animation = (element, _accessor) => {
    gsap.from(element, {duration: 1, x: "-100%", ease:"power4"})
}

function Nav() {
    return (
        <nav class={styles.nav} use:animation>
            <A href="/">Home</A>
            <A href="/about">About</A>
            <A href="/blog">Blog</A>
        </nav>
    )
}

export default Nav;