export class PaymentMethodsResult {
    success: boolean;    //Indica si la solicitud fue exitosa
    payment_methods: PaymentMethods[]    //Lista de métodos de pago
}

export class PaymentMethods {
    success: boolean;    //Indica si la solicitud fue exitosa
    id_payment_method: string; //ID del método de pago
    payment_method: string; //Nombre del método de pago
}