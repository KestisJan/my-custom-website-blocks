import { useBlockProps, RichText } from '@wordpress/block-editor';
import NavLink from '../../components/NavLink';

export default function Save( { attributes } ) {
    return (
        <header { ...useBlockProps.save({ 
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px'
            }
        }) }>
            <RichText.Content tagName="div" value={ attributes.siteTitle } />
            <nav style={{ display: 'flex' }}>
                <NavLink text="Home" url="#" />
                <NavLink text="Services" url="#" />
                <NavLink text="Contact" url="#" />
            </nav>
        </header>
    );
}