import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <HeaderBar>
        <HeaderRow>
          <div>
            <Hamburguer onClick={() => setIsOpen(!isOpen)}>
              <span />
              <span />
              <span />
            </Hamburguer>
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
            <nav>
              <Links>
                <LinkItem>
                  <Link to="/categories">Categorias</Link>
                </LinkItem>
                <LinkItem>
                  <a href="#">Novidades</a>
                </LinkItem>
                <LinkItem>
                  <a href="#">Promoções</a>
                </LinkItem>
              </Links>
            </nav>
          </div>
          <CartButton onClick={openCart}>
            {items.length}
            <span>- produto(s)</span>
            <img src={carinho} alt="Carrinho" />
          </CartButton>
        </HeaderRow>
        <NavMobile className={isOpen ? 'is-open' : ''}>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
