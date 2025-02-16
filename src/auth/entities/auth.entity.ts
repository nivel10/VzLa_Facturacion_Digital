import { ApiProperty } from '@nestjs/swagger';

export class Auth {
    @ApiProperty({ example: true, })
    success: boolean;

    @ApiProperty({ example: 'Token de Acceso' })
    message: string;

    @ApiProperty({ example: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...', })
    token: string;
} 