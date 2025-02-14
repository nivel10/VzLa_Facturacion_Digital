import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsEmail, IsEnum, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator';
import { DeliveryNoteVehicleDto } from './delivery-notes-vehicle.dto';

enum cargose {
    'chofer' = 'chofer',
    'despachador' = 'despachador',
};
type cargos = 'chofer' | 'despachador';
// //const cargosArray: cargos[] = ['chofer', 'despachador'];
// const cargosArray = ['chofer', 'despachador'];

export class DeliveryNoteCreateDto {
    @IsString()
    @IsNotEmpty()
    numeroSerie: string;    //Serie de la nota de entrega

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    @Type(() => DeliveryNoteDto)
    notasDeEntregas: DeliveryNoteDto[]    //Lista de notas de entrega
}

class DeliveryNoteDto {
    @IsString()
    @IsNotEmpty()
    numeroFacturaAfectar: string;   //Número de factura a afectar

    @IsString()
    @IsNotEmpty()
    numeroDeNotaDeEntrega: string;  //Número de nota de entrega a crear

    @IsString()
    @IsNotEmpty()
    origen: string; //Ciudad, estado o parroquia de origen

    @IsString()
    @IsNotEmpty()
    destino: string;    //Ciudad, estado o parroquia de destino

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    @Type(() => DeliveryNoteEmployeeDto)
    empleados: DeliveryNoteEmployeeDto[] //Lista de empleados(debe incluir chofer y despachador)

    @ValidateNested()
    @IsNotEmptyObject()
    @Type(() => DeliveryNoteVehicleDto)
    vehiculo: DeliveryNoteVehicleDto  //Información del vehículo a usar en la entrega
}

class DeliveryNoteEmployeeDto {
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
    //cargo: string;  //Cargo del empleado("chofer" o "despachador")
    //@IsEnum(cargosArray)
    @IsEnum(cargose)
    cargo: cargos;  //Cargo del empleado("chofer" o "despachador")

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    correo: string; //Correo del empleado(debe contener '@')
}

// class DeliveryNoteVehicleDto {
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