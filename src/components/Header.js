import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest'
import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoWrapper>
        <HomePageButton>
          <a href='/'>Homepage</a>
        </HomePageButton>
        <FollowingButton>
          <a href='/'>Following</a>
        </FollowingButton>
        <SearchWrapper>
          <SearhBarWrapper></SearhBarWrapper>
        </SearchWrapper>
        <IconsWrapper></IconsWrapper>
      </Wrapper>
    </div>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`
const HomePageButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
`
