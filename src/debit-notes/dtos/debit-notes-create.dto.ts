import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DebitNoteCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numeroFactura: string;  //Número de la factura a afectar

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numeroNotaDebito: string;   //Número de nota de débito a crear
}