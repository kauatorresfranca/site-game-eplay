import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

import { fromataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {fromataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>{fromataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button type="button" title="Adicionar ao carinho" variant="primary">
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
