import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height: 80%;


    h1{
        font-size: 2.5rem;
    }
    button{
        height: 3rem;
        width: 10rem;

        font: 1.6rem bold Roboto, sans-serif;

        border-radius: 6px;
        
        border:none;
        outline:none;
        background-color:#5C9EAD;
        transition: background-color 0.5s;
        &:hover{
            background-color: #5C9E00;
            cursor: pointer;
        }
    }
`;
