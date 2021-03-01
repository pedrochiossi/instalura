import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf } from 'prop-types'
import { get } from 'lodash';
import { breakpoints, propToStyle } from '../../../theme/utils';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const paragraph1Bold = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1Bold.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1Bold.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1Bold.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

const smallestExceptionBold = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestExceptionBold.fontSize};
    font-weight: ${theme.typographyVariants.smallestExceptionBold.fontWeight};
    line-height: ${theme.typographyVariants.smallestExceptionBold.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpoints({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
`

export const TextStyleVariants = {
  smallestException,
  smallestExceptionBold,
  paragraph1,
  paragraph1Bold,
  title
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`) };
  ${propToStyle('textAlign')}; 
`;

export default function Text({ tag, variant, children, ...props }) {

  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  )
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
};

Text.propTypes = {
  children: node.isRequired,
  tag: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: oneOf([ 'title', 'paragraph1', 'smallestException'])
};