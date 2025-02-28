import { Aside } from "@/components/Aside";

export default function BlogLayout({ children }) {
    return (
        <div className='app-container'>
            <div>
                <Aside />
            </div>
            <div className='main-content'>
                {children}
            </div>
        </div>
    )
}