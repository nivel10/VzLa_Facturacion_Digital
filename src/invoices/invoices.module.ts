import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { InvoicesController } from './controllers/invoices.controller';
import { InvoicesService } from './invoices.services';
import { HttpModule } from '@nestjs/axios';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';

@Module({
    imports: [HttpModule],
    controllers: [InvoicesController],
    providers: [InvoicesService,],
})
export class InvoicesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'invoices', method: RequestMethod.POST, },
                //{ path: 'invoices', method: RequestMethod.GET, }
            );
    }
}