import React, { FC } from 'react';
import { GitHubLogo } from 'utils/images';
import { HeaderStyled as Styled } from './styled';

const Header: FC = () => (
  <Styled.Wrapper>
    <Styled.Link
      href={'https://github.com/felipetm6/modec-weather-app'}
      target="_blank"
      referrerPolicy={'no-referrer'}
    >
      Open in GitHub <GitHubLogo />
    </Styled.Link>
  </Styled.Wrapper>
);

export default Header;
