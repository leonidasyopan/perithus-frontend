import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

interface DataType {
  id: Number;
  date: string;
  name: string;
  shipTo: string;
  paymentMethod: string;
  amount: Number;
}

// Generate Order Data
function createData({
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount,
}: DataType) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData({
    id: 0,
    date: '2020-05-05',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44,
  }),
  createData({
    id: 0,
    date: '2020-05-05',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44,
  }),
  createData({
    id: 0,
    date: '2020-05-05',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44,
  }),
  createData({
    id: 0,
    date: '2020-05-05',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44,
  }),
  createData({
    id: 0,
    date: '2020-05-05',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44,
  }),
];

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
