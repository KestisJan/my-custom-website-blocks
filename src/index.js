import { registerBlockType } from '@wordpress/blocks';

// Import Hero
import heroMetadata from './blocks/hero/block.json';
import HeroEdit from './blocks/hero/edit';
import HeroSave from './blocks/hero/save';

// Import Header
import headerMetadata from './blocks/site-header/block.json';
import HeaderEdit from './blocks/site-header/edit';
import HeaderSave from './blocks/site-header/save';

// Import Feature Grid
import gridMetadata from './blocks/feature-grid/block.json';
import GridEdit from './blocks/feature-grid/edit';
import GridSave from './blocks/feature-grid/save';

// Import Feature Grid Styles
import './blocks/feature-grid/style.css';
import './blocks/feature-grid/editor.css';

// Import Feature Item
import itemMetadata from './blocks/feature-item/block.json';
import ItemEdit from './blocks/feature-item/edit';
import ItemSave from './blocks/feature-item/save';

// Import Feature Item Styles
import './blocks/feature-item/style.css';

// --- Register Blocks ---

// Register Hero
registerBlockType( heroMetadata.name, {
    edit: HeroEdit,
    save: HeroSave
} );

// Register Header
registerBlockType( headerMetadata.name, {
    edit: HeaderEdit,
    save: HeaderSave
});

// Register Feature Grid
registerBlockType( gridMetadata.name, {
    edit: GridEdit,
    save: GridSave
});

// Register Feature Item
registerBlockType( itemMetadata.name, {
    edit: ItemEdit,
    save: ItemSave
});