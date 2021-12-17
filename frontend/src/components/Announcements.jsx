import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 25px;
  background-color: #c84b31;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>Supper Deal! free shipping on order over 1500 tk.</Container>
  )
}

export default Announcements
