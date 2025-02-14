import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CreditNoteCreateDto } from './dtos/credit-notes-createdto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CreditNotesService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async creditNoteCreate(token: string, creditNoteCreateDto: CreditNoteCreateDto,): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpService.post(
                    `${process?.env?.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/add_credit_note`,
                    creditNoteCreateDto,
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
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error creating credit note',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}