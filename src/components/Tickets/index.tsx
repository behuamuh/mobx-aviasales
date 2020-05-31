import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import stores from '../../stores';
import Ticket from 'components/Ticket';

interface Props {
  className?: string;
}

const Tickets = (props: Props) => {
  const { className } = props;

  if (stores.loading) return <Wrapper>...loading</Wrapper>

  return (
    <Wrapper className={className}>
      {stores.showedTickets.slice(0, 5).map((ticket, i) => (
        <Ticket key={`${ticket.carrier}-${i}`} ticket={ticket} />
      ))}
    </Wrapper>
  );
};

export default observer(Tickets);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px 0;
`;
