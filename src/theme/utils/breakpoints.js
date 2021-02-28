import { defaults } from '../index';
import { css } from 'styled-components'

const { breakpoints: defaultBreakpoints } = defaults;

export function breakpoints(cssByBreakpoints) {
  const breakpointsMap = new Map(Object.entries(cssByBreakpoints));
  let cssMediaQueries = [];
  breakpointsMap.forEach((value, key) => {
    cssMediaQueries.push(css`
        @media screen and (min-width: ${defaultBreakpoints[key]}px) {
          ${value}
        }
      `
    );
  });
  return cssMediaQueries;
};

