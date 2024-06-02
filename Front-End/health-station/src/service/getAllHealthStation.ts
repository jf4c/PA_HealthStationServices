import { DropdownChangeEvent } from "primereact/dropdown";
import { ChangeEventHandler } from "react";

export type filter = {
  name?: string;
  nameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state?: string;
  stateChange?: (e: DropdownChangeEvent ) => void;
  city?: string;
  cityChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  district?: string;
  districtChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Logradouro?: string;
  page?: number
  pageSize?: number;
  clearFilter?: () => void;
};


export const getAllHealthStation = async (filter: filter) => {
  let url = `http://localhost:5375/all/HealthStations?page=${filter.page}&pageSize=${filter.pageSize}`;

  if (filter.name) {
    url += `&name=${filter.name}`;
  }
  if (filter.state) {
    url += `&state=${filter.state}`;
  }
  if (filter.city) {
    url += `&city=${filter.city}`;
  }
  if (filter.district) {
    url += `&district=${filter.district}`;
  }

  const response = await fetch(url);
  return response.json();
}