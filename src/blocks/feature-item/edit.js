import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { title, description } = attributes;

    return (
        <div { ...useBlockProps({ className: 'feature-item-card' }) }>
            <RichText
                tagName="h3"
                value={ title }
                onChange={ (val) => setAttributes({ title: val }) }
                placeholder="Feature Title"
            />
            <RichText
                tagName="p"
                value={ description }
                onChange={ (val) => setAttributes({ description: val }) }
                placeholder="Feature description goes here..."
            />
        </div>
    );
}