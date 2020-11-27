import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Icon2 from "../../images/city.jpeg";
import './index.css';
import BrushIcon from '@material-ui/icons/Brush';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Axios from 'axios';
import {serverURL} from '../../APIconfig';


function Artwork() {

    const [docs, setDocs] = useState([]);


    console.log(docs);

    useEffect(() => {
        fetch(serverURL + '/artworks')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setDocs(data);
        });
    },[])



    return (
        <div className='Container'>
            <h1 className='H1'>Gallery</h1>
            <hr class='line'></hr>
            <div class="navigate">
                <Link className='Logo' to='/'><MdKeyboardArrowLeft />Homepage</Link>
            </div>
            <div class="Wrapper">
                {docs && docs.map((doc) => (
                    <Link to={'/artworks/' + doc.art_id}>
                        <div class="card" key={doc.art_id}>
                            <img src={doc.image_path}></img>
                                <div class="data">
                                    <p class="title">&nbsp;{doc.name} </p>
                                    <p class='likes'> &nbsp;by {doc.username} <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. {doc.price}</b></p>
                                    
                                </div>
                        </div>
                    </Link>
                    )
                )}
            </div> 
        </div>
    )
}

export default Artwork;