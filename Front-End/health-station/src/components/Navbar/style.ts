import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    font-size: 5rem;
    color: red
  }

  ul{
    display: flex;
    width: 20%;
    justify-content: space-between;
  }
  li{
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 100px;
  }
  .link {
    display: flex;
    color: black;
    text-decoration: none;
    margin-left: 0.5rem;
    align-items: center;
    font-size: 1.2rem;
  }

  li:hover {
    background-color: #f1f1f1;
    .icon {
      color: red;
    }
  }
  .icon {
    font-size: 2rem;
    margin-right: 0.4rem;
  }
`