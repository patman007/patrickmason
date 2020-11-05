import React from 'react'
import styled from 'styled-components'

//Child3 Functional Component
const Child3 = () => (
    <StyledDiv>
        <p>I am the Child3 component</p>
    </StyledDiv>
    
)

const StyledDiv = styled.div `
    border : solid 5px yellow;
    p {
        color: yellow
    }
    `    

export default Child3