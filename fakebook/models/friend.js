module.exports = (sequelize, DataTypes) => {
  let friend = sequelize.define('friend', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.ENUM('request', 'friend')
    }
  })
  return friend;
}