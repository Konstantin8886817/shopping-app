import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
    margin: 40px;
`;

export const ButtonStyled = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 25px;
    top: 20px;
    color: black;
`;