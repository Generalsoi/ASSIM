import { useState } from 'react';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../backendUrl';

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

const useAxiosPost = ({ url, method, body, headers }) => {
    
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('')
    const [loading, setloading] = useState(false);

    const fetchData = () => {
        setloading(true);
        axios[method](url, JSON.parse(body), { headers })
            .then((res) => {
                setResponse(res.data);
                setMessage(res.data.message)
                setSuccess(true);
                setError("")
            })
            .catch((err) => {
                setError(err.response.data.message);
                setSuccess(false)
            })
            .finally(() => {
                setloading(false);
            });
    };

    return { response, success, error, loading, message, fetchData };
};

export default useAxiosPost;