import { 
    useBlockProps,
    RichText,
    InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody,
    TextControl,
    ColorPalette
} from '@wordpress/components';

import ActionButton from '../../components/ActionButton';

export default function Edit( { attributes, setAttributes } ) {
    const { title, bgColor, buttonText, buttonUrl } = attributes

    return (
        <>  
            {/* Sidebar Controls */}
            <InspectorControls>
                <PanelBody title="Background Settings">
                    <ColorPalette
                        value={ bgColor }
                        onChange={ ( bgColor ) => setAttributes( { bgColor} ) }
                    />
                </PanelBody>

                <PanelBody title="Button Settings">
                    <TextControl
                        label="Button Text"
                        value={ buttonText }
                        onChange={ ( buttonText ) => setAttributes( { buttonText } )}
                    />
                    <TextControl
                        label="Button Link (URL)"
                        value={ buttonUrl }
                        onChange={ ( buttonUrl ) => setAttributes( { buttonUrl } )}
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...useBlockProps({
                style: { backgroundColor: bgColor, padding: '100px 20px', textAlign: 'center' }
            }) }>
                <RichText
                    tagName='h1'
                    value={ title }
                    onChange={ ( title ) => setAttributes( { title } )}
                    placeholder="Enter Hero Title..."
                />
                <div style={{ marginTop: '20px' }}>
                    <ActionButton text={ buttonText } url={ buttonUrl } />
                </div>
            </div>
        </>
    )
}