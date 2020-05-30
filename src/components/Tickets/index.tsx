import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import stores from '../../stores';

interface Props {
  className?: string;
}

const Tickets = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      {stores.showedTickets.slice(0, 5).map((ticket, i) => (
        <li key={`${ticket.carrier}-${i}`}>{ticket.price}</li>
      ))}
      {stores.loading && '...loading'}
    </Wrapper>
  );
};

export default observer(Tickets);

const Wrapper = styled.ul`
  
`;
