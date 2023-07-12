import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Receipts = (props) => {
    const [ donation, setDonation ] = useState('')
    const [ fundName, setFundName ] = useState('')
    const [ date, setDate ] = useState('')
    const location = useLocation()

    useEffect(() => {
        const fetchBusiness = () => {
            const { donation, date, fund } = location.state

            const formattedDate = new Date()

            setDonation(donation)
            setDate(formattedDate.toString())
            setFundName(fund)
        }
        fetchBusiness();
    }, []);

    return (
        <div className="receipt-container">
        <h1>THANK YOU</h1>
        <div className="receipt-header">
        <h3>For Your Generous Donation to "{fundName}"</h3>
        </div>

        <div className="receipt-info">
        <div><b>Date of Donation:</b> {date}</div>
        <div><b>Donation Value:</b> ${donation}</div>
        </div>
        </div>
    )
}

export default Receipts;
