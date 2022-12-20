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
            check('value')
                .trim()
                .not()
                .isEmpty()
                .withMessage('Value can not be empty!')
                .bail()
                .isDecimal()
                .withMessage('Invalid number format, decimal required!')
                .bail(),
            check('quantity')
                .trim()
                .escape()
                .not()
                .isEmpty()
                .withMessage('Quantity can not be empty!')
                .bail()
                .isNumeric()
                .withMessage("Number format is required!")
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