import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import sortStore from '../../stores/sort';

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
  background-color: ${({ active }) => active ? 'blue' : 'lightgray'};
`;
