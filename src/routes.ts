import { Request, Response, Router } from "express"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated"

const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/me', isAuthenticated, new DetailUserController().handle)

export { router }