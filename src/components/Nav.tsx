import { A } from "@solidjs/router";
import { onMount } from "solid-js";
import styles from './nav.module.scss'
import gsap from "gsap";

const animation = (element, _accessor) => {
    gsap.from(element, {duration: 1, x: "-100%", ease:"power4"})
}

function Nav() {
    let navRef: HTMLElement | undefined;

    onMount(() => {
        if (navRef) animation(navRef, undefined);
    });

    return (
        <nav class={styles.nav} ref={navRef}>
            <A href="/">Home</A>
            <A href="/BBG">BBG</A>
            <A href="PP">PP</A>
        </nav>
    )
}

export default Nav;