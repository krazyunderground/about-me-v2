import { For } from 'solid-js'
import { A, createRouteData, useRouteData } from 'solid-start'
import styles from './Home.module.css'

type Meta = {
  title: string
  date: string
  description: string
  thumbnailUrl: string
}

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob('../blog/*.mdx')

    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace('./blog/', '').replace('.mdx', '')
      const meta = await files[file]()

      return { slug, ...((await meta) as Meta) }
    })

    return Promise.all(posts)
  })
}

const Home = () => {
  const posts = useRouteData<typeof routeData>()

  return (
    <div>
      <h1>Krazyunderground's blog</h1>
      <section class={styles.articleList}>
        <For each={posts()}>
          {(post) => (
            <A class={styles.item} href={`/blog/${post.slug}`}>
              <div class={styles.thumbnail}>
                <img style="max-width: 100%;" src={post.thumbnailUrl} alt="thumbnail" loading="lazy" />
              </div>

              <div>
                <h2 class={styles.title}>{post.title}</h2>
                <p class={styles.description}>{post.description}</p>
                <p class={styles.date}>{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </A>
          )}
        </For>
      </section>
    </div>
  )
}

export default Home