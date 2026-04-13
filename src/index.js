import { registerBlockType } from '@wordpress/blocks';
import metadata from './blocks/hero/block.json';
import Edit from './blocks/hero/edit';
import Save from './blocks/hero/save';

registerBlockType( metadata.name, {
    edit: Edit,
    save: Save
} );