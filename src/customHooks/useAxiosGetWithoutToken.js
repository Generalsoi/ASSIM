/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiEndpoint } from "../config";

axios.defaults.baseURL = `${apiEndpoint}`;

const useAxiosGetWithoutToken = ({ url, method }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        setloading(true);
        axios({
            method,
            url,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };



    useEffect(() => {
        fetchData();
    }, [method, url]);

    return { response, error, loading };
};

export default useAxiosGetWithoutToken;