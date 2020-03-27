import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <h1> this is resume page </h1>
        <Link to="/"> Homepage </Link>
        <Link to="/resume"> Resume page </Link>
        <Link to="/app"> App </Link>
        <Link to="/facebook"> Facebook </Link>
      </div>
    )
  }
}
