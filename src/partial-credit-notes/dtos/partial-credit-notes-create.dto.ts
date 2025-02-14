import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, Min, ValidateNested } from 'class-validator';

export class PartialCreditNoteCreateDto {
    @IsString()
    @IsNotEmpty()
    numeroFactura: string; //Número de factura a afectar

    @IsString()
    @IsNotEmpty()
    numeroNotaCredito: string; //Número de nota de crédito a crear

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    @Type(() => PartialCreditNoteItemDto)
    productos: PartialCreditNoteItemDto[]  //Lista de productos a incluir en la nota de crédito
}

export class PartialCreditNoteItemDto {
    @IsString()
    @IsNotEmpty()
    codigo: string;   //Código del producto

    @IsNumber()
    @IsNotEmpty()
    @Min(0.1)
    cantidad: number;  //Cantidad del producto a afectar

    @IsString()
    @IsNotEmpty()
    descripcion: string;  //Descripción del producto
}