import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdShowChart,
  MdLayers,
  MdAssignment,
} from 'react-icons/md';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MdDashboard />
      </ListItemIcon>
      <ListItemText primary="Painel de Controle" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MdShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MdPeople />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MdShowChart />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MdLayers />
      </ListItemIcon>
      <ListItemText primary="Integrações" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Informações Adicionar</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <MdAssignment />
      </ListItemIcon>
      <ListItemText primary="Mês atual" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MdAssignment />
      </ListItemIcon>
      <ListItemText primary="Último trimestre" />
    </ListItem>
  </div>
);
