import { InvoiceResult } from './../entities/invoice.entity';
import { InvoiceCreateDto } from './../dtos/invoiceCreate.dto';
import { Body, Controller, Get, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { InvoicesService } from '../invoices.services';
import { Request } from 'express';
import { AxiosResponse } from 'axios';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('invoices')
@Controller('invoices')
export class InvoicesController {
    constructor(
        private readonly invocesService: InvoicesService,
    ) { }

    // @ApiBearerAuth()
    // @ApiOperation({ summary: 'get all invoices', })
    // @ApiResponse({ status: HttpStatus.OK, type: [InvoiceResult] })
    // @Get()
    // invoicesAll() {
    //     return this.invocesService.invoicesAll();
    // }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'create invoice / invoices', })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'return created invoice / invoices ', type: [InvoiceResult], })
    @Post()
    async invoiceCreate(@Req() req: Request, @Body() invoiceCreateDto: InvoiceCreateDto,) {
        const token = req['token'];

        //console.log(invoiceCreateDto);
        const response: AxiosResponse = await this.invocesService.InvoiceCreate(invoiceCreateDto, token);
        if (response.status === HttpStatus.OK) {
            let invoiceCreate: InvoiceResult = response.data;
            return invoiceCreate;
        } else {
            throw new HttpException(
                response.statusText,
                response.status,
            );
        }
    }
}