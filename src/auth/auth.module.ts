import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthServices } from './auth.services';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [AuthController],
    providers: [AuthServices],
})
export class AuthModule {

}