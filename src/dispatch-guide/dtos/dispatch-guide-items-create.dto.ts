import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

type tipoImpuestos = 'G' | 'R' | 'A';
const tipoImpuestosArray: tipoImpuestos[] = ['G', 'R', 'A'];

export class DisptachGuideItemDto {
    @IsString()
    @IsNotEmpty()
    codigoProducto: string; //Código del producto(formato: LETRAS-NÚMEROS)

    @IsString()
    @IsNotEmpty()
    nombreProducto: string; //Nombre del producto

    @IsString()
    @IsNotEmpty()
    descripcionProducto: string;    //Descripción del producto

    @IsString()
    @IsNotEmpty()
    @IsEnum(tipoImpuestosArray)
    tipoImpuesto: tipoImpuestos;   //Tipo de impuesto(G: General, R: Reducido, A: Adicional)

    @IsNumber()
    @IsNotEmpty()
    cantidadAdquirida: number;  //Cantidad del producto(debe ser un número entero positivo)

    @IsString()
    @IsNotEmpty()
    precioProducto: string; //Precio del producto(usar coma como separador decimal, sin separadores de miles)
}