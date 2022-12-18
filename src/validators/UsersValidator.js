import {check, validationResult} from "express-validator";

class UsersValidator {
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
            check('password')
                .trim()
                .not()
                .isEmpty()
                .withMessage('Password can not be empty!')
                .bail()
                .isLength({min: 8})
                .withMessage('Minimum 8 characters required!')
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
            check('address')
                .trim()
                .escape()
                .not()
                .isEmpty()
                .withMessage('address can not be empty!')
                .bail()
                .isLength({min: 3})
                .withMessage('Minimum 3 characters required!')
                .bail(),
            (req, res, next) => {
                const errors = validationResult(req);
                console.log(errors);
                if (!errors.isEmpty())
                return res.status(422).json({errors: errors.array()});
                next();
            },
        ];
    }
}

export default new UsersValidator();