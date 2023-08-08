import { useState } from 'react';
import './Pack.css'

function Packs() {

    const dummyitems = [
        'https://as2.ftcdn.net/v2/jpg/05/61/14/29/1000_F_561142938_tx6VD3Zh1Cu8xhSv2SMFpZlKC6zGOYXf.jpg',
        'https://as2.ftcdn.net/v2/jpg/05/61/14/29/1000_F_561142938_tx6VD3Zh1Cu8xhSv2SMFpZlKC6zGOYXf.jpg',
        'https://as2.ftcdn.net/v2/jpg/05/61/14/29/1000_F_561142938_tx6VD3Zh1Cu8xhSv2SMFpZlKC6zGOYXf.jpg',
        'https://as2.ftcdn.net/v2/jpg/05/61/14/29/1000_F_561142938_tx6VD3Zh1Cu8xhSv2SMFpZlKC6zGOYXf.jpg',
        'https://as2.ftcdn.net/v2/jpg/05/61/14/29/1000_F_561142938_tx6VD3Zh1Cu8xhSv2SMFpZlKC6zGOYXf.jpg',
        'https://as2.ftcdn.net/v2/jpg/05/61/14/29/1000_F_561142938_tx6VD3Zh1Cu8xhSv2SMFpZlKC6zGOYXf.jpg']

    const [packOpened, setPackOpened] = useState(false);

    const addPackOpened = () => {
        setPackOpened(() => {
            if (packOpened) {
                return false;
            } else {
                return true;
            }
        })
    }

    return (
        <>
            <div className="packgrid">
                {packOpened ? <div className='test' id='test1' onClick={addPackOpened}></div> : dummyitems.map((item) => (
                    <img src={item} alt='fox' className='cards' onClick={addPackOpened}></img>
                ))}
            </div>
        </>
    );
}

export default Packs;