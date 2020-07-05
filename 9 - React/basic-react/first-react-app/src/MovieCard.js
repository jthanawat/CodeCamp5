import React from 'react'

const MovieCard = (props) => {
  const {pic, title, content} = props

  return (
    <div style={{ width: "300px", backgroundColor: "grey" }}>
      <div style={{ backgroundColor: "wheat", height: "180px" }}> <img src={pic} style={{height: "200px", width: "100%" }} /> </div>
      <div>
        <h3> {title} </h3>
        <p> {content} </p>
      </div>
      <div> card footer</div>
    </div>
  )
}

export default MovieCard
