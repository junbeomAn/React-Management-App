import React, { Component } from "react";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Typography
} from "@material-ui/core";

export default class CustomerDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  deleteCustomer = id => {
    // /api/customer/7
    const url = `/api/customer/${id}`;
    axios.delete(url).then(res => {
      console.log(res);
      this.props.stateRefresh();
    });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          삭제
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>삭제경고</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={e => this.deleteCustomer(this.props.id)}
            >
              삭제
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
