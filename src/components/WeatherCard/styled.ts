import styled from 'styled-components';

const Wrapper = styled.article`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(184, 194, 215, 0.25) 0 4px 6px,
    rgba(184, 194, 215, 0.1) 0 5px 7px;
  color: #2e3440;
  height: fit-content;
  max-width: 320px;
  padding: 24px;
  width: 100%;

  & > p {
    &:first-child {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const LocationName = styled.h2`
  color: #88c0d0;
  font-size: 24px;
  margin-top: 8px;
`;

const MainSection = styled.section`
  display: grid;
  grid-template-areas: 'icon temperature' '. description';
  grid-template-columns: 40% 70%;
  grid-template-rows: 75px auto;

  & > p {
    font-weight: bold;
    grid-area: description;
    margin: 0;
    text-transform: capitalize;
  }
`;

const TemperatureIcon = styled.div`
  grid-area: icon;

  & > svg {
    fill: #4c566a;
    height: 90px;
    width: 90px;
  }
`;

const TemperatureSection = styled.div`
  display: flex;
  grid-area: temperature;
`;

const CurrentTemperature = styled.p`
  font-size: 60px;
  font-weight: bold;
  margin: 0;
`;

const TemperatureForecast = styled.div`
  margin-left: 16px;
  padding-top: 8px;

  & > p {
    align-items: flex-end;
    display: flex;
    margin: 0;

    & > svg {
      margin-right: 4px;
    }

    &:first-child {
      & > svg {
        fill: #a3be8c;
      }
    }

    &:last-child {
      & > svg {
        fill: #bf616a;
      }

      margin-top: 4px;
    }
  }
`;

const AdditionalData = styled.section`
  color: #3b4252;
  display: flex;
  flex: 1 0 23%;
  justify-content: space-between;
`;

const AdditionalDataEntry = styled.div`
  font-size: 13px;
  margin: 20px 0;

  & > p {
    margin: 0;
    text-align: center;

    &:last-child {
      font-weight: bold;
    }
  }
`;

export const WeatherCardStyled = {
  AdditionalData,
  AdditionalDataEntry,
  CurrentTemperature,
  LocationName,
  MainSection,
  TemperatureForecast,
  TemperatureIcon,
  TemperatureSection,
  Wrapper,
};
