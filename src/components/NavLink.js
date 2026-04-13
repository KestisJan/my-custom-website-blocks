export default function NavLink({ text, url }) {
    return (
        <a
            href={url}
            style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                padding: '0 15px',
                fontSize: '14px'
            }}
        >
            {text}
        </a>
    )
}