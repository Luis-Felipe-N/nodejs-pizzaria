import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle( req: Request, res: Response) {
        // const { } = req.body

        const detailuserservice = new DetailUserService()

        const user = await detailuserservice.execute()

        console.log('aquiiiiiiiii')

        return res.json(user)
    }
}

export { DetailUserController }