'use client'
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Skeleton } from 'primereact/skeleton';

import { getAllHealthServices } from '@/service/getAllHealthServices';
import { CarouselContainer, LoadingContainer } from './style';

interface HealthService {
    name: string;
    description: string;
}

export default function HealthServices() {
  const [healthServices, setHealthServices] = useState<HealthService[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
      getAllHealthServices().then((data) => setHealthServices(data))
      setLoading(false);
      console.log(healthServices);
  }, []);

  const loadingTemplate = () => {
    return (
        <LoadingContainer className="surface-border border-round m-2 text-center px-3">
            <div>
                <Skeleton width="100%" height="200px" className="img" />
            </div>
            <div>
                <Skeleton width="80%" className="name" />
            </div>
        </LoadingContainer>
    );
  };

  const healthServiceTemplate = (healthService: HealthService) => {
      return (
          <CarouselContainer className="surface-border border-round m-2 text-center px-3">
            <div className='mb-3 cards'>
              <a href='https://primereact.org/carousel/'>  
                  <img  src={`/img/${healthService.name}.png`} alt={healthService.name} className="w-10" />
              </a>  
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
          autoplayInterval={3000} itemTemplate={loading ? loadingTemplate : healthServiceTemplate} />
      </div>
  )
}
