import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from '../button'

describe('button tests', () => {
  it('是个 div', function () {
    const buttonJson = renderer.create(<Button />).toJSON()
    expect(buttonJson).toMatchSnapshot()
  })
})