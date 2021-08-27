import { css } from 'styled-components';

// 미디어 쿼리 분기점 지정
export const sizes = {
  wide: '1200px',
  desktop: '992px',
  tablet: '768px',
  phone: '376px',
};

// 미디어 쿼리 자동 리사이징
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
