import { User } from './type';
export class UserModel {
    private users: Array<User> = [
        new User('001', 'test', 'test'),
        new User('002', 'test1', 'test1')
    ];
    constructor() {
    }

    async find(username: string, password: string): Promise<User> {
        //TODO: find from batabase
        const user = this.users.find(
            user => user.username === username && user.password === password
        );
        return user;
    }
}
