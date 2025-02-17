import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, Min, ValidateNested } from 'class-validator';

const partialCreditNoteProductExamples = [
    {
        'codigo': 'string',
        'cantidad': 0,
        'descripcion': 'string'
    }
];

export class PartialCreditNoteCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numeroFactura: string; //Número de factura a afectar

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numeroNotaCredito: string; //Número de nota de crédito a crear

    @ApiProperty({ example: partialCreditNoteProductExamples, })
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    @Type(() => PartialCreditNoteItemDto)
    productos: PartialCreditNoteItemDto[]  //Lista de productos a incluir en la nota de crédito
}

export class PartialCreditNoteItemDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    codigo: string;   //Código del producto

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @Min(0.1)
    cantidad: number;  //Cantidad del producto a afectar

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    descripcion: string;  //Descripción del producto
}