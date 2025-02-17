import { DebitNotesServices } from './../debit-notes.service';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DebitNoteCreateDto } from '../dtos/debit-notes-create.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DebitNoteResult } from '../entities/debit-notes-result.entity';

@ApiTags('debitNotes')
@Controller('debit-notes')
export class DebitNoteController {
    constructor(
        private readonly debitNotesServices: DebitNotesServices,
    ) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'create debit note', })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'return debit note drested', type: DebitNoteResult })
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