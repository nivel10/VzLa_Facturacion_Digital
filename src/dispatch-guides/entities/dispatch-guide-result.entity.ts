export class DispatchGuideResult {
    success: boolean;   //Indica si la solicitud fue exitosa
    message: string;    //Mensaje de respuesta
    dispatch_guide_errors: any[];   //Lista de errores(si los hay)
    dispatch_guide_success: DispatchGuideSuccess[]; //Lista de guías procesadas exitosamente
    warning_control_numbers: string;    //Mensaje de advertencia sobre números de control(opcional)
}

export class DispatchGuideSuccess {
    dispatch_guide_number: string;  //Número de la guía de despacho
    control_number: string; //Número de control
    dispatch_guide_pdf: string; //URL del PDF de la guía de despacho
}