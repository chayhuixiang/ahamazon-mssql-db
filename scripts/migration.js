const { sequelize } = require('../models');


const main = async () => {
  try {
    await sequelize.sync();
  }
  catch (error) {
    console.error(error)
  }
};

main();
