import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  .info{
    width: 40%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: #f5f5f5;
    .name{
      font-size: 1.3rem;
      display: flex;
      text-align: center;
      justify-content: center;
      border-radius: 5px;
      margin-bottom: 1rem;
      border: 1px solid #000;
      box-shadow: 0 0 10px rgba(0,0,0,0.4);
      background-color: #FFF;
    }
    .address{
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-evenly;
      border-radius: 5px;
      margin-bottom: 1rem;
      border: 1px solid #000;
      background-color: #FFF;
      box-shadow: 0 0 10px rgba(0,0,0,0.4);
      label{
        font-size: 1.5rem;
        margin: 1rem;
      }
    }

  }

  `