import Link from "next/link";

export default function FooterButton({ title, href }) {
    return (
        <Link
            type="button"
            className={`
                bg-yellow-700 text-white px-3 py-2 rounded-md
            `}
            href={href}
        >
            {title}
        </Link>
    )
}