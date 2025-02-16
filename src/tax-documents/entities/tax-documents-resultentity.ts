import { ApiProperty } from '@nestjs/swagger';

const InvoicesExample = [
    {
        "document": "FACTURA",
        "invoice_number": "000001",
        "control_number": "00-00000001",
        "customer_name": "Empresa XYZ",
        "customer_document_identification": "J123456789",
        "serial_code": "A",
        "created": "2024-01-15",
        "invoice_pdf": "http://localhost/proyectos/desarrollo-actual/readonly/export_pdf/abc123..."
    }
];

export class TaxDocumentsResultEntity {
    @ApiProperty({ example: true, })
    success: boolean;   //Indica si la solicitud fue exitosa

    @ApiProperty({ example: InvoicesExample, })
    invoices: TaxDocumentsInvoice[];    //Lista de documentos fiscales encontrados
}

class TaxDocumentsInvoice {
    @ApiProperty({ example: 'FACTURA', })
    document: string; //Tipo de documento fiscal

    @ApiProperty({ example: '000001', })
    invoice_number: string; //Número de factura

    @ApiProperty({ example: '00-00000001', })
    control_number: string; //Número de control

    @ApiProperty({ example: 'Empresa XYZ', })
    customer_name: string;  //Nombre del cliente

    @ApiProperty({ example: 'J123456789', })
    customer_document_identification: string;   //Identificación completa del cliente(tipo + número)

    @ApiProperty({ example: 'A', })
    serial_code: string;    //Código serial

    @ApiProperty({ example: '2024-01-15', })
    created: string;    //Fecha de creación

    @ApiProperty({ example: 'http://localhost/proyectos/desarrollo-actual/readonly/export_pdf/abc123...', })
    invoice_pdf: string;    //URL del PDF del documento
}