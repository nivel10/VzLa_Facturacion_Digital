import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { PartialCreditNoteController } from './controllers/partial-credit-note.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [PartialCreditNoteController],
    providers: [],
    exports: [],
})
export class PartialCreditNoteModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'partial-credit-notes', method: RequestMethod.POST, },
            );
    }
}