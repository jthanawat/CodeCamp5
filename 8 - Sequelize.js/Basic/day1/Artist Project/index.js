const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
// const { Op } = require("sequelize");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// start to add body to table not foreign key by sequence
app.post('/add-artist', async function (req, res) {
  const newAddress = await db.address.create({ addr: req.body.addr })

  const newArtist = await db.artist.create({
    name: req.body.name, phone_number: req.body.phoneNO,
    addressID: newAddress.id
  })
  
  const newAlbum = await db.album.create({
    name: req.body.album.name,
    release_date: req.body.release_date,
    artistID: newArtist.id
  })
  
  const newSong = await db.song.create ({
    name: req.body.song.name,
    albumId: newAlbum.id,
    artistId: newArtist.id
  })

  console.log(req.body);
  res.send(newAddress, newArtist, newAlbum, newSong)
})
  
  // Sync database models
  db.sequelize.sync().then(() => {
    app.listen(8003, () => {
      console.log("Server is running on port 8003");
  })
})
