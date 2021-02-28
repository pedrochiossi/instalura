import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf } from 'prop-types'


const TextBase = styled.span`
  ${({ variant }) => {
    return css`
      font-size: ${({ theme }) => theme.typographyVariants[variant].fontsSize };
      font-weight: ${({ theme }) => theme.typographyVariants[variant].fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants[variant].lineHeight};
    `
  }}
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
  variant: oneOf(['paragraph1', 'smallestException'])
};