import { DispatchGuideService } from '../dispatch-guides.service';
import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { DisptachGuideCreateDto } from '../dtos/dispatch-guide-create.dto';
import { DispatchGuideResult } from '../entities/dispatch-guide-result.entity';
import { ApiBearerAuth, ApiGoneResponse, ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('dispatchGuides')
@Controller('dispatch-guides')
export class DispatchGuideController {
    constructor(
        private readonly dispatchGuideService: DispatchGuideService,
    ) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'create dispatch guide / guides' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'return dispatch guide / guides created', type: [DispatchGuideResult], })
    @Post()
    async dispatchGuideCreate(@Req() req: Request, @Body() dispatchGuideCreateDto: DisptachGuideCreateDto) {
        try {
            const token = req['token'];
            const response = await this.dispatchGuideService.dispatchGuideCreate(token, dispatchGuideCreateDto);
            if (response?.status === HttpStatus.OK) {
                const dispatchGuide: DispatchGuideResult = response?.data;
                return dispatchGuide;
            }

            return response.data;
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