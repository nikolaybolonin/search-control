// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
// components
import ListItem from './ListItem';
// ui
import { DropdownContainer, ScrollContainer } from 'ui/Search/DropdownList';

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
  onSelect: PropTypes.func,
};

const defaultprops = {
  data: [],
  query: '',
  active: false,
  onSelect: noop,
};

function DropdownList({ data, query, active, onSelect }) {
  if (!data.length) {
    return null;
  }

  const filteredData = data.filter(({ title }) =>
    title.toUpperCase().includes(query.toUpperCase()),
  );

  return (
    <DropdownContainer
      active={active && filteredData.length}
      data={filteredData}
    >
      <ScrollContainer>
        {filteredData.map(({ id, title, url }) => (
          <ListItem key={id} {...{ title, url, onSelect }} />
        ))}
      </ScrollContainer>
    </DropdownContainer>
  );
}

DropdownList.propTypes = proptypes;
DropdownList.defaultProps = defaultprops;

export default DropdownList;
