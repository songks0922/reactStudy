import styled from 'styled-components';

export const BoxDiv = styled.div`
  background-color: #aaaaaa;
  height: 100px;
  width: 50px;
`;

export const BoxBig = styled(BoxDiv)`
  width: 100px;
`;

export const BoxCommon = styled.div`
  width: ${(props) => (props.isBig ? 200 : 100)}px;
  height: 50px;
  background-color: #aaaaaa;
`;
