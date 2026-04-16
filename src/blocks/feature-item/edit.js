import { useBlockProps, RichText, MediaUpload, URLInput, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { title, description, mediaUrl, buttonText, buttonUrl, backgroundColor } = attributes;

    const onSelectMedia = ( media ) => {
        setAttributes({
            mediaId: media.id,
            mediaUrl: media.url
        });
    }

    return (
        <>
        
            <InspectorControls>
                <PanelColorSettings 
                    title='Card Settings'
                    colorSettings={ [
                        {
                            value: backgroundColor,
                            onChange: ( newColor ) => setAttributes( { backgroundColor: newColor } ),
                            label: "Background Color",
                        },
                    ] }
                />
            </InspectorControls>
            <div {  ...useBlockProps({ 
                    className: 'feature-item-card',
                    style: { backgroundColor: backgroundColor }
                }) }>
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

                <div className='feature-card-button-editor-wrapper'>
                    <RichText 
                        tagName='div'
                        className='feature-card-button'
                        value={ buttonText }
                        onChange={ ( buttonText ) => setAttributes( { buttonText } )}
                        placeholder='Button Text'
                    />
                    <div className='url-input-container'>
                            <URLInput
                                value={ buttonUrl }
                                onChange={ ( buttonUrl ) => setAttributes( { buttonUrl } )}
                            />
                    </div>
                </div>
            </div>
        </>
    );
}