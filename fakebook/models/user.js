module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING(100)
    },
    username: {
      type: DataTypes.STRING(100),
      unique: true
    },
    profile_display: {
      type: DataTypes.STRING(500)
    },
    password: {
      type: DataTypes.STRING(200)
    }
  })

  user.associate = models => {
    user.hasMany(models.post);
    user.hasMany(models.comment);
    user.belongsToMany(models.user, {
      through: models.friend,
      as: 'request_to', // for query
      foreignKey: 'request_to_id'
    });
    user.belongsToMany(models.user, {
      through: models.friend,
      as: 'request_from', // for query
      foreignKey: 'request_from_id'
    });
  }

  return user;
}