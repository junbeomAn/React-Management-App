import React, { Component } from 'react'
import axios from 'axios';

export default class CustomerDelete extends Component {

  deleteCustomer = (id) => {
    // /api/customer/7
    const url = `/api/customer/${id}`
    axios.delete(url)
    .then(res => {
      console.log(res);
      this.props.stateRefresh();
    })
    

  }

  render() {
    return (
      <button onClick={(e) => { this.deleteCustomer(this.props.id)}}>
        삭제
      </button>
    )
  }
}
