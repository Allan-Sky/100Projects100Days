import styled from 'styled-components';

export const Container = styled.div`
  section{
      display:flex;
      width: 70%;
      margin: 2rem auto;

      .ingre{
          font-size: 1.2rem;
        img{
            height: 350px;
            width: 350px;
         }
          ul{
             list-style:circle;
             li{
                 margin-left:1.3rem;
             }
          }

          p{
            font-size:1.2rem;
            span{
                font-weight:700;
                
            }
            
          }
      }
      .method{
          margin-left: 3rem;
          
          font: 16px bold arial, sans-serif;

          p{
              margin-top: 2rem;
          }
      }
  }



  .recipeVideo {
      margin-top: 4rem;
      display:flex;
      align-items:center;
      flex-direction:column;
      iframe{
          border:none;
          outline:none;
      }
  }
  h1{
        text-align:center;
    }
`;
