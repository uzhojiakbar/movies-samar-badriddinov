import styled from "styled-components";

const Container = styled.div``
const InputCon = styled.div`
    input{
        padding: 1rem;
        width: 95%;
        font-size: 22px;
        font-family: monospace;
        outline: none;
        border: 1px solid grey;
        border-radius: 5px;
        margin: 10px 0 30px 0;

        text-transform: capitalize;
        letter-spacing: 3px;
        :focus{
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.85);
        }
    }
`
const Filter = styled.div`
    display: flex;
    align-items: center;

    text-transform: capitalize;
    .option{
        min-width: 180px;

        border: 2px solid rgba(0, 0, 0, 0.85);
        border-radius: 1px;
        background-color:white;
        
        font-family: monospace;
        font-weight: 900;
        font-size: 17px;
        padding: 5px;

        cursor: pointer;
        transition: .3s;
        :hover{
            background-color:rgba(0, 0, 0, 0.75);
            border: 2px solid rgba(0, 0, 0, 0.85);
            color: white;
        }
    }
    .active{
        background-color:rgba(0, 0, 0, 0.85);
        color: white;
    }
`

export { Container, InputCon, Filter }