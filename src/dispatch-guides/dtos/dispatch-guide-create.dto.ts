import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsEmail, IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsPhoneNumber, IsString, ValidateNested } from 'class-validator';
import { DisptachGuideVehicleDto } from './dispatch-guide-vehicle-create.dto';

enum tipoImpuestosE {
    G = 'G',
    R = 'R',
    A = 'A'
}
type tipoImpuestosT = 'G' | 'R' | 'A';
//const tipoImpuestosArray: tipoImpuestosT[] = ['G', 'R', 'A'];

enum cargosE {
    chofer = 'chofer',
    despachador = 'despachador',
};
type cargosT = 'chofer' | 'despachador';
//const cargosArray: cargosT[] = ['chofer', 'despachador'];

export class DisptachGuideCreateDto {
    @IsString()
    @IsNotEmpty()
    numeroSerie: string;    //Serie de la guía de despacho

    @IsNumber()
    @IsNotEmpty()
    cantidadGDP: number;    //Cantidad de guías de despacho(debe coincidir con el número de elementos en el array guiasDeDespacho)

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    //@IsNotEmptyObject()
    @Type(() => DisptachGuideDto)
    guiasDeDespacho: DisptachGuideDto[];   //Lista de guías de despacho
}

class DisptachGuideDto {
    @IsString()
    @IsNotEmpty()
    numeroDeGuiaDeDespacho: string; //Número de la guía de despacho

    @IsString()
    @IsNotEmpty()
    documentoIdentidadCliente: string;  //Documento de identidad del cliente(debe comenzar con V, E, P, J, G o C seguido de al menos 5 dígitos)

    @IsString()
    @IsNotEmpty()
    nombreRazonSocialCliente: string;   //Nombre o razón social del cliente

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    correoCliente: string;  //Correo del cliente(debe contener '@' y ser un formato válido)

    @IsString()
    @IsNotEmpty()
    direccionCliente: string;   //Dirección del cliente

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    telefonoCliente: string;    //Teléfono del cliente

    @IsString()
    @IsNotEmpty()
    origen: string; //Lugar de origen del despacho

    @IsString()
    @IsNotEmpty()
    destino: string;    //Lugar de destino del despacho

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    //@IsNotEmptyObject()
    @Type(() => DisptachGuideItemDto)
    productos: DisptachGuideItemDto[]; //Lista de productos

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    //@IsNotEmptyObject()
    @Type(() => DisptachGuideEmployeeDto)
    empleados: DisptachGuideEmployeeDto[];   //Lista de empleados

    @ValidateNested()
    @IsNotEmptyObject()
    @Type(() => DisptachGuideVehicleDto)
    vehiculo: DisptachGuideVehicleDto;    //Información del vehículo
}

class DisptachGuideItemDto {
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
    //@IsEnum(tipoImpuestosArray)
    @IsEnum(tipoImpuestosE)
    tipoImpuesto: tipoImpuestosT;   //Tipo de impuesto(G: General, R: Reducido, A: Adicional)

    @IsNumber()
    @IsNotEmpty()
    cantidadAdquirida: number;  //Cantidad del producto(debe ser un número entero positivo)

    @IsString()
    @IsNotEmpty()
    precioProducto: string; //Precio del producto(usar coma como separador decimal, sin separadores de miles)
}

class DisptachGuideEmployeeDto {
    @IsString()
    @IsNotEmpty()
    nombre: string; //Nombre del empleado

    @IsString()
    @IsNotEmpty()
    apellido: string;   //Apellido del empleado

    @IsString()
    @IsNotEmpty()
    DocumentoIdentidad: string; //Documento de identidad del empleado

    @IsString()
    @IsNotEmpty()
    //@IsEnum(cargosArray)
    @IsEnum(cargosE)
    cargo: cargosT;  //Cargo del empleado(valores permitidos: "chofer", "despachador")

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    correo: string; //Correo del empleado (debe contener '@' y ser un formato válido)
}

// class DisptachGuideVehicleDto {
//     @IsString()
//     @IsNotEmpty()
//     placaVehiculo: string;  //Placa del vehículo

//     @IsString()
//     @IsNotEmpty()
//     tipoVehiculo: string;   //Tipo de vehículo

//     @IsString()
//     @IsNotEmpty()
//     colorVehiculo: string;  //Color del vehículo

//     @IsString()
//     @IsNotEmpty()
//     codigoVehiculo: string; //Código del vehículo
// }