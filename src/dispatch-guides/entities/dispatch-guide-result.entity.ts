import { ApiProperty } from '@nestjs/swagger';

const dispatchGuideExamples = [
    {
        'dispatch_guide_number': '000047',
        'control_number': '00-00000058',
        'dispatch_guide_pdf': 'http://localhost/proyectos/desarrollo-actual/readonly/export_pdf/4b86ca48d90bd5f0978afa3a012503a4'
    }
];

export class DispatchGuideResult {
    @ApiProperty({ example: true, })
    success: boolean;   //Indica si la solicitud fue exitosa

    @ApiProperty({ example: 'Guías de despacho guardadas satisfactoriamente', })
    message: string;    //Mensaje de respuesta

    @ApiProperty({ example: [''], })
    dispatch_guide_errors: any[];   //Lista de errores(si los hay)

    @ApiProperty({ example: [dispatchGuideExamples], })
    dispatch_guide_success: DispatchGuideSuccess[]; //Lista de guías procesadas exitosamente

    @ApiProperty({ example: 'La cantidad de número de control es baja: Total usados: 58, Total restantes: 42, Porcentaje usado: 58%,  Porcentaje restante: 42%' })
    warning_control_numbers: string;    //Mensaje de advertencia sobre números de control(opcional)
}

export class DispatchGuideSuccess {
    @ApiProperty({ example: '000047', })
    dispatch_guide_number: string;  //Número de la guía de despacho

    @ApiProperty({ example: '00-00000058', })
    control_number: string; //Número de control

    @ApiProperty({ example: 'http://localhost/proyectos/desarrollo-actual/readonly/export_pdf/4b86ca48d90bd5f0978afa3a012503a4', })
    dispatch_guide_pdf: string; //URL del PDF de la guía de despacho
}