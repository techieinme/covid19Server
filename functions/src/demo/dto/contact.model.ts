import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Contact {
    @IsString({ message: 'Provide a first name.' })
    @IsNotEmpty()
    readonly firstName: string;

    @IsString({ message: 'Provide a last name.' })
    @IsNotEmpty()
    readonly lastName: string;

    @IsEmail({}, { message: 'Invalid email address' })
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsOptional()
    readonly id?: string;
}