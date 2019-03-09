import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  withStyles
} from "@material-ui/core";


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
})

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "kim gil dong",
    birthday: "940902",
    gender: "male",
    job: "architect"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "hong gil dong",
    birthday: "960303",
    gender: "male",
    job: "programmer"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "buenos dias",
    birthday: "740524",
    gender: "female",
    job: "skater"
  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map(c => (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
