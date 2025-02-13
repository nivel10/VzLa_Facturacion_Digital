import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { PaymentMethodsController } from './controllers/payment-methods.controller';
import { HttpModule } from '@nestjs/axios';
import { PaymentMethodsService } from './payment-methods.service';

@Module({
    imports: [HttpModule],
    controllers: [PaymentMethodsController],
    providers: [PaymentMethodsService],
    exports: [],
})
export class PaymentMethodsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'payment-methods', method: RequestMethod.GET },
            );
    }
}