import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

function MainBoard() {
  return (
    <div>
      <Wrapper>
        <Container>
          <Pin />
        </Container>
      </Wrapper>
    </div>
  )
}

export default MainBoard

const Wrapper = styled.div`
  background-color: pink;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`
const Container = styled.div`
  background-color: green;
  width: 80%;
`
