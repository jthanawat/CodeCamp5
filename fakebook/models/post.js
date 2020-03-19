module.exports = (sequelize, DataTypes) => {
  let post = sequelize.define('post', {
    text: {
      type: DataTypes.STRING(255)
    },
    picture: {
      type: DataTypes.STRING(500)
    },
    timeStamp: {
      type: DataTypes.DATE
    }
  },{
    timestamps: false,  // NO createdAt, updatedAt
    freezeTableName: true  // NO 's' in table name
  })

  post.associate = models => {
    post.belongsTo(models.user);
    post.hasMany(models.comment);
  }

  return post;
}