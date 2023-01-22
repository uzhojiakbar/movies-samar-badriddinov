import styled from "styled-components";

const Count = styled.div`
    font-family: cursive;
    font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
    letter-spacing: 4px;
    font-weight: 900;
`
const AddMovie = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    .add{
        border: 1px solid blue;
        width: 10%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 180px;

        border: 2px solid rgba(0, 0, 0, 0.85);
        border-radius: 1px;
        background-color:white;
        
        font-family: monospace;
        font-weight: 900;
        font-size: 20px;
        padding: 5px;

        cursor: pointer;
        transition: .3s;
        :hover{
            background-color:rgba(0, 0, 0, 0.85);
            border: 2px solid rgba(0, 0, 0, 0.85);
            color: white;
        }
    }
    input{
        width: 45%;
        height: 40px;
        font-size: 22px;
        font-family: monospace;
        outline: none;
        padding: 0.3rem;
        border: 1px solid grey;
        border-radius: 5px;
        text-transform: capitalize;
        letter-spacing: 3px;
        :focus{
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.85);
        }
    }
`

export { Count, AddMovie }