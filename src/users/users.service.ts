import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = ['User1', 'User2', 'User3'];

    findAll() {
        return this.users;
    }
}
