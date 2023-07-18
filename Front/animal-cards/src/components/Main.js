import Header from './Header';
import Banner from './Banner';
import { useState } from 'react';

function Main() {

    const [currency, setCurrency] = useState(0);

    const addCurrency = (val) => {
        setCurrency(() => {
            if (currency + val >= 0) {
                return currency + val;
            } else {
                return currency;
            }
        })
    }

    return (
        <>
            <Header currency = {currency}/>
            <Banner />
            <button id='testAddButton' onClick={() => {
                addCurrency(100);
            }}>Add 100</button>
            <button id='testSubButton' onClick={() => {
                addCurrency(-100);
            }}>Subtract 100</button>
        </>
    );
}

export default Main;