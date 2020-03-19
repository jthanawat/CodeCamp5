module.exports = (sequelize, DataTypes) => {
  let comment = sequelize.define('comment', {
    message: {
      type: DataTypes.STRING(255)
    }
  })

  comment.associate = models => {
    comment.belongsTo(models.post);
    comment.belongsTo(models.user);
  }

  return comment;
}