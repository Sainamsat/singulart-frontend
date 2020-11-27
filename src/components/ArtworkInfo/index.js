import React ,{useState, useEffect} from 'react';
import './index.css'
import Icon2 from "../../images/city.jpeg";
import {Button} from '../ButtonElementRedirect';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import {serverURL} from '../../APIconfig';
import StripeCheckout from 'react-stripe-checkout';


function ArtistInfo() {
    
    const [docs, setDocs] = useState([])
    // Axios.get

    const params = useParams()

    useEffect(() => {
        Axios.get(serverURL+ '/artworks/' + params.id)
        .then((res) => {
            console.log(res.data[0]);
            setDocs(res.data[0]);
            console.log(docs);
        })
        .catch((err) => console.log(err))    
    }, [])

    function handleToken(token,addresses)
    {
        console.log({token,addresses})
    }

    const handleSubmit = () => {
        if (!localStorage.getItem('email')) {
            alert('Please Login to add the item to the cart');
        } else {
            Axios.post(serverURL + '/addtocart',{
                email: localStorage.getItem('email'),
                id : params.id
            })
            .then((res) => {
                alert('item successfully added');
                console.log(res);
            })
            .catch((err) => {
                throw err;
            })
        }
    }

    return (
        <div class='container'>
            <div class="wrapper">
                <div class="card1">
                    <img src={docs.image_path} alt="" class="image"/>
                </div>
                <div class="card2">
                    <div class="name">{docs.username}</div>
                    <div class="artist">{docs.name}</div>
                    <div class="amt"><b>₹{docs.price}</b></div>
                    <div class='taxes'>Local Taxes Included</div>
                    <div class="size">Available in {docs.size}</div>
                    <div class="stock"><b>In Stock</b></div>
                    <div onClick={()=> {handleSubmit()}}>
                        <StripeCheckout 
                        stripeKey="pk_test_51HrL86AnmICYgk9ZsEMDlRwnAM19cerNrxeyU67bwsX2OnFoIL4D4tLmCCiF1OM6gClwNCvj2Nw90z4lmqcon2ui00Ik2cBCPv"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={docs.price}
                        name='Artwork'
                        email={localStorage.getItem('email')}
                        currency='INR'
                        />

                    </div>
                </div>
                <div class='card1'>
                    <div class="description">
                        {docs.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistInfo
