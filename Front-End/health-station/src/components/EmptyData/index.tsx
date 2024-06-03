import { EmptyDataContainer } from './style'
import React from 'react'

export default function EmptyData() {
  return (
    <EmptyDataContainer>
      <span className='pi pi-exclamation-triangle'></span>
        <h2>Nenhum posto de saude encontrado</h2>
    </EmptyDataContainer>
  )
}
