import styled from 'styled-components';
import { media } from './styleUtil';

export const subDiv = styled.div`
  background-color: #101010;
  width: 600px;

  ${media.wide`
    width: 500px;
  `};

  ${media.desktop`
    width: 400px;
  `};

  ${media.tablet`
    width: 300px;
  `};

  ${media.phone`
    width: 200px;
  `};
`;
