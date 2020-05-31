import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import sortStore from '../../stores/sort';
import { BLUE, WHITE, TEXT } from '../../styles/const';

interface Props {
  className?: string;
}

const Sort = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Button
        active={sortStore.sortType === 'price'}
        onClick={() => sortStore.sortType = 'price'}
      >
        Самый дешевый
      </Button>
      <Button
        active={sortStore.sortType === 'duration'}
        onClick={() => sortStore.sortType = 'duration'}
      >
        Самый быстрый
      </Button>
    </Wrapper>
  );
};

export default observer(Sort);

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => active ? BLUE : WHITE};
  color:  ${({ active }) => !active ? TEXT : WHITE};
  border: ${({ active }) => active ? 'none' : '1px solid #DFE5EC'};
  display: block;
  flex-basis: 50%;
  padding: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
