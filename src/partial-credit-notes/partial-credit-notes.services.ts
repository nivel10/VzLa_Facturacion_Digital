import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { PartialCreditNoteCreateDto } from './dtos/partial-credit-notes-create.dto';

@Injectable()
export class PartialCreditNotesService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async partialCreditNoteCreate(token: string, partialCreditNoteCreateDto: PartialCreditNoteCreateDto,): Promise<AxiosResponse<any>> {
        let response: AxiosResponse<any>;
        try {
            response = await firstValueFrom(
                this.httpService.post(
                    `${process?.env?.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/add_credit_note_with_products`,
                    partialCreditNoteCreateDto,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                    },
                )
            );

            return response;
        } catch (ex) {
            throw new HttpException(
                {
                    //ex: ex,
                    message: ex?.response?.data?.message || ex?.response?.statusText || 'Error creating partial credit note',
                },
                ex?.response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}