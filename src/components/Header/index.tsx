import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

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
                  <Link
                    title="Clique aqui para acessar a pagina de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </LinkItem>
                <LinkItem>
                  <HashLink
                    title="clique aqui para acessar a sessão de em breve"
                    to="/#coming-soon"
                  >
                    Em breve
                  </HashLink>
                </LinkItem>
                <LinkItem>
                  <HashLink
                    title="clique aqui para acessar a sessão de promoções"
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
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
              <Link
                title="Clique aqui para acessar a pagina de categorias"
                to="/categories"
                onClick={() => setIsOpen(false)}
              >
                Categorias
              </Link>
            </LinkItem>
            <LinkItem>
              <HashLink
                title="clique aqui para acessar a sessão de em breve"
                to="/#coming-soon"
                onClick={() => setIsOpen(false)}
              >
                Em breve
              </HashLink>
            </LinkItem>
            <LinkItem>
              <HashLink
                title="clique aqui para acessar a sessão de promoções"
                to="/#on-sale"
                onClick={() => setIsOpen(false)}
              >
                Promoções
              </HashLink>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
