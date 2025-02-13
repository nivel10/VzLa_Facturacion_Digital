import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { DisptachGuideCreateDto } from './dtos/dispatch-guide-create.dto';

@Injectable()
export class DispatchGuideService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async dispatchGuideCreate(token: string, dispatchGuideCreateDto: DisptachGuideCreateDto): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpService.post(
                    `${process?.env?.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/add_list_dispatch_guide`,
                    dispatchGuideCreateDto,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )
            );

            return response;;
        } catch (ex) {
            throw new HttpException(
                {
                    //ex: ex,
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error creating dispatch guide',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}