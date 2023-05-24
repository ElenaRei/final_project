import React from 'react'
import ProductItem from '../productItem/ProductItem'

export default function ProductList({ products }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '35px',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {products.map((elem) => (
        <ProductItem {...elem} key={elem.id} />
      ))}
    </div>
  )
}
