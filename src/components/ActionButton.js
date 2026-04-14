export default function ActionButton( { url, text, backgroundColor = '#007cba' } ) {
    return (
        <a
            href={ url }
            className="custom-button"
            style={{
                backgroundColor: backgroundColor,
                color: '#fff',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block',
                fontWeight: 'bold'
            }}
        >
            { text }
        </a>
    );
}