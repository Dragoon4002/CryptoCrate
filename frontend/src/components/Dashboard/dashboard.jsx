import './dashboard.css';

const DashBoard = ()=>{
    return (
        <main>
            <ul className="crates">
                <h1>These are your unopened Chests</h1>
                <li className="crate" id="crate_id">
                    <img src="images/crate.jpg" alt="" className="hologram" />
                    <p>Paid amount</p>
                </li>
            </ul>
            <ul className="nft_collection">
                <h1>These are your collected NFTs</h1>
                <li className="nft" id="nft_id">
                    <div className="hologram"></div>
                </li>
            </ul>
        </main>
    )
}

export default DashBoard;