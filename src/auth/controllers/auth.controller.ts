import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto } from '../dtos/auth.dto';
import { AuthServices } from './../auth.services';
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { Auth } from '../entities/auth.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authServices: AuthServices
    ) { }

    @ApiBody({ type: AuthDto, })
    @ApiOperation({ summary: 'get token from authentication' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'return token', type: Auth, })
    @Post()
    async authTokenCreate(@Body() authDto: AuthDto) {
        const authResponse = await this.authServices.authTokenCreate(authDto);

        //return result;
        if (authResponse.status === HttpStatus.OK) {
            const auth: Auth = authResponse?.data;
            return auth
        }

        //return result?.data;
        throw new HttpException(
            authResponse.statusText,
            authResponse.status,
        );
    }
}