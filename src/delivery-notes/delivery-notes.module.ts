import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { DeliveryNotesController } from './controllers/delivery-notes.controller';
import { DeliveryNotesService } from './delivery-notes.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [DeliveryNotesController],
    providers: [DeliveryNotesService],
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