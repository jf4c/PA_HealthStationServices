'use client'
import { CarouselContainer } from '@/components/HealthServices/style';
import Maps from '@/components/Maps';
import { getAllHealthServices } from '@/service/getAllHealthServices';
import { getHealthStationById } from '@/service/getHealthStationById';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { InfoContainer } from '../style';
import React, { useEffect, useState } from 'react'

interface HealthStation{
  id?: string;
  name?: string;
  address?: Address;
}
interface Address {
  name: string;
  state: string;
  city: string;
  district: string;
  logradouro: string;
  number: string;
}

interface HealthService {
  name: string;
  description: string;
}

export default function HealthStationPage({params}:any) {
  const [healthStation, setHealthStation] = useState<HealthStation>({});
  const [healthServices, setHealthServices] = useState<HealthService[]>([]);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];
  useEffect(() => {
    getHealthStationById(params.id).then((data) => {
      setHealthStation(data);
    })
    getAllHealthServices().then((data) => setHealthServices(data))
   }, [])

   const healthServiceTemplate = (healthService: HealthService) => {
    return (
        <CarouselContainer className="surface-border border-round m-2 text-center px-3">
          <div className='mb-3 cards'>
            <div>  
                <img  src={`/img/${healthService.name}.png`} alt={healthService.name} className="w-10" />
            </div>  
          </div>
          <div>
              <h4 className="mb-1">{healthService.name}</h4>
          </div>
        </CarouselContainer>
    );
};

  return (
    <div className="card">
      <Carousel value={healthServices} numVisible={5} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
      autoplayInterval={3000} itemTemplate={healthServiceTemplate} />
      <InfoContainer>
        <div className='info'>
            <h1>Posto De Saude</h1>
          <div className='name'>
            <p>NOME: {healthStation.name}</p>
          </div>

          <div className='address'>
            <label>Endereço:</label>
            <p>{healthStation.address?.logradouro} {healthStation.address?.district} {healthStation.address?.city}, {healthStation.address?.state}</p>
          </div>

        </div>
        <Maps healthStation={healthStation} />
      </InfoContainer>
    </div>
  )
}
