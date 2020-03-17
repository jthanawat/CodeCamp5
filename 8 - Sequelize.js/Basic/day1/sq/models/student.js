module.exports = (sequelize, DataTypes) => {
  let student = sequelize.define('student', {
    name: {
      type: DataTypes.STRING(100)
    },
    year: {
      type: DataTypes.INTEGER
    },
    point: {
      type: DataTypes.INTEGER
    }
  })
  // * one-to-one *
  // student.associate = models => {
  //   student.hasOne(models.teacher);
  // }

  // * one-to-many *
  // student.associate = models => {
  //   student.belongsTo(models.teacher);
  // }

  // * many-to-many *
  student.associate = models => {
    student.belongsToMany(models.teacher, { through: 'TeacherStudent' })
  }

  return student;
}