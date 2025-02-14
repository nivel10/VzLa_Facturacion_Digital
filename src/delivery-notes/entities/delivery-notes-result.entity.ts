export class DeliveryNote {
    success: boolean;   //Indica si la solicitud fue exitosa
    message: string;    //Mensaje de respuesta
    delivery_note_errors: [any]; //Lista de errores(si los hay)
    delivery_note_success: DeliveryNoteSuccss[];    //Lista de notas de entrega procesadas exitosamente
    warning_control_numbers: string;    //Mensaje de advertencia sobre números de control(opcional)
}

class DeliveryNoteSuccss {
    delivery_note_number: string;   //Número de la nota de entrega
    control_number: string; //Número de control
    delivery_note_pdf: string;  //URL del PDF de la nota de entrega
}