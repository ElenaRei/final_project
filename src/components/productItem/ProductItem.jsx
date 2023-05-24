import React from 'react'

import s from './ProductItem.module.css'

const base_url = 'http://localhost:3333'

export default function ProductItem({
  id,
  image,
  title,
  price,
  discont_price,
}) {
  return (
    <div className={s.productItem}>
      <div className={s.productItemImg}>
        <img src={`${base_url}${image}`} />
      </div>
      <div className={s.wrapper}>
        <p className={s.price}>{price}$</p>
        <p className={s.priceDiscont}>{discont_price}$</p>
        <p className={s.sale}>7%</p>
      </div>
      <h3 className={s.productItemTitle}>{title}</h3>
    </div>
  )
}
