import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface DialogHealthServiceProps {
  visible: boolean;
  nameService: string;
  description: string;
  onHide: () => void;
}

export default function DialogHealthService(props: DialogHealthServiceProps) {

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
      header={props.nameService} 
      visible={props.visible} 
      style={{ width: '50vw' }} 
      onHide={props.onHide}
      footer={DialogFooter}
    >
      {props.description}
    </Dialog>
  )
}
