import { useBlockProps, RichText, MediaPlaceholder, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const { title, subText, bgImageUrl, overlayOpacity } = attributes;

    const blockProps = useBlockProps({
        className: 'hero-section',
        style: {
            backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
        }
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title='Overlay Settings'>
                    <RangeControl 
                        label='Darkness'
                        value={ overlayOpacity }
                        onChange={ ( val ) => setAttributes( { overlayOpacity: val } )}
                        min={ 0 }
                        max={ 100 }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                {/* The Overlay Layer */}
                <div 
                    className='hero-overlay'
                    style={ { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100 })` } }
                />

                <div className='hero-container'>
                    { ! bgImageUrl ? ( 
                        <MediaPlaceholder
                            labels={ { title: 'Hero Background Image' } }
                            onSelect={ (media) => setAttributes( { bgImageUrl: media.url } ) }
                            accept='image/*'
                            allowedTypes={ ['image'] }
                        />
                    ) : (
                        <div className='hero-content'>
                            <RichText
                                tagName='h1'
                                value={ title }
                                onChange={ ( title ) => setAttributes( { title } )}
                                placeholder='Hero Title'
                            />
                            <RichText
                                tagName='p'
                                value={ subText }
                                onChange={ ( subText ) => setAttributes( { subText } )}
                                placeholder='Hero Subtitle'
                            />
                        </div>
                    ) }
                </div>
            </div>
        </>
    )
}