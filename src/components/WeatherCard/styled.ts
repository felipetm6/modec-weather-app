import styled, { css } from 'styled-components';

type WrapperProps = {
  clickable?: boolean;
  collapsed?: boolean;
};

const LocationName = styled.h2`
  color: #88c0d0;
  font-size: 20px;
  margin-top: 8px;

  @media (min-width: 830px) {
    font-size: 24px;
  }
`;

const MainSection = styled.section`
  display: grid;
  grid-template-areas: 'icon temperature' '. description';
  grid-template-columns: 40% 70%;
  grid-template-rows: 55px auto;

  @media (min-width: 830px) {
    grid-template-rows: 75px auto;
  }

  & > p {
    font-size: 14px;
    font-weight: bold;
    grid-area: description;
    margin: 0 0 0 8px;
    text-transform: capitalize;

    @media (min-width: 830px) {
      font-size: 16px;
    }
  }
`;

const TemperatureIcon = styled.div`
  align-items: center;
  display: flex;
  grid-area: icon;
  justify-content: center;

  & > svg {
    fill: #4c566a;
    height: 60px;
    width: 60px;

    @media (min-width: 830px) {
      height: 90px;
      width: 90px;
    }
  }
`;

const TemperatureSection = styled.div`
  display: flex;
  grid-area: temperature;
`;

const CurrentTemperature = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin: 0;

  @media (min-width: 830px) {
    font-size: 60px;
  }
`;

const TemperatureForecast = styled.div`
  margin-left: 16px;
  padding-top: 8px;

  & > p {
    align-items: flex-end;
    display: flex;
    font-size: 14px;
    margin: 0;

    @media (min-width: 830px) {
      font-size: 16px;
    }

    & > svg {
      height: 20px;
      margin-right: 4px;
      width: 20px;

      @media (min-width: 830px) {
        height: 24px;
        width: 24px;
      }
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
  margin: 20px 0 0;
`;

const AdditionalDataEntry = styled.div`
  font-size: 13px;

  & > p {
    margin: 0;
    text-align: center;

    &:last-child {
      font-weight: bold;
    }
  }
`;

const Wrapper = styled.article<WrapperProps>`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(184, 194, 215, 0.25) 0 4px 6px,
    rgba(184, 194, 215, 0.1) 0 5px 7px;
  color: #2e3440;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  flex-grow: 0;
  flex-shrink: 0;
  height: fit-content;
  max-width: 270px;
  padding: 24px;
  width: 100%;

  @media (min-width: 830px) {
    max-width: 320px;
  }

  & > p {
    &:first-child {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  ${({ collapsed }) =>
    collapsed &&
    css`
      box-shadow: rgba(184, 194, 215, 0.1) 0 3px 4px,
        rgba(184, 194, 215, 0.1) 0 3px 7px;
      max-width: 220px;
      transition: box-shadow 0.2s;

      &:hover {
        box-shadow: rgba(184, 194, 215, 0.25) 0 4px 6px,
          rgba(184, 194, 215, 0.1) 0 5px 7px;
      }

      @media (min-width: 830px) {
        max-width: 220px;
      }

      ${LocationName} {
        font-size: 18px;
        margin-top: 0;
      }

      ${MainSection} {
        grid-template-rows: 50px auto;
      }

      ${TemperatureIcon} {
        & > svg {
          height: 40px;
          width: 40px;
        }
      }

      ${CurrentTemperature} {
        font-size: 40px;
      }

      ${TemperatureForecast} {
        & > p {
          font-size: 12px;

          svg {
            height: 16px;
          }
        }
      }
    `}
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
