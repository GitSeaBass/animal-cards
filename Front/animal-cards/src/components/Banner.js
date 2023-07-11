import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <h1 className="bannertitle">Featured</h1>
            <div className="bannerimage">
                <div className='tempimage'></div>
                <button className='buybutton'>Purchase</button>
            </div>
        </div>
    );
}

export default Banner;