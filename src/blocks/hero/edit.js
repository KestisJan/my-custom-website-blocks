import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    return (
        <div { ...useBlockProps} >
            <h1>Hero Editor View</h1>
        </div>
    )
}