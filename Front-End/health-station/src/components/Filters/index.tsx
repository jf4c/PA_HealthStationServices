import React, { useState } from 'react'
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { filter } from '@/service/getAllHealthStation';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { FilterContainer } from './style';
import { Button } from 'primereact/button';

interface State {
  name: string;
  value: string;
}

export default function Filters(props:filter) {;

  const states: State[] = [
    { name: 'Acre', value: 'AC' },
    { name: 'Alagoas', value: 'AL' },
    { name: 'Amapá', value: 'AP' },
    { name: 'Amazonas', value: 'AM' },
    { name: 'Bahia', value: 'BA' },
    { name: 'Ceará', value: 'CE' },
    { name: 'Distrito Federal', value: 'DF' },
    { name: 'Espírito Santo', value: 'ES' },
    { name: 'Goiás', value: 'GO' },
    { name: 'Maranhão', value: 'MA' },
    { name: 'Mato Grosso', value: 'MT' },
    { name: 'Mato Grosso do Sul', value: 'MS' },
    { name: 'Minas Gerais', value: 'MG' },
    { name: 'Pará', value: 'PA' },
    { name: 'Paraíba', value: 'PB' },
    { name: 'Paraná', value: 'PR' },
    { name: 'Pernambuco', value: 'PE' },
    { name: 'Piauí', value: 'PI' },
    { name: 'Rio de Janeiro', value: 'RJ' },
    { name: 'Rio Grande do Norte', value: 'RN' },
    { name: 'Rio Grande do Sul', value: 'RS' },
    { name: 'Rondônia', value: 'RO' },
    { name: 'Santa Catarina', value: 'SC' },
    { name: 'São Paulo', value: 'SP' },
    { name: 'Sergipe', value: 'SE' },
    { name: 'Tocantins', value: 'TO' }
  ];

  const representativesItemTemplate = (option: State) => {
    return (
        <div className="flex align-items-center gap-2">
            <span>{option.name}</span>
        </div>
    );
  };
  
  return (
    <FilterContainer>
      
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText  
          placeholder="Buscar Unidade" 
          value={props.name} 
          onChange={props.nameChange}/>
      </IconField>

      <Dropdown
        value={props.state}
        options={states}
        itemTemplate={representativesItemTemplate}
        onChange={props.stateChange}
        optionLabel="name"
        placeholder="Buscar Estado"
        className="p-column-filter"
        style={{ minWidth: '14rem' }}
        showClear 
        checkmark 
      />
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText  
          placeholder="Buscar Cidade" 
          value={props.city} 
          onChange={props.cityChange} 
        />  
      </IconField>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText  
          placeholder="Buscar Bairros" 
          value={props.district} 
          onChange={props.districtChange} 
        />  
      </IconField>
      <Button 
        type="button" 
        icon="pi pi-filter-slash" 
        label="Desativar Filtros" 
        outlined 
        severity="danger"
        onClick={props.clearFilter} />
    </FilterContainer>
  )
}
