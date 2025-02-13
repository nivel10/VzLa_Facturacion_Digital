export class TaxDocumentsResultEntity {
    success: boolean;   //Indica si la solicitud fue exitosa
    invoices: TaxDocumentsInvoice[];    //Lista de documentos fiscales encontrados
}

class TaxDocumentsInvoice {
    document: string; //Tipo de documento fiscal
    invoice_number: string; //Número de factura
    control_number: string; //Número de control
    customer_name: string;  //Nombre del cliente
    customer_document_identification: string;   //Identificación completa del cliente(tipo + número)
    serial_code: string;    //Código serial
    created: string;    //Fecha de creación
    invoice_pdf: string;    //URL del PDF del documento
}