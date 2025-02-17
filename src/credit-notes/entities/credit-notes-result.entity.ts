import { ApiProperty } from '@nestjs/swagger';

export class CreditNoteResult {
    @ApiProperty({ example: true, })
    success: boolean;    //Indica si la solicitud fue exitosa.

    @ApiProperty({ example: 'Nota de crédito guardada satisfactoriamente.', })
    message: string;    //Mensaje de respuesta.

    @ApiProperty({ example: '000007', })
    invoice_number_affected: string; //Numero de factura afectada

    @ApiProperty({ example: '00-00000055', })
    control_number: string; //Numero de control

    @ApiProperty({ example: 'http://localhost/proyectos/desarrollo-actual/readonly/export_pdf/2d95666e2649fcfc6e3af75e09f5adb9', })
    credit_note_pdf: string;    //URL del PDF de la nota de crédito.
}