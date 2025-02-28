import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import db from "../../../prisma/db"

export default async function Profile() {

    const session = await getServerSession(options)
    if (!session || !session.user) {
        redirect('/api/auth/signin?callbackUrl=/profile')
    }
    
    const user = await db.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    return (<section>

        <h1 style={{ color: 'white' }}>
            Home
        </h1>


    </section>)
}