import React, { Component } from 'react'
import MovieCard from '../src/MovieCard'
import '../src/Clicker.css'



class Clicker extends React.Component {
  state = {
    value: 0,
    card: [
      {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-hmcawJ31r4XV3f2v8Cte0wgtQnkdRsI_g&usqp=CAU",
        title: "card1",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non distinctio, nihil ad odio tenetur iste ut accusantium sint voluptas?",
      },
      {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-hmcawJ31r4XV3f2v8Cte0wgtQnkdRsI_g&usqp=CAU",
        title: "card2",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non distinctio, nihil ad odio tenetur iste ut accusantium sint voluptas?",
      },
      {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-hmcawJ31r4XV3f2v8Cte0wgtQnkdRsI_g&usqp=CAU",
        title: "card3",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non distinctio, nihil ad odio tenetur iste ut accusantium sint voluptas?",
      },
      {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-hmcawJ31r4XV3f2v8Cte0wgtQnkdRsI_g&usqp=CAU",
        title: "card4",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non distinctio, nihil ad odio tenetur iste ut accusantium sint voluptas?",
      },
      {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-hmcawJ31r4XV3f2v8Cte0wgtQnkdRsI_g&usqp=CAU",
        title: "card5",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non distinctio, nihil ad odio tenetur iste ut accusantium sint voluptas?",
      }
    ]
  }

  render() {
    const card = this.state.card

    return (
      <div className="Clicker">
        <div className="container_clicker">
          <div className="number"> {this.state.value} </div>
          <div className="buttonContainer">
            <button onClick={() => this.setState({ value: this.state.value + 1 })}> Add </button>
            <button onClick={() => this.setState({ value: 0 })}> Reset </button>
            <button onClick={() => this.setState({ value: this.state.value - 1 })}> Subtract </button>
          </div>
        </div>
        <div className="container_card">
          <div className="navbar"></div>
          <div className="card">
            

            {card.map( obj => <MovieCard pic= {obj.pic} title= {obj.title} content= {obj.content} />)}
          </div>


        </div>
      </div>
    )
  }
}

export default Clicker
