import { Response } from 'express';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TaxDocumentsService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    async taxDocumentsGet(token: string): Promise<AxiosResponse<any>> {
        let response: AxiosResponse = <any>{};
        try {
            response = await firstValueFrom(
                this.httpService.get(
                    `${process.env.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/get_list_invoices`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )
            );

            return response;
        } catch (ex) {
            switch (ex?.response?.status) {
                case HttpStatus.NOT_FOUND:
                    return ex?.response;
                default:
                    throw new HttpException(
                        {
                            //ex: ex,
                            message: ex?.response?.data?.message || ex?.response?.statusText || 'Error getting tax documents',
                        },
                        ex?.response?.status || HttpStatus.BAD_REQUEST
                    );

            }
        }
    }
}