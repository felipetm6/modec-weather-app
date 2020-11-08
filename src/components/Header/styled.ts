import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 16px 36px;
`;

const Link = styled.a`
  align-items: center;
  color: #808ca4;
  display: flex;
  text-decoration: none;
  transition: 0.2s;

  & > svg {
    fill: #808ca4;
    height: 18px;
    margin-bottom: 1px;
    margin-left: 8px;
    width: 18px;
  }

  &:hover {
    color: #4f596c;

    & > svg {
      fill: #4f596c;
    }
  }
`;

export const HeaderStyled = { Link, Wrapper };
