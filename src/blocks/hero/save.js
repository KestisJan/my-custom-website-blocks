import { useBlockProps, RichText } from '@wordpress/block-editor';
import ActionButton from '../../components/ActionButton';

export default function Save({ attributes }) {
    const { title, bgColor } = attributes;

    return (
        <div { ...useBlockProps.save( { style: { backgroundColor: bgColor, padding: '100px 20px' } }) }>
            <RichText.Content tagName='h1' value={ title } />
            <ActionButton text={ attributes.buttonText } url={ attributes.buttonUrl } />
        </div>
    )
}