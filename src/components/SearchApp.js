import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import { connect } from 'react-redux';

import { fetchList } from '../actions/apiActions';
import MediaCard from './MediaCard';
import categories from '../data/categories.json';

const KEYS_TO_FILTERS = ['nom', 'text'];

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

  componentDidMount() {
      this.props.fetchList();
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
            <div key={value.name}>
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
    const { message } = this.props;
    const categoryData = message.filter(createFilter(this.state.categoryTerm.name, ['etiqueta.nom']));
    const filteredList = categoryData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div>
        <div style={styles.searchBar}>
          {this.renderMenuCategory(this.state.anchorEl)}
          <div style={styles.search}>
            <SearchInput className="search-input" onChange={this.searchUpdated} />
          </div>
        </div>
        <MediaCard
            data={filteredList}
          />
      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }
}


const mapStateToProps = ({ api, user}) => {
  const { message } = api;
  return { message };
};

export default connect(mapStateToProps, { fetchList })(SearchApp);
