import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import React from 'react'
import Maps from '../Maps';

interface DialogMapProps {
  visible: boolean;
  onHide: () => void;
}

export default function DialogMap(props:DialogMapProps) {
  const DialogFooter = (
    <React.Fragment>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        outlined
        onClick={props.onHide}
      />
    </React.Fragment>
  );

  return (
    <Dialog 
      visible={props.visible} 
      onHide={props.onHide}
      footer={DialogFooter}
      style={{ width: '60vw', height: '100vh'}}
    >
      <Maps visible= {props.visible}/>
    </Dialog>
  )
}
