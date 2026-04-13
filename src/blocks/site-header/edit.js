import { useBlockProps, RichText } from '@wordpress/block-editor';
import NavLink from '../../components/NavLink';

export default function Edit({ attributes, setAttributes }) {
    return (
        <header { ...useBlockProps({
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                background: '#fff',
                borderBottom: '1px solid #eee'
            }
        }) }>
            <RichText
                tagName="div"
                value={ attributes.siteTitle }
                onChange={ ( val ) => setAttributes( { siteTitle: val } ) }
                style={{ fontWeight: 'bold', fontSize: '20px' }}
            />
            
            <nav style={{ display: 'flex' }}>
                <NavLink text="Home" url="#" />
                <NavLink text="Services" url="#" />
                <NavLink text="Contact" url="#" />
            </nav>
        </header>
    );
}