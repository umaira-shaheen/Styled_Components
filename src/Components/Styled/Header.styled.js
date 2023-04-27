import styled from "styled-components";
export const HeaderStyled=styled.header`
background-color:${({theme})=>theme.colors.header};
padding:40px 0;

}
`
export const Nav=styled.nav`
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin-botton:40px;
 @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`
export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  margin-top:20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
