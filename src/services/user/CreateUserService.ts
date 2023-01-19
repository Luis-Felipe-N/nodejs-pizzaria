import prismaClient from "../../prisma";

interface IUserRequest {
    name: string;
    email: string;
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
        
        const user =  await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            }
        })

        return user
    }
}