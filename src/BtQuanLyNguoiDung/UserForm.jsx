import React, { Component } from "react";
import axios from "axios";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        username: "",
        pass: "",
        mail: "",
        name: "",
        phone: "",
        type: "",
      },
    };
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;

    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const {id,...payload} = this.state.values;
    try {
      if(id){
        await axios.put(
          `https://62ea45d7ad29546325887308.mockapi.io/users/${id}`,
          payload
        );

      } else{

      
      await axios.post(
        "https://62ea45d7ad29546325887308.mockapi.io/users",
        payload
      );}
      this.setState({
        values: {
          username: "",
          pass: "",
          mail: "",
          name: "",
          phone: "",
          type: "",
        },
      });
      this.props.onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user && this.props.user !== prevProps.user) {
      this.setState({ values: { ...this.props.user } });
    }
  }
  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Tài Khoản
              </label>
              <input
                id="username"
                className="form-control"
                value={values.username}
                name="username"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                Mật Khẩu
              </label>
              <input
                id="pass"
                className="form-control"
                value={values.pass}
                name="pass"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mail" className="form-label">
                Email
              </label>
              <input
                id="mail"
                className="form-control"
                value={values.mail}
                name="mail"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Họ Tên
              </label>
              <input
                id="name"
                className="form-control"
                value={values.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Số Điện Thoại
              </label>
              <input
                id="phone"
                className="form-control"
                value={values.phone}
                name="phone"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Chọn loại người dùng
              </label>
              <select
                className="form-select"
                id="type"
                value={values.type}
                name="type"
                onChange={this.handleChange}
                aria-label="Floating label select example"
              >
                <option>Chọn loại người dùng</option>
                <option value="Khách hàng">Khách Hàng</option>
                <option value="Nhân Viên">Nhân Viên</option>
              </select>
            </div>
          </div>
        </div>

        <button className="btn btn-success me-2">Submit</button>
        
      </form>
    );
  }
}
