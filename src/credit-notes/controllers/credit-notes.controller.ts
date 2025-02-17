import { CreditNotesService } from './../credit-notes.service';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreditNoteCreateDto } from '../dtos/credit-notes-createdto';
import { CreditNoteResult } from '../entities/credit-notes-result.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('creditNotes')
@Controller('credit-notes')
export class CreditNotesController {
    constructor(
        private readonly creditNotesService: CreditNotesService,
    ) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'create credit note' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'retur credit note created', type: CreditNoteResult, })
    @Post()
    async creditNoteCreate(@Req() req: Request, @Body() creditNoteCreateDto: CreditNoteCreateDto) {
        const token = req['token'];
        const response = await this.creditNotesService.creditNoteCreate(token, creditNoteCreateDto);

        if (response?.status === HttpStatus.OK) {
            const creditNote: CreditNoteResult = response?.data;
            return creditNote;
        } else {
            throw new HttpException(
                token?.statusText,
                token?.status
            );
        }
    }
}