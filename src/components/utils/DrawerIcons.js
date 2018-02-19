import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MailIcon from 'material-ui-icons/Mail';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import FavoriteIcon from 'material-ui-icons/Favorite';
import HelpIcon from 'material-ui-icons/Help';
import HomeIcon from 'material-ui-icons/Home';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import Badge from 'material-ui/Badge';
import Divider from 'material-ui/Divider';

const DrawerIcons = (props) => {
  return (
    <div>
      <Divider />
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon style={{ color: "#ebf9d6" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/preferits">
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon style={{ color: "#ebf9d6" }} />
          </ListItemIcon>
          <ListItemText primary="Favorite" />
        </ListItem>
      </Link>
      <Link to="/cart">
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={props.cart.length} color="primary">
              <ShoppingCartIcon style={{ color: "#ebf9d6" }} />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
      </Link>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MailIcon style={{ color: "#ebf9d6" }} />
        </ListItemIcon>
        <ListItemText primary="All mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HelpIcon style={{ color: "#ebf9d6" }} />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactMailIcon style={{ color: "#ebf9d6" }} />
        </ListItemIcon>
        <ListItemText primary="Invite" />
      </ListItem>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  cart: user.cart,
  ts: user.ts,
});

export default connect(mapStateToProps, null)(DrawerIcons);
