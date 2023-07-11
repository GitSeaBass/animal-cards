import './Pack.css'

function Packs() {

    const dummyitems = ['1','2','3','4','5','6']

    return (
        <div className="packgrid">
            {dummyitems.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
}

export default Packs;