import styled from 'styled-components'

export const NavDiv = styled.div `
 display: grid;
 width: 100% ;
 background-color: gainsborough;  
`

export const NavHeader = styled.span `
  font-size: 2rem;
  font-family: "Cutive Mono";
  width: 8rem ;
  margin: 1rem 1rem;
  color: #B0BEC5 ;
  letter-spacing: 4px ;
  padding: 1rem 1rem;
  font-weight: bold;
  border: 2px solid black;
`
export const NavStyle = styled.nav `
  width: 100% ;
  height: 100px ;
  background: black;
  display: flex;
  font-weight: bold;
  justify-content: space-around ;
`
export const AnchorStyle = styled.a `
  font-size: 1.8rem ;
  font-family: 'Cutive Mono' ;
  border-bottom: 2px solid gainsborough;
  height: 3.7rem;
  color: white ;
`
export const NavContent = styled.div `
  align-items: items-center;
`

export const TopLevelNav = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`