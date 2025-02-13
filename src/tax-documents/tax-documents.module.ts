import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TaxDocumentsController } from './controllers/tax-documents.controller';
import { TaxDocumentsService } from './tax-documents.service';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';

@Module({
    imports: [HttpModule],
    controllers: [TaxDocumentsController],
    providers: [TaxDocumentsService],
    exports: [],
})
export class TaxDocumentsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'tax-documents', method: RequestMethod.GET, },
            );
    }
}