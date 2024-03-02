import React from 'react'
import '../App.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='hero-btn'>
                <button className='hero-btn'>Shop Now</button>
                <button className='secondary-btn hero-btn'>Catagoery</button>
            </div>
            <div className='shopping'>
            <a>Also Available On</a>
            <div className='brand-icons'>
                <img src='/Image/amazon.png' alt='amaxone img' />
                <img src='/Image/flipkart.png' alt='amaxone img' />
            </div>
            </div>
        </div>
        <div className='hero-image'>
        <img src='/Image/hero-image.png' alt='hero img' />
        </div>
    </div>
  )
}

export default Hero