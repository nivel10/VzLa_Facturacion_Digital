import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BanksService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async banksGet(token: string): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpService.get(
                    `${process.env.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/banks`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            );

            return response;
        } catch (ex) {
            throw new HttpException(
                {
                    //ex: ex,
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error getting banks',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}