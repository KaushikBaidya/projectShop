import React from 'react'
import { Search, ShoppingCart } from '@material-ui/icons'
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'

const Container = styled.div`
  height: 80px;
  background-color: yellow;
  ${mobile({ height: '50px' })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
  border: 2px solid orange;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  ${mobile({ width: '50px' })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-family: 'Lobster', cursive;
  font-size: 50px;
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`
const MenuItem = styled.div`
  font-size: 14px;
  margin: 10px;
  cursor: pointer;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Surprise!</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
