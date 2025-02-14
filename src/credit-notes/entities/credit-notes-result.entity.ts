export class CreditNoteResult {
    success: boolean;    //Indica si la solicitud fue exitosa.
    message: string;    //Mensaje de respuesta.
    invoice_number_affected: string; //Numero de factura afectada
    control_number: string; //Numero de control
    credit_note_pdf: string;    //URL del PDF de la nota de crédito.
}