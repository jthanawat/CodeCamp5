exports.addFiveFromId = function (req, res) {
  res.send(`${Number(req.params.id) + 5}`)
}