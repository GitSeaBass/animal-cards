import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div className='header'>
                <Link to={'/store'}>
                    <h3>Store</h3>
                </Link>      
                <Link>
                    <h3>Collection</h3>
                </Link>
                <Link>
                    <h3>Extra</h3>
                </Link>
                <h3 id='value'>{props.currency}</h3>
            </div>
        </>
    );
}

export default Header;