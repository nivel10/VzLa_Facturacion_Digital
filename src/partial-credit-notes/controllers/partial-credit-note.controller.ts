import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('partial-credit-notes')
export class PartialCreditNoteController {

    @Post()
    async partialCreditNoteCreate(@Req() req: Request, @Body() partialCreditNoteCreateDto: any) {
        const token = req['token'];

        return partialCreditNoteCreateDto;
    }
}