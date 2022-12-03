import { Outlet } from "solid-start"
import styles from './blogPost.module.scss'

export default function BlogPost(){
    return (
        <div class={styles.blogPost}>
            <Outlet />
            <footer>
                Hey there, thanks for visiting the blog section. Clearly you're quite interested in me!<br /> Got a suggestion or prject idea you think i'd be interested in, DM me at <strong>Krazyunderground#0001</strong>!
            </footer>
        </div>
    )
}