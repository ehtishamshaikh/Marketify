import React from 'react'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <Wrapper>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    margin-left: 30%;
    
    `;

export default ErrorPage