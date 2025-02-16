import { DeliveryNotesService } from './../delivery-notes.service';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DeliveryNoteCreateDto } from '../dtos/delivery-notes-create.dto';
import { DeliveryNote } from '../entities/delivery-notes-result.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('deliveryNotes')
@Controller('delivery-notes')
export class DeliveryNotesController {
    constructor(
        private readonly deliveryNotesService: DeliveryNotesService,
    ) { }
    @Post()
    async deliveryNoteCreate(@Req() req: Request, @Body() deliveryNoteCreateDto: DeliveryNoteCreateDto) {
        const token = req['token'];

        const response = await this.deliveryNotesService.deliveryNoteCreate(token, deliveryNoteCreateDto);
        if (response?.status === HttpStatus.OK) {
            const deliveryNotes: DeliveryNote = response?.data;
            return deliveryNotes;
        } else {
            throw new HttpException(
                response?.statusText,
                response?.status,
            );
        }
    }
}