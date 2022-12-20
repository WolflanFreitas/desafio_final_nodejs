import {check, validationResult} from "express-validator";

class AuthorsValidator {

    create () {
        return [
            check('name')
                .trim()
                .escape()
                .not()
                .isEmpty()
                .withMessage('User name can not be empty!')
                .bail()
                .isLength({min: 3})
                .withMessage('Minimum 3 characters required!')
                .bail(),
            check('email')
                .trim()
                .normalizeEmail()
                .not()
                .isEmpty()
                .withMessage('Email can not be empty!')
                .bail()
                .isEmail()
                .withMessage('Invalid email address!')
                .bail(),
            check('phone')
                .trim()
                .escape()
                .not()
                .isEmpty()
                .withMessage('Phone can not be empty!')
                .bail()
                .isLength({min: 13})
                .withMessage('Minimum 13 characters required, format: XX XXXXX-XXXX!')
                .bail(),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty())
                return res.status(422).json({errors: errors.array()});
                next();
            },
        ];
    }
}

export default new AuthorsValidator();