import { ApiProperty } from '@nestjs/swagger';

const bankExamples = [
    {
        'id_bank': '1',
        'bank_code': '0156',
        'bank_name': '100% Banco'
    },
    {
        'id_bank': '2',
        'bank_code': '0172',
        'bank_name': 'Bancamiga'
    },
    {
        'id_bank': '3',
        'bank_code': '0114',
        'bank_name': 'Bancaribe'
    },
];

export class BankResult {
    @ApiProperty({ example: true, })
    success: boolean;   //Indica si la solicitud fue exitosa

    @ApiProperty({ example: bankExamples, })
    banks: bank[]    //Lista de bancos
}

class bank {
    @ApiProperty({ example: '1' })
    id_bank: string;  //ID del banco

    @ApiProperty({ example: '0156' })
    bank_code: string;    //Código del banco

    @ApiProperty({ example: '100% Banco' })
    bank_name: string;    //Nombre del banco
}