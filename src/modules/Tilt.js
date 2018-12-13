/* @flow */
import React, { useRef, useEffect } from 'react'
import VanillaTitl from 'vanilla-tilt'
import styled from '@emotion/styled'

const Container = styled.div`
    height: 250px;
    width: 250px;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ChildContainer = styled.div`
    height: 200px;
    width: 200px;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Tilt(props?: any) {
  const tiltRef = useRef()
  useEffect(() => {
    VanillaTitl.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
  })
  return (
    <Container ref={tiltRef} className="titlt-root">
      <ChildContainer className="tilt-child">{props.children}</ChildContainer>
    </Container>
  )
}
