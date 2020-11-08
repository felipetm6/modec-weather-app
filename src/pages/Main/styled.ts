import { WeatherCardStyled } from 'components/WeatherCard/styled';
import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 72vh;
  padding: 80px 24px;
  position: relative;
`;

const Title = styled.h1`
  color: #434c5e;
  font-size: 32px;
  margin-bottom: 24px;
  margin-top: 0;
  text-align: center;

  svg {
    fill: #434c5e;
    height: 28px;
    margin-right: 16px;
    width: 28px;
  }

  @media (min-width: 560px) {
    font-size: 40px;
    margin-bottom: 36px;

    svg {
      height: 36px;
      margin-right: 24px;
      width: 36px;
    }
  }
`;

const Subtitle = styled.p`
  color: #4c566a;
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 0;
  text-align: center;

  @media (min-width: 560px) {
    font-size: 20px;
  }
`;

const SearchButton = styled.button`
  background-color: #88c9e0;
  border: none;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: #445262;
  cursor: pointer;
  display: block;
  font-size: 16px;
  margin: 16px auto;
  padding: 8px 16px;
  transition: 0.2s;

  &:hover {
    background-color: #78bac6;
  }

  &:active {
    background-color: #6bb1c4;
  }

  &:disabled {
    background-color: #d8dee9;
    box-shadow: none;
    cursor: default;
  }
`;

const MainArea = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;

  @media (min-width: 560px) {
    flex-direction: row;
  }

  & > div {
    &:first-child {
      position: absolute;
    }

    &:nth-child(2) {
      height: 86vw;
      position: relative;
      width: 86vw;

      @media (min-width: 560px) {
        height: 320px;
        width: 320px;
      }

      @media (min-width: 830px) {
        height: 400px;
        width: 400px;
      }
    }

    &:last-child {
      align-items: center;
      display: flex;
      flex: 0 0 auto;
      flex-direction: column-reverse;
      justify-content: flex-end;

      @media (min-width: 560px) {
        flex-direction: column;
        margin-left: 5vw;
      }
    }
  }
`;

const BlankCard = styled(WeatherCardStyled.Wrapper)`
  align-items: center;
  background-color: #d8dee9;
  box-shadow: none;
  display: none;
  height: 235px;
  justify-content: center;
  width: 300px;

  @media (min-width: 560px) {
    display: flex;
  }
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
    margin-right: 0;
    margin-bottom: 16px;

    @media (min-width: 560px) {
      margin-right: 10px;
    }
  }
`;

const ToastHandler = styled.div`
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 80px;
  z-index: 1;
`;

export const MainStyled = {
  BlankCard,
  CitiesContainer,
  MainArea,
  SearchButton,
  Subtitle,
  Title,
  ToastHandler,
  Wrapper,
};
