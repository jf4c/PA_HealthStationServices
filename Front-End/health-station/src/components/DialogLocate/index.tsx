import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { InputMask } from 'primereact/inputmask';
import { FloatLabel } from "primereact/floatlabel";

import React from 'react'
import { Button } from 'primereact/button';

interface DialogLocateProps {
  visible: boolean;
  onHide: () => void;
}



export default function DialogLocate(props: DialogLocateProps) {
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
        // onClick={saveCreateCompany}
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
            id="cep"
            mask="99999-999"
            unmask={true}
            autoClear={false}
            required
            className={classNames({
              // "p-invalid": submitted && company.address.cep === null,
            })}
          />
        </FloatLabel>
       </div>
      
        
    </Dialog>
  )
}
