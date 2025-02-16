import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentMethodsResultEntity } from './../entities/payment-methods-result.entity';
import { PaymentMethodsService } from './../payment-methods.service';
import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Request } from 'express';

@ApiTags('paymentMethods')
@Controller('payment-methods')
export class PaymentMethodsController {
    constructor(
        private readonly paymentMethodsService: PaymentMethodsService
    ) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'get all payment methods' })
    @ApiResponse({ status: HttpStatus.OK, description: 'return all payment methods', type: [PaymentMethodsResultEntity] })
    @Get()
    async paymentMethodsGet(@Req() req: Request) {
        try {
            const token = req['token'];
            const response = await this.paymentMethodsService.paymentMethodsGet(token)
            if (response.status === HttpStatus.OK) {
                const paymentMethods: PaymentMethodsResultEntity = response.data;
                return paymentMethods;
            }
        } catch (ex) {
            throw new HttpException({
                //ex: ex, 
                message: ex.message,
            },
                ex.status,
            );
        }
    }
}