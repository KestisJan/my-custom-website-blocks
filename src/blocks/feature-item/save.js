import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    return (
        <div { ...useBlockProps.save({ className: 'feature-item-card' }) }>
            <RichText.Content tagName="h3" value={ attributes.title } />
            <RichText.Content tagName="p" value={ attributes.description } />
        </div>
    );
}