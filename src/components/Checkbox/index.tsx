import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import CheckImage from 'assets/images/check.png'
import { BLUE } from 'styles/const';

interface Props {
  className?: string;
  checked: boolean;
  name: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: Props) => {
  const { className, checked, onChange, name } = props;

  return (
    <Wrapper className={className} checked={checked}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        hidden
      />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Checkbox, areEqual);

const Wrapper = styled.label<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid ${({ checked }) => checked ? BLUE : '#9ABBCE'};
  border-radius: 2px;
  ${({ checked }) => checked && `background-image: url(${CheckImage})`};
  background-position: center;
  background-repeat: no-repeat;
`;
