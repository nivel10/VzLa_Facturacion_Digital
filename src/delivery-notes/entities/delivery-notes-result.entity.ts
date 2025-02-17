import { ApiProperty } from '@nestjs/swagger';

const deliveryNoteExamples = [
    {
        'delivery_note_number': '000005',
        'control_number': '00-00000062',
        'delivery_note_pdf': 'http://localhost/proyectos/produccion-actual/readonly/export_pdf/b8af7d0fbf094517781e0382102d7b27'
    }
];

export class DeliveryNoteResult {
    @ApiProperty({ example: true })
    success: boolean;   //Indica si la solicitud fue exitosa

    @ApiProperty({ example: 'Notas de entrega guardadas satisfactoriamente.' })
    message: string;    //Mensaje de respuesta

    @ApiProperty({ example: [''] })
    delivery_note_errors: [any]; //Lista de errores(si los hay)

    @ApiProperty({ example: deliveryNoteExamples })
    delivery_note_success: DeliveryNoteSuccess[];    //Lista de notas de entrega procesadas exitosamente

    @ApiProperty({ example: 'La cantidad de número de control es baja: Total usados: 62, Total restantes: 38, Porcentaje usado: 62%,  Porcentaje restante: 38%' })
    warning_control_numbers: string;    //Mensaje de advertencia sobre números de control(opcional)
}

class DeliveryNoteSuccess {
    @ApiProperty({ example: '' })
    delivery_note_number: string;   //Número de la nota de entrega

    @ApiProperty({ example: '' })
    control_number: string; //Número de control

    @ApiProperty({ example: '' })
    delivery_note_pdf: string;  //URL del PDF de la nota de entrega
}