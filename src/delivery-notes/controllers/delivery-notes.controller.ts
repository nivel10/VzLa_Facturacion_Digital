import { DeliveryNotesService } from './../delivery-notes.service';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DeliveryNoteCreateDto } from '../dtos/delivery-notes-create.dto';
import { DeliveryNoteResult } from '../entities/delivery-notes-result.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('deliveryNotes')
@Controller('delivery-notes')
export class DeliveryNotesController {
    constructor(
        private readonly deliveryNotesService: DeliveryNotesService,
    ) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'create delivery notes' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'return delivery note / notes created', type: DeliveryNoteResult })
    @Post()
    async deliveryNoteCreate(@Req() req: Request, @Body() deliveryNoteCreateDto: DeliveryNoteCreateDto) {
        const token = req['token'];

        const response = await this.deliveryNotesService.deliveryNoteCreate(token, deliveryNoteCreateDto);
        if (response?.status === HttpStatus.OK) {
            const deliveryNotes: DeliveryNoteResult = response?.data;
            return deliveryNotes;
        } else {
            throw new HttpException(
                response?.statusText,
                response?.status,
            );
        }
    }
}