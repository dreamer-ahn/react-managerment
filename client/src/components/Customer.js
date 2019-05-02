import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends Component {
  render() {
    return (
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell>{this.props.birthday}</TableCell>
            <TableCell>{this.props.gender}</TableCell>
            <TableCell>{this.props.job}</TableCell>
        </TableRow>
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