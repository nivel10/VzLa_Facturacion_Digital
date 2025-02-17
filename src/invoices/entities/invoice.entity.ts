import { ApiProperty } from '@nestjs/swagger';

const invoiceExamples = [
    {
        'invoice_number': '00001',
        'control_number': '00-00000001',
        'invoice_pdf': 'https://temp.cgimprenta.com/readonly/export_pdf/15cf76466b97264765356fcc56d801d1'
    }
];

export class InvoiceResult {
    @ApiProperty({ example: true, })
    success: boolean;

    @ApiProperty({ example: 'Facturas guardadas satisfactoriamente.' })
    message: string;

    @ApiProperty({ example: [''] })
    invoice_errors: [];

    @ApiProperty({ example: invoiceExamples, })
    invoice_list_success: InvoiceListSuccess[];
}

class InvoiceListSuccess {
    @ApiProperty({ example: '00001' })
    invoice_number: string;

    @ApiProperty({ example: '00-00001' })
    control_number: string;

    @ApiProperty({ example: 'https://temp.cgimprenta.com/readonly/export_pdf/15cf76466b97264765356fcc56d801d1' })
    invoice_pdf: string;
}