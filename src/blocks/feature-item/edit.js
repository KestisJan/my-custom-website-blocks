import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { title, description, mediaUrl } = attributes;

    const onSelectMedia = ( media ) => {
        setAttributes({
            mediaId: media.id,
            mediaUrl: media.url
        });
    }

    return (
        <div {  ...useBlockProps({ className: 'feature-item-card' }) }>
            <div className="feature-item-icon-wrapper">
                <MediaUpload
                    onSelect={ onSelectMedia }
                    allowedTypes={ [ 'image' ] }
                    value={ attributes.mediaId }
                    render={ ({ open }) => (
                        <Button onClick={ open } className={ ! mediaUrl ? 'is-primary' : 'image-button' }>
                            { ! mediaUrl ? 'Upload Icon' : <img src={ mediaUrl } alt="Selected icon" /> }
                        </Button>
                    ) }
                />
            </div>
            <RichText
                tagName="h3"
                value={ title }
                onChange={ ( title ) => setAttributes( { title } )}
                placeholder="Feature Title"
            />
            <RichText
                tagName='p'
                value={ description }
                onChange={ ( description ) => setAttributes( { description } )}
                placeholder='Feature description goes here'
            />
        </div>
    );
}