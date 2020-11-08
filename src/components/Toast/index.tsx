import React, { FC, useEffect, useRef } from 'react';
import { ToastStyled as Styled } from './styled';

type Props = {
  onExit(): void;
};

const Toast: FC<Props> = ({ children, onExit }) => {
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    if (timeoutRef.current) {
      return () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = 0;
      };
    }

    timeoutRef.current = setTimeout(() => {
      onExit();
      timeoutRef.current = 0;
    }, 5500);
  }, [onExit]);

  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Toast;
