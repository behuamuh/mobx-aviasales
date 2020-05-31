import React from 'react';
import styled from 'styled-components';
import { Segment as SegmentType } from 'types';
import { LIGHT_TEXT, TEXT } from 'styles/const';
import { plur } from 'helpers';

interface Props {
  className?: string;
  segment: SegmentType;
}

const MILLISECONDS_IN_MINUTE = 60 * 1000;

const formateDate = (date: Date) => date.toLocaleString(undefined, {
  hour: '2-digit',
  minute: '2-digit',
});

const Segment = (props: Props) => {
  const { className, segment } = props;
  const { origin, destination, stops, duration, date } = segment;
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + duration * MILLISECONDS_IN_MINUTE);

  return (
    <Wrapper className={className}>
      <div>
        <Title>{`${origin}-${destination}`}</Title>
        <Text>{`${formateDate(startDate)}-${formateDate(endDate)}`}</Text>
      </div>
      <div>
        <Title>В пути</Title>
        <Text>{`${Math.floor(duration / 60)}ч ${(duration % 60).toString().padStart(2, '0')}м`}</Text>

      </div>
      <div>
        <Title>{`${stops.length} ${plur(stops.length, 'пересадка', 'пересадки', 'пересадок')}`}</Title>
        <Text>{stops.join(', ')}</Text>
      </div>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Segment, areEqual);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${LIGHT_TEXT};
  margin: 0;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${TEXT};
  margin: 0;
`;