import { PartialCreditNotesService } from './../partial-credit-notes.services';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PartialCreditNoteCreateDto } from '../dtos/partial-credit-notes-create.dto';
import { PartialCreaditNoteResult } from '../entities/partial-credit-notes-result.entity';

@Controller('partial-credit-notes')
export class PartialCreditNotesController {
    constructor(
        private readonly partialCreditNotesService: PartialCreditNotesService,
    ) { }

    @Post()
    async partialCreditNoteCreate(@Req() req: Request, @Body() partialCreditNoteCreateDto: PartialCreditNoteCreateDto) {
        try {
            const token = req['token'];
            const response = await this.partialCreditNotesService.partialCreditNoteCreate(token, partialCreditNoteCreateDto)
            if (response?.status === HttpStatus.OK) {
                const partialCreditNote: PartialCreaditNoteResult = response?.data;
                return partialCreditNote;
            } else {

            }
        } catch (ex) {
            throw new HttpException({
                //ex: ex, 
                message: ex.message,
            },
                ex.status,
            );
        }
    }
}