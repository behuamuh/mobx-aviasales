import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import filtersStore from '../../stores/filters';

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
      <Label checked={filtersStore.fields.all}>
        Все
        <input type="checkbox" checked={filtersStore.fields.all} name='all' onChange={handleCheck} />
      </Label>
      <Label checked={filtersStore.fields.zero}>
        Без пересадок
        <input type="checkbox" checked={filtersStore.fields.zero} name='zero' onChange={handleCheck} />
      </Label>
      <Label checked={filtersStore.fields.one}>
        1 пересадка
        <input type="checkbox" checked={filtersStore.fields.one} name='one' onChange={handleCheck} />
      </Label>
      <Label checked={filtersStore.fields.two}>
        2 пересадки
        <input type="checkbox" checked={filtersStore.fields.two} name='two' onChange={handleCheck} />
      </Label>
      <Label checked={filtersStore.fields.three}>
        3 пересадки
        <input type="checkbox" checked={filtersStore.fields.three} name='three' onChange={handleCheck} />
      </Label>
    </Wrapper>
  );
};

export default observer(Filters);

const Wrapper = styled.div`
  
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4A4A4A;
`;

const Label = styled.label<{ checked: boolean }>`
  display: block;
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;
`;