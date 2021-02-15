// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// ui
import { DropdownContainer, ListItem } from 'ui/Search/DropdownList';
import { PrefixIcon } from 'ui/Search/Input';
import { RepoIcon } from 'ui/icons';

const proptypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  query: PropTypes.string,
  active: PropTypes.bool,
};

const defaultprops = {
  data: [],
  query: '',
  active: false,
};

function DropdownList({ data, query, active }) {
  if (!data.length) {
    return null;
  }

  const filteredData = data.filter(({ title }) => title.includes(query));

  return (
    <DropdownContainer
      active={active && filteredData.length}
      data={filteredData}
    >
      {filteredData.map(({ id, title, url }) => (
        <ListItem key={id}>
          <PrefixIcon>
            <RepoIcon />
          </PrefixIcon>
          {title}
        </ListItem>
      ))}
    </DropdownContainer>
  );
}

DropdownList.propTypes = proptypes;
DropdownList.defaultProps = defaultprops;

export default DropdownList;
