module.exports = (sequelize, DataTypes) => {
  let teacher = sequelize.define('teacher', {
    name: {
      type: DataTypes.STRING(100)
    },
    age: {
      type: DataTypes.INTEGER
    }



  })
  // * one-to-one *
  // teacher.associate = models => {
  //   teacher.belongsTo(models.student)
  // }

  // * one-to-many *
  // teacher.associate = models => {
  //   teacher.hasMany(models.student)
  // }

  // * many-to-many *
  teacher.associate = models => {
    teacher.belongsToMany(models.student, { through: 'TeacherStudent' })
  }

  return teacher;
}