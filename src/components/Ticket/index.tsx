import React from 'react';
import styled from 'styled-components';
import { Paper } from 'styles/primitives';
import { Ticket as TicketType } from 'types';
import { BLUE } from 'styles/const';
import Segment from 'components/Segment';

interface Props {
  className?: string;
  ticket: TicketType;
}

const Ticket = (props: Props) => {
  const { className, ticket } = props;
  const { price, carrier, segments } = ticket;
  return (
    <Wrapper className={className}>
      <Price>{`${price} Р`}</Price>
      <Image src={`https://pics.avs.io/99/36/${carrier}.png`} />
      <StyledSegment segment={segments[0]} />
      <StyledSegment segment={segments[1]} />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Ticket, areEqual);

const Wrapper = styled(Paper)`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
`;

const Price = styled.h3`
  margin: 0;
  color: ${BLUE};
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  grid-column: 1 / 3;
  align-self: center;
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
`;

const StyledSegment = styled(Segment)`
  grid-column: 1 / 4;
`;