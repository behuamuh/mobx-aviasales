import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import filtersStore from 'stores/filters';
import { TEXT, HOVER } from 'styles/const';
import { Paper } from 'styles/primitives';
import Checkbox from 'components/Checkbox';

interface Props {
  className?: string;
}

const Filters = (props: Props) => {
  const { className } = props;

  const handleCheck = (e: SyntheticEvent<HTMLInputElement>) => {
    filtersStore.fields[e.currentTarget.name] = e.currentTarget.checked;
  }

  return (
    <Wrapper className={className}>
      <Title>Количество пересадок</Title>
      <Filter>
        <Checkbox checked={filtersStore.fields.all} name='all' onChange={handleCheck} />
        <span>Все</span>
      </Filter>
      <Filter>
        <Checkbox checked={filtersStore.fields.zero} name='zero' onChange={handleCheck} />
        <span>Без пересадок</span>
      </Filter>
      <Filter>
        <Checkbox checked={filtersStore.fields.one} name='one' onChange={handleCheck} />
        <span>1 пересадка</span>
      </Filter>
      <Filter>
        <Checkbox checked={filtersStore.fields.two} name='two' onChange={handleCheck} />
        <span>2 пересадки</span>
      </Filter>
      <Filter>
        <Checkbox checked={filtersStore.fields.three} name='three' onChange={handleCheck} />
        <span>3 пересадки</span>
      </Filter>
    </Wrapper>
  );
};

export default observer(Filters);

const Wrapper = styled(Paper)`
  padding: 20px 0 10px;
`;

const Title = styled.h3`
  margin: 0 0 20px;
  padding: 0 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${TEXT};
`;

const Filter = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 20px;
  color: ${TEXT};
  padding: 10px 20px;
  align-items: center;

  :hover {
    background-color: ${HOVER};
  }
`;