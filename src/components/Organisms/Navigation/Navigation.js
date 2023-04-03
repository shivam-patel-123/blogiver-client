import styled from "styled-components";
import { Container } from "../../../style/Container";

export const NavigationWrapper = styled.div`
    background-color: black;
    color: white;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    width: 100vw;
    padding-block: 1.2rem;
    border-bottom: 1px solid #efefef;
    font-size: 1.6rem;
`;

export const NavigationContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 0.8rem;
`;
