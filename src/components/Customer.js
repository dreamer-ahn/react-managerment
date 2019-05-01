import React, { Component } from 'react';

class Customer extends Component {
  render() {
    return (
        <div>
            <CustomerProfile
                id={this.props.id}
                image={this.props.image}
                name={this.props.name}
            ></CustomerProfile>
            <CustomerInfo
                birthday={this.props.birthday}
                gender={this.props.gender}
                job={this.props.job}
            ></CustomerInfo>
        </div>
    );
  }
}

class CustomerProfile extends Component {
    render() {
      return (
          <div>
            <img src={this.props.image} alt="profile"></img>
            <h2>{this.props.name}({this.props.id})</h2>
          </div>
      );
    }
}

class CustomerInfo extends Component {
    render() {
      return (
          <div>
            <ul>
                <li>{this.props.birthday}</li>
                <li>{this.props.gender}</li>
                <li>{this.props.job}</li>
            </ul>
          </div>
      );
    }
}

export default Customer;