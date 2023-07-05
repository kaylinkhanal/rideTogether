import BasicMenu from '@/components/MenuDropdown'
import Map from '@/components/Map'

import React from 'react'
import styles from '../../styles/users.module.css'
const Users = () => {
  return (
    <div>
  

      <Map showAllButtons={true}  containerStyle={{width: '100vw',height: '100vh'}}/>
      </div>
  )
}

export default Users