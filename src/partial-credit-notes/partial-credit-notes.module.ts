import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { PartialCreditNotesController } from './controllers/partial-credit-note.controller';
import { HttpModule } from '@nestjs/axios';
import { PartialCreditNotesService } from './partial-credit-notes.services';

@Module({
    imports: [HttpModule],
    controllers: [PartialCreditNotesController],
    providers: [PartialCreditNotesService],
    exports: [],
})
export class PartialCreditNotesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'partial-credit-notes', method: RequestMethod.POST, },
            );
    }
}