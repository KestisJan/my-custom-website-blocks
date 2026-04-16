import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, description, mediaUrl, backgroundColor } = attributes;

    return (
        <div { ...useBlockProps.save( { 
            className: 'feature-item-card',
            style: { backgroundColor: backgroundColor }
            } ) }>
            { mediaUrl && (
                <div className='feature-item-icon'>
                    <img src={ mediaUrl } alt='' />
                </div>
            ) }
            <RichText.Content tagName="h3" value={ title }/>
            <RichText.Content tagName='p' value={ description }/>
        </div>
    );
}