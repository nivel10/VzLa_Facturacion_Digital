import { PaymentMethodsResult } from './../entities/payment-methods-result.entity';
import { PaymentMethodsService } from './../payment-methods.service';
import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('payment-methods')
export class PaymentMethodsController {
    constructor(
        private readonly paymentMethodsService: PaymentMethodsService
    ) { }

    @Get()
    async paymentMethodsGet(@Req() req: Request) {
        try {
            const token = req['token'];
            const response = await this.paymentMethodsService.paymentMethodsGet(token)
            if (response.status === HttpStatus.OK) {
                const paymentMethods: PaymentMethodsResult = response.data;
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