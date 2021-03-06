import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MailIcon from 'material-ui-icons/Mail';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import FavoriteIcon from 'material-ui-icons/Favorite';
import HelpIcon from 'material-ui-icons/Help';
import HomeIcon from 'material-ui-icons/Home';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import Badge from 'material-ui/Badge';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Favorite" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Badge badgeContent={'?'} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </ListItemIcon>
      <ListItemText primary="Cart" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactMailIcon />
      </ListItemIcon>
      <ListItemText primary="Invite" />
    </ListItem>
  </div>
);
