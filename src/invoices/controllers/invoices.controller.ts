import { Invoice } from './../entities/invoice.entity';
import { InvoiceCreateDto } from './../dtos/invoiceCreate.dto';
import { Body, Controller, Get, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { InvoicesService } from '../invoices.services';
import { Request } from 'express';
import { AxiosResponse } from 'axios';

@Controller('invoices')
export class InvoicesController {
    constructor(
        private readonly invocesService: InvoicesService,
    ) { }

    @Get()
    invoicesAll() {
        return this.invocesService.invoicesAll();
    }

    @Post()
    async invoiceCreate(@Req() req: Request, @Body() invoiceCreateDto: InvoiceCreateDto,) {
        const token = req['token'];

        //console.log(invoiceCreateDto);
        const response: AxiosResponse = await this.invocesService.InvoiceCreate(invoiceCreateDto, token);
        if (response.status === HttpStatus.OK) {
            let invoiceCreate: Invoice = response.data;
            return invoiceCreate;
        } else {
            throw new HttpException(
                response.statusText,
                response.status,
            );
        }
    }
}