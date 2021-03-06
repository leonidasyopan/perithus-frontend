import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';

// Material UI imports
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

interface DataType {
  order_id: Number;
  order_payment: Boolean;
  payment_date: Date;
  order_date: Date;
  product_amount: Number;
  product_name: string;
  product_description: string;
  product_price: Number;
  order_total: Number;
}

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const [orders, setOrders] = useState<DataType[]>([]);
  console.log(orders);

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      const username = localStorage.getItem('@Perithus:username');
      console.log(username);
      console.log(`username: ${username}`);
      await api.get(`pedidos/listar-pedidos/${username}`).then((response) => {
        console.log(response);

        setOrders(response.data);
      });
    }

    loadOrders();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Pedidos Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Número do Pedido</TableCell>
            <TableCell>Nome do Produto</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align="right">Valor Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.order_id}</TableCell>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.product_amount}</TableCell>
              <TableCell>{formatCurrency(Number(row.product_price))}</TableCell>
              <TableCell align="right">
                {formatCurrency(Number(row.order_total))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais pedidos
        </Link>
      </div>
    </React.Fragment>
  );
}
