import AsideLink from '../AsideLink'

import { Feed } from '../icons/Feed'
import { Login } from '../icons/Login'
import { Button } from '../Button'

import styles from './aside.module.css'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

export const Aside = async () => {

    const session = await getServerSession(options)

    return (<aside className={styles.aside}>
        <nav>
            <ul>
                <li>
                    <Button href="/" outline>
                        Home
                    </Button>
                </li>
                <li>
                    <AsideLink href="/projects">
                        <Feed />
                        Projetos
                    </AsideLink>
                </li>
                {!session && <li>
                    <AsideLink href="/api/auth/signin">
                        <Login />
                        Login
                    </AsideLink>
                </li>}
                {session && <li>
                    <AsideLink href="/api/auth/signout">
                        <Login />
                        Logout
                    </AsideLink>
                </li>}
            </ul>
        </nav>
    </aside>)
}