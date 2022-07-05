import React from 'react'
import styled from 'styled-components'

function Pin() {
  return (
    <Wrapper>
      <Container>
        <img src='https://images.unsplash.com/photo-1657037030919-9fa6119f6b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80' />
      </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`
