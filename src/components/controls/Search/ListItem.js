// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
// ui
import { ListItem as ItemContainer } from 'ui/Search/DropdownList';
import { PrefixIcon } from 'ui/Search/Input';
import { RepoIcon } from 'ui/icons';

const proptypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

const defaultprops = {
  onSelect: noop,
};

function ListItem({ title, url, onSelect }) {
  const onItemClick = () => {
    // close dropdown on select
    // onSelect();
  };

  return (
    <ItemContainer onClick={onItemClick}>
      <PrefixIcon>
        <RepoIcon />
      </PrefixIcon>
      {title}
    </ItemContainer>
  );
}

ListItem.propTypes = proptypes;
ListItem.defaultProps = defaultprops;

export default ListItem;
