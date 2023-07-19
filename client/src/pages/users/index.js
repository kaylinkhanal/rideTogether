import BasicMenu from '@/components/MenuDropdown'
import Map from '@/components/Map'

import React, { useEffect, useState } from 'react'
import styles from '../../styles/users.module.css'
const Users = () => {
  const [product, setProducts] = useState([])
  const fetchProducts = async() => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    setProducts(data.productList);
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div>
{product?.length> 0 && product?.map((item)=> {
  return <div style={{backgroundColor:'red', padding:'30px', margin:'10px'}}>
    {item.productName}
    </div>
})}
      </div>
  )
}

export default Users