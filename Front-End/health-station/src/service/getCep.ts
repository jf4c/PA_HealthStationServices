import React from 'react'

export type address = {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
};

export const getCep = async (cep: string) => {
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  if (!cep || cep.length !== 8) {
    throw new Error('CEP inválido');
  }
  const response = await fetch(url);
  return response.json();
}
