import {Router} from "express";

const router = Router();
//renderiza vist de handlebars
router.get('/', (req, res) => {
    res.render('index');
});

export default router;