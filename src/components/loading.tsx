import styled, { StyledComponentProps } from 'styled-components';
import React from 'react';
import { Spin } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = (props: StyledComponentProps<'div', any, {}, never>) => (
  <Wrapper {...props}>
    <Spin size="default" />
  </Wrapper>
);

export default Loading;
