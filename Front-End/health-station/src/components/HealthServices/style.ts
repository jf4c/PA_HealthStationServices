import styled from 'styled-components'

export const CarouselContainer = styled.div`
    background-color: #FFF;
    img{
      height: 200px;
      border-radius: 20px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
    }
    img:hover{
      transition: 0.4s;
      box-shadow: 0 0 0px rgba(0, 0, 0, 0.5);
    }
 `

export const LoadingContainer = styled.div`
    .img{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .name{
      margin: 0 auto  ;
    }
    .p-skeleton{
      margin-bottom: 10px;
    }
`