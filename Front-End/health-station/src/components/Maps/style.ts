import styled from 'styled-components'

export const MapsContainer = styled.div`
  height: 500px;
  width: 50%;
  margin-bottom: 2rem;

  #map{
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  #pac-input{
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
`
