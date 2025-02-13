import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { BanksController } from './controllers/banks.controller';
import { HttpModule } from '@nestjs/axios';
import { BanksService } from './banks.service';

@Module({
    imports: [HttpModule],
    controllers: [BanksController],
    providers: [BanksService],
    exports: [],
})
export class BanksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'banks', method: RequestMethod.GET },
            );
    }
}