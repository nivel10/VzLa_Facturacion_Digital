import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { DeliveryNotesController } from './controllers/delivery-notes.controller';

@Module({
    imports: [],
    controllers: [DeliveryNotesController],
    providers: [],
    exports: [],
})
export class DeliveryNotesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'delivery-notes', method: RequestMethod.POST, },
            );
    }
}