export class BankResult {
    success: boolean;   //Indica si la solicitud fue exitosa
    banks: bank[]    //Lista de bancos
}

class bank {
    id_bank: string;  //ID del banco
    bank_code: string;    //Código del banco
    bank_name: string;    //Nombre del banco
}