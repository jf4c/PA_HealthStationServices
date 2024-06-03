import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';
import { FloatLabel } from "primereact/floatlabel";

import React, { useContext, useEffect } from 'react'
import { Button } from 'primereact/button';
import { getCep } from '@/service/getCep';
import { addressContext } from '@/context/address';
import { address } from "@/service/getCep";

interface DialogLocateProps {
  visible: boolean;
  onHide: () => void;
}

export default function DialogLocate(props: DialogLocateProps) {
  const [cep, setCep] = React.useState<string>('');
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const {address, setAddress} = useContext<address | any>(addressContext);

  useEffect(() => {
    searchCep()
  },[submitted]);

  const searchCep = async () => {
    try {
      const response = await getCep(cep).then((data) => {
        setAddress(data)
        console.log(address);
      });
    } catch (error) {
      console.log(cep);
    }
    finally {
      props.onHide();
      setSubmitted(false);
    }
  }

  const DialogFooter = (
    <React.Fragment>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        outlined
        onClick={props.onHide}
      />
      <Button
        label="Buscar"
        icon="pi pi-search"
        severity="success"
        onClick={() => setSubmitted(true)}
      />
    </React.Fragment>
  );
  return (
    <Dialog header="Buscar UBS perto de mim" 
      visible={props.visible} 
      style={{ width: '50vw' }} 
      onHide={props.onHide}
      footer={DialogFooter}
    >
       <div className="card flex justify-content-center mt-5">
        <FloatLabel>
          <label htmlFor="cep">CEP</label>
          <InputMask
            value={cep}
            id="cep"
            mask="99999-999"
            unmask={true}
            autoClear={false}
            required
            onChange={(e:InputMaskChangeEvent) => setCep(e.target.value || '')}
            className={classNames({
            })}
          />
        </FloatLabel>
       </div>
      
        
    </Dialog>
  )
}
