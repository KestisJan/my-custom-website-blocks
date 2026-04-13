import { registerBlockType } from '@wordpress/blocks';

// Import Hero
import heroMetadata from './blocks/hero/block.json';
import HeroEdit from './blocks/hero/edit';
import HeroSave from './blocks/hero/save';

// Import Header
import headerMetadata from './blocks/site-header/block.json';
import HeaderEdit from './blocks/site-header/edit';
import HeaderSave from './blocks/site-header/save';

// Register Hero
registerBlockType( heroMetadata.name, {
    edit: HeroEdit,
    save: HeroSave
} );

// Register Header
registerBlockType( headerMetadata.name, {
    edit: HeaderEdit,
    save: HeaderSave
})