import React from 'react'
import styles from './CardAtole.module.scss'

import CardImage from '../../CardImage/CardImage'
import CardTitle from '../../CardTitle/CardTitle'

import PrimaryButton from '../../buttons/PrimaryButton'
import Counter from '../../buttons/Counter'

const CardAtole = ({ id, titulo, img, price, cantidad, onAddToCart, onRemoveCart }) => {
  return (
    <div className={`${styles.card}`}>
      <CardImage className={`${styles.img}`} url={img} alt='Atole' />

      <div className={`${styles.card_body}`}>
        <CardTitle titulo={titulo} />

        <div className={`${styles.precio}`}> Precio por unidad: {price}</div>

        {cantidad
          ? (
            <Counter
              id={id}
              cantidad={cantidad}
              onAddToCart={onAddToCart}
              onRemoveCart={onRemoveCart}
            />
            )
          : (
            <PrimaryButton
              text='Comprar'
              id={id}
              cantidad={cantidad}
              onAddToCart={onAddToCart}
            />
            )}
      </div>
    </div>
  )
}

export default CardAtole
