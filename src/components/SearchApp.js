import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import MediaCard from './MediaCard';
import data from '../data/papersData.json';
import categories from '../data/categories.json';

const KEYS_TO_FILTERS = ['title', 'text'];

const styles = {
  searchBar: {
    display: 'flex'
  },
  search: {
    flex: 1
  }
}

class SearchApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: '',
      categoryTerm:
        {
          name: '',
          img: ''
        },
      anchorEl: null
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuItemClick = (event, value) => {
    this.setState({ categoryTerm: value, anchorEl: null });
  };

  renderButtonCategory(category) {
    if (category.name) {
      return (
        <div>
          <ListItemIcon>
            <img alt='' src={category.img} />
          </ListItemIcon>
          {category.name}
        </div>
      );
    } else {
      return (
        'Categories'
      )
    }
  }

  renderMenuCategory(anchorEl) {
    return(
      <div>
        <Button
          raised
          dense
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.renderButtonCategory(this.state.categoryTerm)}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {categories.map(value => (
            <div>
              { value.name ?
              <MenuItem onClick={event => this.handleMenuItemClick(event, value)}>
                <ListItemIcon>
                  <img alt='' src={value.img} />
                </ListItemIcon>
                <ListItemText inset primary={value.name} />
              </MenuItem>
              : <MenuItem onClick={event => this.handleMenuItemClick(event, value)}>
                  <ListItemText primary={'Totes Categories'} />
                </MenuItem> }
            </div>
          ))}
        </Menu>
      </div>
    );
  }

  render () {
    const categoryData = data.filter(createFilter(this.state.categoryTerm.name, ['category']));
    const filteredEmails = categoryData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div>
        <div style={styles.searchBar}>
          {this.renderMenuCategory(this.state.anchorEl)}
          <div style={styles.search}>
            <SearchInput className="search-input" onChange={this.searchUpdated} />
          </div>
        </div>
        <MediaCard data={filteredEmails} />
      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }
}

export default SearchApp;
