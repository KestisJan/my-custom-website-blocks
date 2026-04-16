import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save( { attributes, setAttributes } ) {
    const { columns } = attributes;

    const blockProps = useBlockProps.save({
        className: 'feature-grid-frontend',
        style: {
            gridTemplateColumns: `repeat(${columns}, 1fr)`
        }
    });

    return (
        <div { ...blockProps }>
            <InnerBlocks.Content />
        </div>
    );
}