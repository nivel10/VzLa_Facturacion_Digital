import { HttpService } from '@nestjs/axios';
import { InvoiceCreateDto } from './dtos/invoiceCreate.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as invoicesLocal from '../providers/json/invoicesFull.json';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InvoicesService {
    constructor(
        private readonly httpService: HttpService,
    ) { }
    private invoices = invoicesLocal;

    invoicesAll() {
        return this.invoices;
    }

    async InvoiceCreate(InvoiceCreateDto: InvoiceCreateDto, token: string): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            // if (!Configuration.appToken) {
            //     const authResponse = await this.authServices.authTokenCreate();
            //     if (authResponse.status !== HttpStatusCode.Ok) {
            //         //return result?.data;
            //         return authResponse;
            //     }
            // }

            response = await firstValueFrom(
                this.httpService.post(
                    `${process.env.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/add_list_invoice`,
                    InvoiceCreateDto,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                )
            );

            return response;
        } catch (ex) {
            throw new HttpException(
                {
                    //ex: ex,
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error creating inovices',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}