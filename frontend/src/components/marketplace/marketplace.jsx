import React, { useEffect, useState } from "react";
import axios from 'axios';
import './marketplace.css';
import toast from "react-hot-toast";
import Modal from './marketplace.modal.jsx';

const Crates = () => {
    const [crates, setCrate] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCrate, setSelectedCrate] = useState(null);
    const [userId, setUserId] = useState("6699605a71a8c5294cbf57b0"); // Replace with actual user ID

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/getallcrate");
                setCrate(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Fetch immediately on component mount

        const intervalId = setInterval(fetchData, 2000); // Fetch every 2 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const deleteCrate = async (crateId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/deleteCrate/${crateId}`);
            setCrate((prevCrate) => prevCrate.filter((crate) => crate._id !== crateId));
            toast.success(response.data.msg, { position: 'top-right' });
        } catch (error) {
            console.log('Error deleting crate:', error);
        }
    };

    const addUserCrate = async (userId, crate) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/addUserCrate`, { userId, crate });
            toast.success('Crate added to your list!', { position: 'top-right' });
        } catch (error) {
            console.log('Error adding crate to user:', error);
        }
    };

    const handleCrateClick = (crate) => {
        setSelectedCrate(crate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCrate(null);
    };

    const handleBuyCrate = async () => {
        if (selectedCrate) {
            await addUserCrate(userId, selectedCrate);
            await deleteCrate(selectedCrate._id);
            handleCloseModal();
        }
    };

    const rows = crates.reduce((acc, _, index) => {
        if (index % 8 === 0) {
            acc.push(crates.slice(index, index + 8));
        }
        return acc;
    }, []);

    return (
        <div>
            <table className="crates-table" style={{backgroundImage:`url("images/wooden-texture.webp")`}}>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((crate) => (
                                <td key={crate._id} className="crate-cell" onClick={() => handleCrateClick(crate)}>
                                    <img src="images/crate.jpg" alt="" className="hologram" />
                                    <p>Price: {crate.price}</p>
                                </td>
                            ))}
                            {Array.from({ length: Math.max(0, 8 - row.length) }).map((_, index) => (
                                <td key={`empty-${index}`} className="crate-cell empty-cell"></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={showModal} onClose={handleCloseModal} onBuy={handleBuyCrate} crate={selectedCrate} />
        </div>
    );
};

export default Crates;
