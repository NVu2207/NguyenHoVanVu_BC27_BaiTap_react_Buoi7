import React, { Component } from "react";
import axios from "axios";

export default class UserList extends Component {
  handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://62ea45d7ad29546325887308.mockapi.io/users/${userId}`
      );
      this.props.onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { users } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài Khoản</th>
            <th>Họ Tên</th>
            <th>Mật Khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.pass}</td>
                <td>{user.mail}</td>
                <td>{user.phone}</td>
                <td>{user.type}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => this.props.onSelectUser(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.handleDelete(user.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
