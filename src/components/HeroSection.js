import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';

const HeroSection = (name) => {

// const {name} = myData;
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'> Welcome to 

                    </p>
                    <h1>{name.myData} </h1>
                    <p>
                    Our ecommerce project aims to provide a comprehensive online platform for customers to buy and sell products in a convenient, secure,
and efficient manner. The platform will be designed to cater to the needs of different types of customers, including retail customers,
wholesale customers, and auction enthusiasts. </p>
                    <NavLink>
                        <Button onClick="/products">
                            Shop Now
                        </Button>
                    </NavLink>

                </div>
                <div className='hero-section-image'>
                    <figure>
                        <img src='images/hero.jpg' alt='hero-section-image' className='img-style' />
                        </figure>
                    </div>

            </div>

        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection