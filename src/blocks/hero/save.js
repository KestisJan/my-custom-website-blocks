import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
    return (
        <div { ...useBlockProps.save() }>
            <h1>Hero Frontend View </h1>
        </div>
    )
}