import React, { SVGProps } from 'react'
import { StakesSocialBlack, StakesSocialWhite } from '../Svgs/tsx'
import { A } from '../A'

interface Props {
  colorSchema?: 'black' | 'white'
  props: SVGProps<SVGSVGElement>
}

export const BrandLogo = ({ colorSchema, props }: Props) => {
  return (
    <A href="/">
      {colorSchema === 'black' ? (
        <StakesSocialBlack height={undefined} {...props}></StakesSocialBlack>
      ) : (
        <StakesSocialWhite height={undefined} {...props}></StakesSocialWhite>
      )}
    </A>
  )
}
