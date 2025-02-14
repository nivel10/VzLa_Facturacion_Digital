import { IsNotEmpty, IsString } from 'class-validator';

export class CreditNoteCreateDto {
    @IsString()
    @IsNotEmpty()
    numeroFactura: string;  //Número de la factura a afectar

    @IsString()
    @IsNotEmpty()
    numeroNotaCredito: string;  //Número de nota de crédito a crear
}