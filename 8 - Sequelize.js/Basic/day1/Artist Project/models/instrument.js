module.exports = (sequelize, DataTypes) => {
  // CREATE MODEL for communication and be table names
  const instrument = sequelize.define('instrument', {
    // Attribute
    name: {
      type: DataTypes.STRING
    }
  })

  instrument.associate = models => {
    instrument.belongsToMany(models.artist, { through: models.play })
    instrument.belongsToMany(models.song, { through: 'instrumentSong' })
  }

  return instrument;
}