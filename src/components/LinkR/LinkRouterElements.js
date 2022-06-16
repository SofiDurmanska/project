import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkRouterWrapper = styled(Link)`
  background: var(--color-dark);
  font-size: 2rem;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    transition: 0.3s transform;
  }
  
  &:hover::after {
    transform: translateX(100%);
  }
`;

export const LinkRouterTextBg = styled.span`
  padding: 2.2rem 2.8rem;
  background: var(--color-dark);
  text-transform: uppercase;
  font-size: 2rem;
  color: var(--color-light);
  font-weight: 300;
  font-family: var(--font-heading);
  letter-spacing: 4px;
`;

export const LinkRouterImgBg = styled.span`
  padding: 2.2rem;
  background: var(--color-accent);
  display: flex;
  align-items: center;
  align-content: center;
`;
