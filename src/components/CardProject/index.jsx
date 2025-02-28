import { Author } from "../Author"
import styles from './cardpost.module.css'
import Link from "next/link"

export const CardProject = ({ project, highlight }) => {

    return (
        <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>

            <section className={styles.body}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link href={`/project/${project.id}`}>Ver detalhes</Link>
            </section>

            <footer className={styles.footer}>
                {/* <Author author={post.author} /> */}
            </footer>

        </article>
    )
}