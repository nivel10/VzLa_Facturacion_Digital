import { ApiProperty } from "@nestjs/swagger";

const paymentMethodExamples = [
    {
        "id_payment_method": "1",
        "payment_method": "transferencia"
    },
    {
        "id_payment_method": "2",
        "payment_method": "efectivo"
    },
    {
        "id_payment_method": "3",
        "payment_method": "pago movil"
    },
    {
        "id_payment_method": "4",
        "payment_method": "divisa"
    }
];

export class PaymentMethodsResultEntity {
    @ApiProperty({ example: true, })
    success: boolean;    //Indica si la solicitud fue exitosa

    @ApiProperty({ example: paymentMethodExamples, })
    payment_methods: PaymentMethods[]    //Lista de métodos de pago
}

export class PaymentMethods {
    @ApiProperty({example: "1"})
    id_payment_method: string; //ID del método de pago

    @ApiProperty({example: "transferencia"})
    payment_method: string; //Nombre del método de pago
}