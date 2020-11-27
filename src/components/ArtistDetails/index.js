import React ,{useState, useEffect} from 'react';
import {render} from 'react-dom';
import './index.css'
import Icon2 from "../../images/city.jpeg";
import {Button} from '../ButtonElementRedirect';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {serverURL} from '../../APIconfig';
import {ButtonElementRedirect} from '../ButtonElementRedirect';

function GetStatus(props){
    render()
    {
        return(
            <div>
                {(()=>{
                    if(props.ava==="Available")
                    {
                        return(
                            <div className='available status'>Status : {props.ava}</div>
                        );
                    }
                    else if(props.ava==="Busy")
                    {
                        return(
                            <div className='busy status'>Status : {props.ava}</div>
                        );
                    }
                })()}
            </div>
        )
    
}

}

function ArtistDetails() {
    const [docs, setDocs] = useState([])
    // Axios.get

    const params = useParams()

    useEffect(() => {
        Axios.get(serverURL+ '/getArtists/' + params.id)
        .then((res) => {
            console.log(res.data[0]);
            setDocs(res.data[0]);
            console.log(docs);
        })
        .catch((err) => console.log(err))    
    }, [])
    const [docs2, setDocs2] = useState([]);


    console.log(docs2);

    useEffect(() => {
        fetch(serverURL + '/artworks/' + params.id)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setDocs2(data);
        });
    },[])




    return (
        <div class='container'>
            <div class="wrapper">
                <div class="card1">
                    <img src='/images/Avatar.jpeg' alt="Hey" class="image"/>
                </div>
                <div class="card2">
                    <div class="name">{docs.username}</div>
                    <div class="artist"><b>Speciality : {docs.speciality}</b></div>
                    Status :<div class={docs.status}>{docs.status}</div>
                    <Button >Place Commission Order</Button>
                </div>
            </div>
            <div class="wrapper2">
            {docs2 && docs2.map((doc) => (
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

export default ArtistDetails;
