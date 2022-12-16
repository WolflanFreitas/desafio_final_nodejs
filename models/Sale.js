import Sequelize from 'sequelize';
import database from '../config/config';
import User from './User';
import Book from './Book';

const Sale = database.define('sale', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: Sequelize.FLOAT(10,2),
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
    }
});

Sale.belongsTo(Book);
Sale.belongsTo(User);

export default Sale;