import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { BanksService } from '../banks.service';
import { Request } from 'express';
import { BankResult } from '../entities/bank-result.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('banks')
@Controller('banks')
export class BanksController {
    constructor(
        private readonly banksService: BanksService,
    ) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'get all banks' })
    @ApiResponse({ status: HttpStatus.OK, description: 'return banks', type: [BankResult] })
    @Get()
    async banksGet(@Req() req: Request) {
        const token: string = req['token'];
        const response = await this.banksService.banksGet(token);

        if (response?.status === HttpStatus.OK) {
            let result: BankResult = response?.data;
            return result;
        } else {
            throw new HttpException(
                {
                    message: response?.statusText || 'Error getting banks',
                },
                response?.status || HttpStatus.BAD_REQUEST,
            );
        }
    }
}