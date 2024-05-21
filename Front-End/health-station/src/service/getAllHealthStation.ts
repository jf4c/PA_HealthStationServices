import { PaginationProps } from "@/components/Pagination";

export type filter = {
  name?: string;
  state?: string;
  city?: string;
  district?: string;
  Logradouro?: string;
  page: number
  pageSize: number;
};


export const getAllHealthStation = async (filter: filter) => {
  const response = await fetch(
    `http://localhost:5375/all?page=${filter.page}&pageSize=${filter.pageSize}`
  );
  return response.json();
}