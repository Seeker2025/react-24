import styled from "styled-components";

export const UlBigBox = styled.ul`
    position: relative; /* Так задаём систему координат для Box */
    /* border: 1px solid red; */
    /* width: 600px; */
`;
/* позиционируем Box относительно UlBigBox */
export const Box = styled.div`
    position: absolute;
    top: 0px;
    right: 300px;
/* позиционируем span относительно Box */
        span {
            position: absolute;
            top: 0px;
            right: -30px;
            color: #ff3b3b;
            font-size: 1.7em;
        }
`;

