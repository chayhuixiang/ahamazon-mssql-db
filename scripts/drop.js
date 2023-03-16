const { sequelize } = require('../models');

;
(async () => {
  try {
    await sequelize.drop()
  }
  catch (error) {
    console.error(error)
  }
})()

