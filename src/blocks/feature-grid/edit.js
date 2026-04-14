import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
    // This template automatically creates 3 items when you first drop the block
    const TEMPLATE = [
        [ 'create-block/feature-item', {} ],
        [ 'create-block/feature-item', {} ],
        [ 'create-block/feature-item', {} ],
    ];

    return (
        <div { ...useBlockProps({ className: 'feature-grid-layout' } )}>
            <InnerBlocks 
                allowedBlocks={ [ 'create-block/feature-item' ] }
                template={ TEMPLATE }
                orientation='horizontal'
            />
        </div>
    )
}