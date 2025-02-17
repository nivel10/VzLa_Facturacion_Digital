import { ApiProperty } from '@nestjs/swagger';

export class DebitNoteResult {
    @ApiProperty({ example: true, })
    success: boolean;

    @ApiProperty({ example: 'Nota de débito guardada satisfactoriamente.', })
    message: string;

    @ApiProperty({ example: 'http://localhost/proyectos/desarrollo-actual/readonly/export_pdf/7b66e8931c93da8c88a0a8b6dec62f9e', })
    invoice_pdf: string;

    @ApiProperty({ example: 'La cantidad de número de control es baja: Total usados: 57, Total restantes: 43, Porcentaje usado: 57%,  Porcentaje restante: 43%', })
    warning_control_numbers: string;
}