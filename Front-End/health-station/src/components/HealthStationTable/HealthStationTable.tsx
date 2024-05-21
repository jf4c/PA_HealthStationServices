'use client'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { filter, getAllHealthStation } from '@/service/getAllHealthStation';
import { ProductService } from '../../service/ProductService';
import Pagination, { PaginationProps } from '../Pagination';
import { PaginatorPageChangeEvent } from 'primereact/paginator';

interface HealthStation {
  id: string;
  name: string;
  state: string;
  city: string;
  district: string;
  Logradouro: string;
  number: string;
}

export default function HealthStationTable() {
  const [healthStation, setHealthStation] = useState<HealthStation[]>([]);
  const [filter, setFilter] = useState<filter>({ page: 1, pageSize: 10 });
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
      getAllHealthStation(filter!).then((data) => {
      console.log(data);
      console.log(filter.page);
      setTotalRecords(data.rowCount);
      setHealthStation(data.results);
    });
  }, [filter]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    console.log(event);
    setFilter((prevFilter) => ({ ...prevFilter, page: event.page}));
  };

  return (
      <div className="card">
          <DataTable 
            value={healthStation} 
            size='small' 
            tableStyle={{ minWidth: '50rem' }}>
              <Column field="name" header="Name"></Column>
              <Column field="address.state" header="State"></Column>
              <Column field="address.city" header="City"></Column>
              <Column field="address.district" header="District"></Column>
              <Column field="address.logradouro" header="Logradouro"></Column>
              <Column field="address.number" header="Number"></Column>
          </DataTable>
              <Pagination 
                currentPage={filter.page}
                pageSize={filter.pageSize} 
                rowCount={totalRecords / filter.pageSize}
                onPageChange={onPageChange} 
              />
      </div>
  );
}
