import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../../assets/icons';

interface Props {
  className?: string;
}

const Header = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <StyledLogoIcon />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Header, areEqual);

const Wrapper = styled.header`
  display: flex;
  padding: 50px 0;
`;

const StyledLogoIcon = styled(LogoIcon)`
  margin: auto;
`;
