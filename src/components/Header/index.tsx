import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => setIsOpen(!isOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link
                    title="Clique aqui para acessar a pagina de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="clique aqui para acessar a sessão de em breve"
                    to="/#coming-soon"
                  >
                    Em breve
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="clique aqui para acessar a sessão de promoções"
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton onClick={openCart}>
            {items.length}
            <span>- produto(s)</span>
            <img src={cartIcon} alt="Carrinho" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link
                title="Clique aqui para acessar a pagina de categorias"
                to="/categories"
                onClick={() => setIsOpen(false)}
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="clique aqui para acessar a sessão de em breve"
                to="/#coming-soon"
                onClick={() => setIsOpen(false)}
              >
                Em breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="clique aqui para acessar a sessão de promoções"
                to="/#on-sale"
                onClick={() => setIsOpen(false)}
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  )
}

export default Header
