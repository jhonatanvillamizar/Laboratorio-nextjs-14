import { getCollections } from "app/services/shopify/collections"
import styles from "./StoreLayout.module.sass"
import Link from "next/link"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main className={styles.StoreLayout}>
      <h1 className={styles.StoreLayout__title}>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
          collections.map((collection: any) => (
            <Link 
              key={collection.id}
              href={'/store/' + collection.handle} 
              className={styles.StoreLayout__chip}>
              {collection.title}
            </Link>
          ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}