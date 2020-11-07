import { WeatherCardStyled } from 'components/WeatherCard/styled';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 80px 24px;
`;

const Title = styled.h1`
  color: #434c5e;
  font-size: 40px;
  margin-bottom: 36px;
  margin-top: 0;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #4c566a;
  font-size: 20px;
  margin: 24px 0;
  text-align: center;
`;

const SearchButton = styled.button`
  background-color: #88c9e0;
  border: none;
  border-radius: 4px;
  color: #445262;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: 16px;
  top: 16px;
`;

const MainArea = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 15%;

  & > div {
    &:first-child {
      position: absolute;
    }
  }

  & > ${WeatherCardStyled.Wrapper} {
    margin-left: 5vw;
  }
`;

export const MainStyled = { MainArea, SearchButton, Subtitle, Title, Wrapper };
