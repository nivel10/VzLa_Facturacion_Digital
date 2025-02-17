import { ApiProperty } from '@nestjs/swagger';

export class PartialCreaditNoteResult {
    @ApiProperty({ example: true, })
    success: boolean;    //Indica si la solicitud fue exitosa

    @ApiProperty({ example: 'Nota de crédito guardada satisfactoriamente.', })
    message: string;    //Mensaje de respuesta

    @ApiProperty({ example: '000002', })
    note_credit_number: string; //Número de la nota de crédito creada

    @ApiProperty({ example: '000050', })
    invoice_number_affected: string;    //Número de factura afectada

    @ApiProperty({ example: '00-00000065', })
    control_number: string; //Número de control

    @ApiProperty({ example: 'http://localhost/proyectos/produccion-actual/readonly/export_pdf/5da713a690c067105aeb2fae32403405', })
    credit_note_pdf: string;    //URL del PDF de la nota de crédito

    @ApiProperty({ example: 'La cantidad de número de control es baja: Total usados: 64, Total restantes: 36, Porcentaje usado: 64%,  Porcentaje restante: 36%', })
    warning_control_numbers: string;    //Mensaje de advertencia sobre números de control(opcional)
}