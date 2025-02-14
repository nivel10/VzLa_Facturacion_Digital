import { DebitNotesServices } from './../debit-notes.service';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DebitNoteCreateDto } from '../dtos/debit-notes-create.dto';

@Controller('debit-notes')
export class DebitNoteController {
    constructor(
        private readonly debitNotesServices: DebitNotesServices,
    ) { }

    @Post()
    async debitNoteCrate(@Req() req: Request, @Body() debitNoteCreateDto: DebitNoteCreateDto) {
        const token = req['token'];

        const response = await this.debitNotesServices.debitNoteCreate(token, debitNoteCreateDto);
        if (response?.status === HttpStatus.OK) {
            const debitNote: any = response?.data;
            return debitNote;
        } else {
            throw new HttpException(
                token?.statusText,
                token?.status
            );
        }
    }
}