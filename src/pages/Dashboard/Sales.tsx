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
  sale_id: Number;
  sale_price_per_product: Number;
  payment_date: Date;
  sale_date: Date;
  product_amount: Number;
  product_name: string;
  product_description: string;
  product_price: Number;
  sale_total: Number;
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
  const [sales, setSales] = useState<DataType[]>([]);

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      const username = localStorage.getItem('@Perithus:username');
      await api.get(`vendas/listar-vendas/${username}`).then((response) => {
        setSales(response.data);
      });
    }

    loadOrders();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Vendas Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Número do Pedido</TableCell>
            <TableCell>Nome do Produto</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Preço de Compra</TableCell>
            <TableCell>Preço de Venda</TableCell>
            <TableCell align="right">Valor Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.sale_id}</TableCell>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.product_amount}</TableCell>
              <TableCell>{row.sale_price_per_product}</TableCell>
              <TableCell>{formatCurrency(Number(row.product_price))}</TableCell>
              <TableCell align="right">
                {formatCurrency(Number(row.sale_total))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Veja mais vendas
        </Link>
      </div>
    </React.Fragment>
  );
}
