import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Forecast from "./Forecast";

const getData = async () => {
    const apiUrl = 'https://cloudssp-jbe-backend.azurewebsites.net/weatherforecast';

    const res = await axios.get(apiUrl);
    return res.data;
}

const Data = () => {
    const { data, status } = useQuery('mydata', getData);
    console.log(data);

    return (
        <div>
            <h2>Data</h2>
            { status === 'error' && ( <div>Error getting Data</div>)}
            { status === 'loading' && ( <div>Loading Data</div>)}
            { status === 'success' && (
               <div>
                { data.map(forecast => <Forecast key={forecast.date} forecast={forecast} />)}
               </div> 
            )};
        </div>
    )
}

export default Data;