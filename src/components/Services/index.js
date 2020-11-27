import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-3.svg';
import './index.css'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='ServicesContainer' id='services'>
      <h1 className = 'ServicesH1'>Our services</h1>
      <div className = 'ServicesWrapper'>
        <Link className='Link' to='/artists'>
        <div className = 'ServicesCard'>
          <img className = 'ServicesIcon' src={Icon1} alt='icon1'/>
          <h2 className = 'ServicesH2'>Sketches</h2>
          <p className='ServicesP'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        </Link>
        <Link className='Link' to='/artists'>
        <div className = 'ServicesCard'>
          <img className = 'ServicesIcon' src={Icon2} alt='icon2'/>
          <h2 className = 'ServicesH2'>Paintings</h2>
          <p className='ServicesP'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        </Link>
        <Link className='Link' to='/artists'>
        <div className = 'ServicesCard'>
          <img className = 'ServicesIcon' src={Icon3} alt='icon3'/>
          <h2 className = 'ServicesH2'>Digital Artwork</h2>
          <p className='ServicesP'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
