// vendor modules
import { Component } from 'react';
import PropTypes from 'prop-types';
// utils
import { getEventPath, getDataAttribute } from 'helpers/index';

export const disableClickOutsideAttributeName = 'data-disable-click-outside';
export const disableClickOutsideAttr = {
  [disableClickOutsideAttributeName]: true,
};
export const disableClickOutsidePropName = 'disableClickOutside';

class OnClickOutside extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onClickOutside: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClick, true);
  }

  storeRef = ref => {
    this.ref = ref;
  };

  isClickOutside = event => {
    const eventPath = getEventPath(event);

    return (
      !eventPath.some(node => {
        return getDataAttribute(
          node,
          disableClickOutsidePropName,
          disableClickOutsideAttributeName,
        );
      }) &&
      eventPath.findIndex(node => {
        return node === this.ref;
      }) === -1
    );
  };

  onClick = event => {
    if (this.isClickOutside(event)) {
      this.props.onClickOutside(event);
    }
  };

  render() {
    return this.props.children({
      storeRef: this.storeRef,
    });
  }
}

export default OnClickOutside;
