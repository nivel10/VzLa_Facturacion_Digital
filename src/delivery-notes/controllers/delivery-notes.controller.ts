import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DeliveryNoteCreateDto } from '../dtos/delivery-notes-create.dto';

@Controller('delivery-notes')
export class DeliveryNotesController {

    @Post()
    async deliveryNoteCreate(@Req() req: Request, @Body() deliveryNoteCreateDto: DeliveryNoteCreateDto) {
        const token = req['token'];

        return deliveryNoteCreateDto;
    }
}