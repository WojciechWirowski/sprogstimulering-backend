import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) {}

    async findUser(username: string): Promise<User | undefined> {
        return this.userRepo.findOneBy({username:username})
    }

    async create(user: any) {
        const salt = await bcrypt.genSalt(10);

        const hashedPass = await bcrypt.hash(user.password, salt)

        const entity = {username: user.username, password: hashedPass}

        return this.userRepo.save(entity)
    }
}
