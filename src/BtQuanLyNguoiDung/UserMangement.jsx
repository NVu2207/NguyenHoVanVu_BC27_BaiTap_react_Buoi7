import React, { Component } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: null,
    };
  }

  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://62ea45d7ad29546325887308.mockapi.io/users"
      );

      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserDetails = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://62ea45d7ad29546325887308.mockapi.io/users/${userId}`
      );
      this.setState({ selectedUser: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">User Management</h1>
        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>User Form</strong>
          </div>
          <div className="card-body">
            <UserForm
              user = {this.state.selectedUser}
              onSuccess={this.fetchUsers}
              
            />
          </div>
        </div>
        <UserList 
        users={this.state.users}
        onSelectUser={this.fetchUserDetails}
        onDeleteSuccess={this.fetchUsers}

        />
      </div>
    );
  }
}
