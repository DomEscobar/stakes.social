import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  cursor: pointer;
  display: contents;
`

interface Props extends LinkProps {
  children?: ReactNode
}
export const A = (props: Props) => {
  return (
    <Link passHref {...props}>
      <StyledLink>{props.children}</StyledLink>
    </Link>
  )
}
