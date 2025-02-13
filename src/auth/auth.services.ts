import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Auth } from './entities/auth.entity';
import { AuthDto } from './dtos/auth.dto';

@Injectable()
export class AuthServices {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async authTokenCreate(authDto: AuthDto): Promise<AxiosResponse<Auth>> {
        try {
            //console.log(Configuration.appToken)
            const apiUrl = `${process?.env?.APP_API_URL_DEV}${process?.env?.APP_API_URL_PREFIX}/create_token_authenticator`;
            const apiData = {
                //"userName": process?.env?.APP_API_USER_NAME,
                //"userPassword": process?.env?.APP_API_USER_PASSWORD,
                "userName": authDto.email,
                "userPassword": authDto.password,
            };

            //const { data } = await firstValueFrom(
            const authResponse = await firstValueFrom(
                this.httpService.post(
                    apiUrl,
                    apiData,
                )
            );

            // if (authResponse.status === HttpStatus.OK) {
            //     Configuration.appToken = authResponse?.data?.token;
            // }

            return authResponse;
            //return result?.data;   
        } catch (ex) {
            switch (ex.status) {
                case HttpStatus.UNAUTHORIZED:
                    throw new HttpException(
                        'Email or password incorrect',
                        HttpStatus.UNAUTHORIZED,
                    );
                //break;
                default:
                    throw new HttpException(
                        ex?.message,
                        ex?.status || HttpStatus.BAD_REQUEST,
                    )
                    //break;
            }
        }
    }
}