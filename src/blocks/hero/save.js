import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save( { attributes } ) {
    const { title, subText, bgImageUrl, overlayOpacity } = attributes;

    return (
        <div { ...useBlockProps.save({
            className: 'hero-section',
            style: { backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none'}
        })}>
            <div
                className="hero-overlay"
                style={{ backgroundColor: `rgba(0, 0, 0, ${ overlayOpacity / 100}` }}
            />
            <div className="hero-container">
                <div className="hero-content">
                    <RichText.Content tagName="h1" value={ title } />
                    <RichText.Content tagName="p" value={ subText } />
                </div>
            </div>
        </div>
    )
}