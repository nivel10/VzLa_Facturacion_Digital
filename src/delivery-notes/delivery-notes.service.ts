import { DeliveryNoteCreateDto } from './dtos/delivery-notes-create.dto';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DeliveryNotesService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async deliveryNoteCreate(token: string, deliveryNoteCreateDto: DeliveryNoteCreateDto): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpService.post(
                    `${process?.env?.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/add_list_delivery`,
                    deliveryNoteCreateDto,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )
            );

            return response;
        } catch (ex) {
            throw new HttpException(
                {
                    //ex: ex,
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error creating delivery notes',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}