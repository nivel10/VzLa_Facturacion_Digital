import { Request } from 'express';
import { TaxDocumentsService } from './../tax-documents.service';
import { Controller, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { TaxDocumentsResultEntity } from '../entities/tax-documents-resultentity';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('taxDocuments')
@Controller('tax-documents')
export class TaxDocumentsController {
    constructor(
        private readonly taxDocumentsService: TaxDocumentsService,
    ) { }

    //@ApiBody({type: taxDocumentDto})
    @ApiBearerAuth()
    @ApiOperation({ summary: 'get all tax documents' })
    @ApiResponse({ status: HttpStatus.OK, description: 'return tax documents', type: TaxDocumentsResultEntity })
    @Get()
    async taxDocumentsGet(@Req() req: Request) {
        const token: string = req['token'];

        const response: AxiosResponse = await this.taxDocumentsService.taxDocumentsGet(token)
        if (response?.status === HttpStatus.OK) {
            let taxDocuments: TaxDocumentsResultEntity = response?.data;
            return taxDocuments;
        } else {
            switch (response?.status) {
                case HttpStatus.NOT_FOUND:
                    if (response.statusText === 'Not Found') {
                        throw new HttpException(
                            response?.data?.message || 'Tax documents not found',
                            HttpStatus.OK,
                        );
                    } else {
                        throw new HttpException(
                            response.statusText,
                            response.status,
                        );
                    }
                default:
                    throw new HttpException(
                        response.statusText,
                        response.status,
                    );
            }
        }
    }
}