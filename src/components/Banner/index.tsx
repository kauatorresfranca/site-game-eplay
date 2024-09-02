import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { useEffect, useState } from 'react'

import { formataPreco } from '../ProductsList'

import { useGetFeatureGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`product/${game.id}`}
          title="clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
