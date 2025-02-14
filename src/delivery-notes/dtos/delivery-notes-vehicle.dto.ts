import { IsNotEmpty, IsString } from 'class-validator';

export class DeliveryNoteVehicleDto {
    @IsString()
    @IsNotEmpty()
    placaVehiculo: string;  //Placa del vehículo

    @IsString()
    @IsNotEmpty()
    tipoVehiculo: string;   //Tipo de vehículo

    @IsString()
    @IsNotEmpty()
    colorVehiculo: string;  //Color del vehículo

    @IsString()
    @IsNotEmpty()
    codigoVehiculo: string; //Código del vehículo
}