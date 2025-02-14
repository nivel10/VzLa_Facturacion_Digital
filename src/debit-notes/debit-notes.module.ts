import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { DebitNoteController } from './controllers/debit-notes.controller';
import { HttpModule } from '@nestjs/axios';
import { DebitNotesServices } from './debit-notes.service';

@Module({
    imports: [HttpModule],
    controllers: [DebitNoteController],
    providers: [DebitNotesServices],
    exports: [],
})
export class DebitNotesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'debit-notes', method: RequestMethod.POST, },
            );
    }
}