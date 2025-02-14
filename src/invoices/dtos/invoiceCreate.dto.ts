import { ArrayNotEmpty, IsArray, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, MaxLength, MinLength, ValidateIf, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

enum tipoImpuestoE {
    G = 'G',
    R = 'R',
    A = 'A',
};
type tipoImpuestoT = 'G' | 'R' | 'A';
//const tipoImpuestoArray: tipoImpuestoT[] = ['G', 'R', 'A'];

enum order_payment_methodE {
    divisa = 'divisa',
    efectivo = 'efectivo',
    pago_movil = 'pago movil',
    transferencia = 'transferencia'
};
type order_payment_methodT = 'divisa' | 'efectivo' | 'pago movil' | 'transferencia';
//const order_payment_methodArray: order_payment_methodT[] = ['divisa', 'efectivo', 'pago movil', 'transferencia'];

export class InvoiceCreateDto {
    // @IsString()
    // @IsNotEmpty()
    // @MinLength(7)
    // @MaxLength(10)
    // rifEmisorFactura: string;	//RIF del emisor de la factura.

    @IsString()
    @IsNotEmpty()
    numeroSerie: string;	//Serie de la factura.

    @IsNumber()
    @IsNotEmpty()
    cantidadFactura: number;	//Cantidad de facturas.

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested()
    //@IsNotEmptyObject()
    @Type(() => InvoiceDto)
    facturas: InvoiceDto[];	//Lista de facturas.
}

class InvoiceDto {
    @IsString()
    @IsNotEmpty()
    numeroFactura: string;	//Número de la factura.

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(10)
    documentoIdentidadCliente: string;	//Documento de identidad del cliente.

    @IsString()
    @IsNotEmpty()
    nombreRazonSocialCliente: string;	//Nombre o razón social del cliente.

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    correoCliente: string;	//Correo del cliente.

    @IsString()
    @IsNotEmpty()
    direccionCliente: string;	//Dirección del cliente.

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    telefonoCliente: string;	//Teléfono del cliente.

    @IsArray()
    @ValidateNested()
    @Type(() => ItemDto)
    productos: ItemDto[];	//Lista de productos.

    @IsString()
    tasa_del_dia?: string;    //Tasa de cambio del día. Campo opcional, debe usar punto como separador decimal (ejemplo: "56.65").

    @IsArray()
    @ValidateNested()
    @Type(() => PaymentMethods)
    order_payment_methods?: PaymentMethods[] //Lista de métodos de pago. Array opcional, puede contener máximo 2 métodos de pago. Si no se proporciona o está comentado, el sistema calculará el monto total de los productos y la factura será emitida como pago en efectivo.
}

class ItemDto {
    @IsString()
    @IsNotEmpty()
    codigoProducto: string;	//Codigo del producto.

    @IsString()
    @IsNotEmpty()
    nombreProducto: string;	//Nombre del producto.

    @IsString()
    @IsNotEmpty()
    descripcionProducto: string;	//Descripcion del producto.

    @IsString()
    @IsNotEmpty()
    @Length(1, 1)
    //@IsEnum(tipoImpuestoArray)
    @IsEnum(tipoImpuestoE)
    tipoImpuesto: tipoImpuestoT    //Tipo de impuesto. Campo obligatorio, valores permitidos: "G" (General), "R" (Reducido), "A" (Adicional).

    @IsNumber()
    @IsNotEmpty()
    cantidadAdquirida: number;	//Cantidad adquirida del producto. Campo obligatorio, debe ser un número entero positivo.

    @IsString()
    @IsNotEmpty()
    precioProducto: number;	//Precio del producto. Campo obligatorio, debe ser un número decimal usando coma como separador y máximo 2 decimales (ejemplo: "1,55").
}

class PaymentMethods {
    @IsString()
    @IsNotEmpty()
    //order_payment_method: string; //Método de pago. Valores permitidos: "divisa", "efectivo", "pago movil", "transferencia".
    //@IsEnum(order_payment_methodArray)
    @IsEnum(order_payment_methodE)
    order_payment_method: order_payment_methodT; //Método de pago. Valores permitidos: "divisa", "efectivo", "pago movil", "transferencia".    
    // divisa: Requiere monto total de la factura y calcula IGTF automáticamente si no se proporciona.
    // efectivo: Solo requiere el monto.
    // pago movil: Requiere banco, número de teléfono y número de referencia.
    // transferencia: Requiere banco emisor y número de referencia.

    @IsString()
    @IsNotEmpty()
    monto: string; //Monto del pago. Debe usar punto como separador decimal.

    @IsString()
    @IsNotEmpty()
    @ValidateIf(pa => pa.order_payment_method === 'divisa')
    igtf?: string;   //Monto del IGTF. Solo aplica para pagos en divisa. Si está vacío, el sistema calculará automáticamente el IGTF basado en el monto.

    @IsString()
    @IsNotEmpty()
    @ValidateIf(pa => pa.order_payment_method === 'transferencia' || pa.order_payment_method === 'pago movil')
    banco?: string; //Nombre del banco. Obligatorio para "transferencia" y "pago movil".

    @IsString()
    @IsNotEmpty()
    @ValidateIf(pa => pa.order_payment_method === 'pago movil')
    telefono_pago_movil?: string;    //Número de teléfono. Obligatorio solo para "pago movil".

    @IsString()
    @IsNotEmpty()
    @ValidateIf(pa => pa.order_payment_method === 'pago movil' || pa.order_payment_method === 'transferencia')
    numero_de_refencia_de_operacion: string; //Número de referencia. Obligatorio para "transferencia" y "pago movil".
}