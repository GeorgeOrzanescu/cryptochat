import { useState, useEffect } from "react";
import axios from "axios";
import "../style/cryptodata.css"

import Chat from "./Chat";
import {auth} from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';


const CryptoData = () => {
    const [cryptodata, setCrytodata] = useState();
    const [user] = useAuthState(auth);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api").then((res) => {
            const responseCryto = res.data;
            setCrytodata(responseCryto);
        });
    }, []);

    console.log(cryptodata);
    return (
        <div className="container">
            <h1>Crypto data using axios</h1>
        {
        cryptodata && cryptodata.map((crypto) => {
            const { cryptocurrency, price, market_cap, change } = crypto;
            return (
                <div className="crypto">
                <h2>{ cryptocurrency}</h2>
                <p> price: { price}</p>
                <p> market cap: { market_cap}</p>
                <p> change: { change}</p>
                </div>
                
            )
            
        })}
            <div>{user ? <Chat/> : <div></div>}  </div>
        </div>
         
    );
};

export default CryptoData;