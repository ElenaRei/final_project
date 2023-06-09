import React, { useEffect } from 'react'

import s from './Sales.module.css'
import ProductList from '../productList/ProductList'
import { fetchProductList } from '../../requests/requests'
import { useDispatch, useSelector } from 'react-redux'

export default function Sales() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  const products = useSelector((store) => store.products)

  return (
    <div className={s.sales}>
      <ProductList products={products} />
    </div>
  )
}
