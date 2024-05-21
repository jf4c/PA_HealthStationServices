'use client'
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../../service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function HealthServices() {
  const [products, setProducts] = useState<Product[]>([]);
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

  const getSeverity = (product: Product) => {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };

  useEffect(() => {
      ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const productTemplate = (product: Product) => {
      return (
          <div className="surface-border border-round m-2 text-center py-5 px-3">
              <a href='https://primereact.org/carousel/'>
                  <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-10 shadow-2" />
              </a>
          </div>
      );
  };
  
  return (
      <div className="card">
          <Carousel value={products} numVisible={5} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
          autoplayInterval={3000} itemTemplate={productTemplate} />
      </div>
  )
}
