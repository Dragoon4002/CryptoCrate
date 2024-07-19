import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './header.css';

const Header = () => {
    const [account, setAccount] = useState(null);
    const [userData, setUserData] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                setAccount(account);
                console.log(account);

                try {
                    // Check if user exists in the database
                    const response = await axios.get(`/api/getoneuserbyaddress/${account}`);
                    setUserData(response.data);
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        // User does not exist, create a new user
                        const newUserResponse = await axios.post('/api/createuser', { id: account });
                        setUserData(newUserResponse.data);
                    } else {
                        console.error("Failed to fetch user data", error.response ? error.response.data : error.message);
                    }
                }
            } catch (error) {
                console.error("User denied account access or there was an error", error);
            }
        } else {
            console.error("MetaMask not detected");
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
        setUserData(null);
    };
    return (
        <header>
            <div className="upperHeader">
                <div className="title">
                    <img src="images/logo.png" alt="Crypto Crate Logo" />
                    <h1>Crypto Crates</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/userDashboard">Dashboard</Link></li>
                        <li><Link to="/marketplace">Marketplace</Link></li>
                        <li><Link to="/auctionHouse">Auction House</Link></li>
                    </ul>
                </nav>
                <div className="wallet-connect">
                    {account ? (
                        <div>
                            <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
                            <button onClick={disconnectWallet} className="disconnect">Disconnect</button>
                        </div>
                    ) : (
                        <button onClick={connectWallet}>Connect Wallet</button>
                    )}
                </div>
            </div>
            {/* <div className="lowerHeader">
                {
                    account?(
                        <div className="count">
                            <div className="point_count">
                                You have {userData.points} points
                            </div>
                            <div className="create_count">
                                You have {userData.crates.length} unopen crates.
                            </div>
                        </div>
                    ):(
                        <div className="count">
                            Please connect a wallet to get points
                        </div>
                    )
                }
            </div> */}
        </header>
    );
};

export default Header;
