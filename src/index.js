import React from 'react'
import styled from '@emotion/styled'
import ReactDOM from 'react-dom'
import Counter from './modules/Counter'
import Tilt from './modules/Tilt'
import './styles.css'

const appContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function App() {
  return (
    <appContainer className="App">
      <h1>Hello CodeSandbox</h1>
      Increment:
      {' '}
      <Counter />
      <br />
      <div className="totlally-center">
        <Tilt>
          <div className="totally-center">vanilla-tilt.js</div>
        </Tilt>
      </div>
    </appContainer>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
