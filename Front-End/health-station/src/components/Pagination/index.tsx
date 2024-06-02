import React, { useState } from 'react'
import { Paginator,
  PaginatorCurrentPageReportOptions,
  PaginatorFirstPageLinkOptions,
  PaginatorLastPageLinkOptions,
  PaginatorPageChangeEvent,
  PaginatorPrevPageLinkOptions,
  PaginatorTemplate } from 'primereact/paginator';


export type PaginationProps = {
  currentPage: number
  pageSize: number
  rowCount: number
  onPageChange?: (event: PaginatorPageChangeEvent) => void
  withFirstPageButton?: boolean
  withLastPageButton?: boolean
  disabled?: boolean
}

export default function Pagination(props: PaginationProps) { 
  return (
    <Paginator 
      first={props.pageSize * (props.currentPage - 1)}
      rows={props.pageSize} 
      totalRecords={props.rowCount}
      onPageChange={(e) => props.onPageChange?.({ ...e, page: e.page + 1 })} 
    />
  )
}
