// src/DataFetcher.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = ({ onDataChange, apiUrl, someOtherProp }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl); // Use the destructured apiUrl
                onDataChange(response.data, null); // Call the parent's function with data and no error
                setLoading(false); // Update loading state
            } catch (error) {
                onDataChange(null, error); // Call the parent's function with no data and the error
                setLoading(false); // Update loading state
            } finally{
                setLoading(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, [onDataChange, apiUrl]); // Include apiUrl in the dependency array

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-warning load-info"  role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <span style={{ color: "blue", marginLeft: "5px", marginTop:"50px" }} className='load-info'>Loading...</span>
            </div>
        );
    }

    return null; // Since the parent will handle the display of data and errors
};

export default FetchData;
