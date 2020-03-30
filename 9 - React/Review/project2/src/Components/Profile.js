import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        {/* {} for dynamic props in page
        this.props.name will show all .name */}
        My name is {this.props.name} , I'm {this.props.age} years old.
        <br />

        {this.props.children}
        
      </div>
    )
  }
}


export default Profile