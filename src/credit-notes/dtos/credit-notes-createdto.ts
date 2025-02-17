import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreditNoteCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numeroFactura: string;  //Número de la factura a afectar

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numeroNotaCredito: string;  //Número de nota de crédito a crear
}