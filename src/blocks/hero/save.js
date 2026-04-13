import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, bgColor } = attributes;

    return (
        <div { ...useBlockProps.save( { style: { backgroundColor: bgColor, padding: '100px 20px' } }) }>
            <RichText.Content tagName='h1' value={ title } />
        </div>
    )
}