import React from 'react'
import { render } from '@testing-library/react'
import { WithdrawHolderCard } from './'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${WithdrawHolderCard.name}`, () => {
  test('Snapshot', () => {
    const component = render(<WithdrawHolderCard propertyAddress="propertyAddress" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
