import { CardProject } from "@/components/CardProject"
import logger from "@/logger"

import styles from './projects.module.css'
import Link from "next/link"
import db from "../../../../prisma/db"
import { SearchForm } from "@/components/SearchForm"

async function getAllProjects(page, searchTerm) {
    try {

        const where = {}

        if (searchTerm) {
            where.title = {
                contains: searchTerm,
                mode: 'insensitive'
            }
        }

        const perPage = 4;
        const skip = (page - 1) * perPage;
        const totalItems = await db.project.count({ where })
        const totalPages = Math.ceil(totalItems / perPage)
        const prev = page > 1 ? page - 1 : null
        const next = page < totalPages ? page + 1 : null

        const projects = await db.project.findMany({
            take: perPage,
            skip,
            where,
            orderBy: { id: 'desc' }
        })

        return { data: projects, prev, next }

    } catch (error) {
        logger.error('Falha ao obter projects', { error })
        return { data: [], prev: null, next: null }
    }
}

export default async function Home({ searchParams }) {
    const currentPage = parseInt(searchParams?.page || 1)
    const searchTerm = searchParams?.q
    const { data: projects, prev, next } = await getAllProjects(currentPage, searchTerm)

    return (
        <main className={styles.grid}>
            <SearchForm />

            {projects.map(project => <CardProject key={project.id} project={project} />)}
            <div className={styles.links}>
                {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchTerm } }}>Página anterior</Link>}
                {next && <Link href={{ pathname: '/', query: { page: next, q: searchTerm } }}>Próxima página</Link>}
            </div>
        </main>
    )
}
