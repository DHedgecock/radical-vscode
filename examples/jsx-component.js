import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'
import styled from 'styled-components'
import { Button, Flex } from 'componentry'

const Screenshot = styled.img`
  margin: 0 auto;
  width: 800px;
`

/**
 * Radical theme demo component
 */
class Radical extends Component {
  static propTypes = {
    isRadical: bool.isRequired,
    radicalLevel: number,
  }

  // Such rad state
  state = {
    theme: null,
  }

  handleSetTheme = theme => {
    this.setState({ theme: theme || this.state.theme })
  }

  render() {
    const { isRadical, radicalLevel } = this.props
    const { theme } = this.state

    const currentTheme = isRadical ? theme : {}

    return (
      <Flex justify="center" align="center">
        <Button onClick={() => this.handleSetTheme({ rad: true })}>Rad Theme</Button>
      </Flex>
    )
  }
}

export default Radical
