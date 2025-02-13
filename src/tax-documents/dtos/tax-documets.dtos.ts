import { IsNumber, IsString } from "class-validator";

export class TaxDocumentsDto {
    @IsString()
    numeroDeFactura?: string;    //Número de factura a buscar

    @IsString()
    numeroDeControl?: string;    //Número de control a buscar

    @IsString()
    fechaInicio?: string; //Fecha inicial para el rango de búsqueda(formato: YYYY-MM - DD)

    @IsString()
    fechaFin?: string;//Fecha final para el rango de búsqueda(formato: YYYY - MM - DD)

    @IsString()
    tipoDeIdentificacion?: string;//Tipo de documento de identidad del cliente(V, J, E, G, etc.)

    @IsString()
    identificacionCliente?: string;//Número de identificación del cliente

    @IsNumber()
    pagina?: number;	//Número de página para la paginación - Valor por defecto: 1

    @IsNumber()
    limite?: number; //Cantidad de registros por página
}