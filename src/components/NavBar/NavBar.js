import React from 'react'
import { NavDiv, NavHeader, NavStyle, AnchorStyle, NavContent, TopLevelNav } from './NavStyledComponents'

export default function NavBar() {
  return (
    <NavDiv>
      <TopLevelNav>
        <NavHeader>
        Coin Pouch.
        </NavHeader>
        <NavContent>
          Coin Gallery
        </NavContent>
      </TopLevelNav>
      <NavStyle>
       <AnchorStyle>
        Prices
       </AnchorStyle>
       <AnchorStyle>
        Coin Gallery 
       </AnchorStyle>
       <AnchorStyle>
        Blockchain Data
        </AnchorStyle>
        <AnchorStyle>
          Exchanges
        </AnchorStyle>
      </NavStyle>
    </NavDiv>
  )
}
