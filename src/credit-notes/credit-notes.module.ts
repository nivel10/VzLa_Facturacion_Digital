import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { CreditNotesController } from './controllers/credit-notes.controller';
import { CreditNotesService } from './credit-notes.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [CreditNotesController],
    providers: [CreditNotesService],
    exports: [],
})
export class CreditNotesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'credit-notes', method: RequestMethod.POST, },
            );
    }
}