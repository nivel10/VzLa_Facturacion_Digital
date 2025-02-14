import { IsNotEmpty, IsString } from 'class-validator';

export class DebitNoteCreateDto {
    @IsString()
    @IsNotEmpty()
    numeroFactura: string;  //Número de la factura a afectar

    @IsString()
    @IsNotEmpty()
    numeroNotaDebito: string;   //Número de nota de débito a crear
}