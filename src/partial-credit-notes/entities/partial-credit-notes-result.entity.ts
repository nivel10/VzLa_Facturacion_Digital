export class PartialCreaditNoteResult {
    success: boolean;    //Indica si la solicitud fue exitosa
    message: string;    //Mensaje de respuesta
    note_credit_number: string; //Número de la nota de crédito creada
    invoice_number_affected: string;    //Número de factura afectada
    control_number: string; //Número de control
    credit_note_pdf: string;    //URL del PDF de la nota de crédito
    warning_control_numbers: string;    //Mensaje de advertencia sobre números de control(opcional)
}