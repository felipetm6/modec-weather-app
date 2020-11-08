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

  svg {
    fill: #434c5e;
    height: 36px;
    margin-right: 24px;
    width: 36px;
  }
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
  display: block;
  font-size: 16px;
  margin: 16px auto;
  padding: 8px 16px;

  &:disabled {
    background-color: #d8dee9;
    cursor: default;
  }
`;

const MainArea = styled.section`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;

  & > div {
    &:first-child {
      position: absolute;
    }

    &:last-child {
      align-items: center;
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 5vw;
    }
  }
`;

const BlankCard = styled(WeatherCardStyled.Wrapper)`
  background-color: #d8dee9;
  height: 315px;
  width: 346px;
`;

const CitiesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;

  & > p {
    color: #4c566a;
    font-size: 20px;
    text-align: center;
    width: 100%;
  }

  & > ${WeatherCardStyled.Wrapper} {
    margin-right: 10px;
    margin-bottom: 16px;
  }
`;

export const MainStyled = {
  BlankCard,
  CitiesContainer,
  MainArea,
  SearchButton,
  Subtitle,
  Title,
  Wrapper,
};
