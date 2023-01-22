import styled from "styled-components";

const Count = styled.div`
    font-family: cursive;
    font-size: ${({ fontSize }) => fontSize ? fontSize : 16}px;
    letter-spacing: 4px;
    font-weight: 900;
`

export {Count}