import { 
    useBlockProps,
    InnerBlocks,
    InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody,
    RangeControl
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes  } ) {
    const { columns } = attributes;

    // Dynamic style to update the grid in the editor
    const blockProps = useBlockProps({
        className: `feature-grid-admin`,
        style: {
            gridTemplateColumns: `repeat(${columns}, 1fr)`
        }
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title="Grid Settings">
                    <RangeControl
                        label="Columns"
                        value={ columns }
                        onChange={ ( columns ) => setAttributes( { columns } )}
                        min={ 1 }
                        max={ 6 }
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps }>
                <InnerBlocks
                    allowedBlocks={ [ 'create-block/feature-item' ] }
                    template={ [ [ 'create-block/feature-item' ], [ 'create-block/feature-item' ], [ 'create-block/feature-item' ] ] }
                    orientation='horizontal'
                />
            </div>
        </>
    )
}