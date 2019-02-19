import React from 'react'
import { NavDiv, NavHeader, NavStyle, AnchorStyle } from './NavStyledComponents'

export default function NavBar() {
  return (
    <NavDiv>
      <NavHeader>
       Coin Pouch.
      </NavHeader>
      <NavStyle>
       <AnchorStyle>
        Prices
       </AnchorStyle>
       <AnchorStyle>
        Lists 
       </AnchorStyle>
       <AnchorStyle>
        Links 
        </AnchorStyle>
      </NavStyle>
    </NavDiv>
  )
}
