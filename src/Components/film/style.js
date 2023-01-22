import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    /* justify-content: center; */
`
const FilmInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border-bottom: 2px solid black;
    box-shadow: 0 0 2px black;
    padding: 0 1.5rem;
    .name{
        flex: 2;
        font-size: 22px;
        letter-spacing: 2px;
        font-family: monospace;
    }
    .options{
        flex:1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .views{
            font-family: monospace;
            font-weight: 900;
            font-size: 18px;
            letter-spacing: 2px;
            z-index: 999;
            position: relative;

        }
        .controls{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .btn{
                font-family: monospace;
                font-weight: 900;
                font-size: 18px;
                letter-spacing: 2px;
                padding: 7px 10px;
                border-radius: 5px;
                background-color: #efefef;
    
                cursor: pointer;
    
                position: absolute;
                right: 50px;
            }
        }
    }
    .count{
        width: 80px;
        font-size: 22px;
        letter-spacing: 2px;
        font-family: monospace;
    }
`

export { Container, FilmInfo }
