import React, {useState} from 'react'
import { useEffect } from 'react';

const Test1 = () => {
    
    const [rows, setRows] = useState([]);


    useEffect(() => {
        const api = `http://127.0.0.1:8000`;
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setRows(data);
        });
    },[]);


    return (
        <div>
            {rows.map(row => <div key={row.id}>{row.password} , {row.email}, {row.contact}, {row.name}</div>)}
        </div>
    )}

export default Test1
