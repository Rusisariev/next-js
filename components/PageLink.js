import Link from "next/link";

const Page = ({text, href}) => {
    return (
        <div className="navbar-page">
            <Link href={href}>
                <a>{text}</a>
            </Link>
        </div>
    )
}

export default Page