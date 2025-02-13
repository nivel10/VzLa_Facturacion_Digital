import { AuthDto } from '../dtos/auth.dto';
import { AuthServices } from './../auth.services';
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authServices: AuthServices
    ) { }

    @Post()
    async authTokenCreate(@Body() authDto: AuthDto) {
        const authResponse = await this.authServices.authTokenCreate(authDto);

        //return result;
        if(authResponse.status === HttpStatus.OK){
            return authResponse?.data;    
        }

        //return result?.data;
        throw new HttpException(
            authResponse.statusText,
            authResponse.status,
        );
    }
}