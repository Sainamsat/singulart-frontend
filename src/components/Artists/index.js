import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { serverURL } from '../../APIconfig';
// import useFirestore from '../../hooks/useFirestore';
import Icon1 from '../../images/avatar.svg';
import './index.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Artists = () => {

    // const {docs} = useFirestore('artist');

    const [docs, setDocs] = useState([]);


    useEffect(() => {
        fetch(serverURL + '/getArtists')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setDocs(data);
            console.log(docs);
        });
    },[]);

    
    return (
        <div className='Container'>
            <Link className='Logo' to='/'><MdKeyboardArrowLeft />Homepage</Link>
            <h1 className='H1'>Our Artists</h1>
            <div className='Wrapper'>
                    {docs && docs.map((doc) => (
                    <Link to={'/artists/' + doc.user_id}>
                    <div className='Card' key={doc.user_id}>
                        <img className='Avatar' src={Icon1} alt='icon1' />
                        <h2 className='H2'><b>{doc.username}</b></h2>
                        <p className='P'>
                            Specialized in <b>{doc.speciality}</b>. Currently <b>{doc.status}</b>.
                        </p> <br />
                        <p className='P'>
                            Email: <b>{doc.email}</b>
                        </p>
                    </div>
                    </Link>
                    ))}
            </div>
        </div>
    )
}

export default Artists
