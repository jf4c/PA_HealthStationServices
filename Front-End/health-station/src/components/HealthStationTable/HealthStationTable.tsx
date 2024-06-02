'use client'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions} from 'primereact/column';
import { filter, getAllHealthStation } from '@/service/getAllHealthStation';
import Pagination, { PaginationProps } from '../Pagination';
import { PaginatorPageChangeEvent } from 'primereact/paginator';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';


import { TableContainer } from './style';
import Filters from '../Filters';
import { DropdownChangeEvent } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import EmptyData from '../EmptyData';
import DialogLocate from '../DialogLocate';

interface HealthStation {
  id: string;
  name: string;
  state: string;
  city: string;
  district: string;
  Logradouro: string;
  number: string;
  icon?: object;
}

export default function HealthStationTable() {
  const [healthStations, setHealthStations] = useState<HealthStation[]>([]);
  const [filter, setFilter] = useState<filter>({ page: 1, pageSize: 10});
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedHealthStation, setSelectedHealthStation] = useState<HealthStation | null>(null)
  const [filterActive , setFilterActive] = useState<boolean>(false);
  const [dialogLocation, setDialogLocation] = useState<boolean>(false);
  useEffect(() => {
      getAllHealthStation(filter!).then((data) => {
        const _data:HealthStation[] = data.results
      console.log(data);
      console.log(filter.page);
      setTotalRecords(data.rowCount);
      _data.map((item) => {
        item.icon = <LocalHospitalIcon/>
      });
      setHealthStations(_data);
    });
  }, [filter]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    console.log(event);
    setFilter((prevFilter) => ({ ...prevFilter, page: event.page}));
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevFilter) => ({ ...prevFilter, name: event.target.value}));
  }

  const onStateChange = (event: DropdownChangeEvent) => {
    console.log(event);
    setFilter((prevFilter) => ({ ...prevFilter, state: event.value}));
  };

  const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevFilter) => ({ ...prevFilter, city: event.target.value}));
  }

  const onDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevFilter) => ({ ...prevFilter, district: event.target.value}));
  }

  const clearFilter = () => {
    setFilter({ page: 1, pageSize: 10});
    setFilterActive(false);
  }
  
  const renderNoFilter:any = () => {
    return (
      <div className='flex justify-content-between'>
        <Button
          type="button" 
          icon="pi pi-map-marker" 
          label="UBS Pertos de Mim" 
          outlined
          onClick={()=>{setDialogLocation(true)}}
        />
        <Button 
          type="button" 
          icon="pi pi-filter" 
          label="Ativar Filtros" 
          outlined
          onClick={()=>{setFilterActive(true)}}
        /> 
        </div>
    )
  };

  const renderFilterElement:any = () => {
    return (
      <Filters 
        state={filter.state}
        stateChange={onStateChange}
        name={filter.name}
        nameChange={onNameChange}
        city={filter.city}
        cityChange={onCityChange}
        district={filter.district}
        districtChange={onDistrictChange}
        clearFilter={clearFilter}

    />
    )
  };


  return (
      <TableContainer className="card">
          <DataTable 
            value={healthStations} 
            size='small' 
            tableStyle={{ minWidth: '50rem' }}
            header={ filterActive ? renderFilterElement : renderNoFilter}
            selectionMode={'single'}
            selection={selectedHealthStation!} 
            onSelectionChange={(e) => setSelectedHealthStation(e.value)}
            emptyMessage={<EmptyData/>}
          >
              <Column className='icon' field='icon' header=""></Column>
              <Column field="address.state" header="Estado"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="address.city" header="Cidade"></Column>
              <Column field="address.district" header="Bairro"></Column>

          </DataTable>
              <Pagination 
                currentPage={filter.page!}
                pageSize={filter.pageSize!} 
                rowCount={totalRecords}
                onPageChange={onPageChange} 
              />
          <DialogLocate visible={dialogLocation}  onHide={() =>{if (!dialogLocation) return; setDialogLocation(false); }}/>
      </TableContainer>
  );
}
