import { Request, Response, Router } from "express"

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({
        mensagem: 'Ta deboassa'
    })
})

export { router }