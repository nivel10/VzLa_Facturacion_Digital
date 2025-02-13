import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentMethodsService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async paymentMethodsGet(token: string): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpService.get(
                    `${process.env.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/payments_methods`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )
            );

            return response
        } catch (ex) {
            throw new HttpException(
                {
                    //ex: ex,
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error getting payment methods',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}