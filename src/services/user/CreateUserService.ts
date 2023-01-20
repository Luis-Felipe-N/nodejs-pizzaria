import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface IUserRequest {
    email: string;
    name: string;
    password: string;
}

class CreateUserService {
    async execute({email, name, password}: IUserRequest) {
        if (!email) {
            throw new Error("Email invalid")
        }

        const userAlreadyhExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        
        if (userAlreadyhExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8)
        
        const user =  await prismaClient.user.create({
            data: {
                email: email,
                name: name,
                password: passwordHash,
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        return user
    }
}

export { CreateUserService }