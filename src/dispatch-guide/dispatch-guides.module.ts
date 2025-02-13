import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { DispatchGuideController } from './controllers/dispatch-guides.controller';
import { CommoTokenMiddleware } from 'src/common/middlewares/common-token.middleware';
import { HttpModule } from '@nestjs/axios';
import { DispatchGuideService } from './dispatch-guides.service';

@Module({
    imports: [HttpModule],
    controllers: [DispatchGuideController],
    providers: [DispatchGuideService],
    exports: [],
})
export class DispatchGuideModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CommoTokenMiddleware)
            .forRoutes(
                { path: 'dispatch-guide', method: RequestMethod.POST, },
            )
    }
}