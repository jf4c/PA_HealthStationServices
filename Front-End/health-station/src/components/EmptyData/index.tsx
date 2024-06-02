import React from 'react'
import { EmptyDataContainer } from './style'

export default function EmptyData() {
  return (
    <EmptyDataContainer>
      <span className='pi pi-exclamation-triangle'></span>
        <h2>Nenhum posto de saude encontrado</h2>
    </EmptyDataContainer>
  )
}
