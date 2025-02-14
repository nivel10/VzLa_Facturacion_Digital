import { HttpService } from '@nestjs/axios';
import { DebitNoteCreateDto } from './dtos/debit-notes-create.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DebitNotesServices {
    constructor(
        private readonly httpServices: HttpService,
    ) { }
    async debitNoteCreate(token: string, debitNoteCreateDto: DebitNoteCreateDto) {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpServices.post(
                    `${process?.env?.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/add_debit_note`,
                    debitNoteCreateDto,
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
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error creating debit note',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}