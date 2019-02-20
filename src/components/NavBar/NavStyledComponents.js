import styled from 'styled-components'

export const NavDiv = styled.div `
 display: flex;
 flex-direction: column ;
 width: 100% ;
 justify-content: center ;
 background: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80") center no-repeat ;
 background-size: 100% ;
`

export const NavHeader = styled.span `
font-size: 2.8rem;
font-family: "Faster One";
width: 100% ;
color: #B0BEC5 ;
margin-left: 20px ;
letter-spacing: 4px ;
margin-bottom: .5rem ;
text-shadow: 
#B0BEC5 5px 0px 5px, 
#006064 5px 0px 10px, 
#0D47A1 5px 0px 15px, 
#1A237E 5px 10px 20px, 
#424242 5px 0px 30px, 
${'' /* #FD2D95 0px 0px 40px,  */}
${'' /* #FF2D95 0px 0px 50px,  */}
#FF2D95 0px 0px 75px;
`
export const NavStyle = styled.nav `
width: 100% ;
height: 100px ;
display: flex;
justify-content: space-around ;
`
export const AnchorStyle = styled.a `
font-size: 1.8rem ;
font-family: 'Faster One' ;
color: #B0BEC5 ;
text-shadow: 
#039BE5 0px 0px 5px, 
#006064 0px 0px 10px, 
#0D47A1 0px 0px 15px, 
#1A237E 0px 10px 20px, 
${'' /* #FC2D95 0px 0px 30px,  */}
${'' /* #FD2D95 0px 0px 40px,  */}
${'' /* #FF2D95 0px 0px 50px,  */}
#FF2D95 0px 0px 75px;
`
