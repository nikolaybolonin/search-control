// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// utils
import { getReposForSearch } from 'store/selectors/dataSelectors';
import { fetchRepos } from 'store/actions/data';
// components
import DropdownList from './DropdownList';
import OnClickOutside from 'components/helpers/OnClickOutside';
// ui
import {
  InputContainer,
  Input,
  PrefixIcon,
  CrossButton,
  LoadingIcon,
} from 'ui/Search/Input';
import { SearchIcon, CloseIcon, SpinnerIcon } from 'ui/icons';

@connect(
  state => ({
    repos: getReposForSearch(state),
  }),
  {
    fetchRepos,
  },
)
export default class Search extends Component {
  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.string).isRequired,

    fetchRepos: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isLoading: false,
    };

    this.input = null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoading, text } = this.state;
    if (!prevState.isLoading && isLoading && !this.props.repos.length) {
      this.props.fetchRepos(text);
    }

    if (isLoading && this.props.repos.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isLoading: false });
    }
  }

  focusInput = () => {
    if (this.input) {
      setTimeout(() => {
        this.input.focus();
        this.input.value = this.state.text;
      });
    }
  };

  storeInputRef = ref => {
    this.input = ref;
  };

  onChange = e => {
    this.setState(({ isLoading }) => ({
      text: e.target.value,
      isLoading:
        isLoading || (e.target.value.length > 1 && !this.props.repos.length),
    }));
  };

  onClear = () => {
    this.setState({ text: '' }, this.focusInput);
  };

  onBlur = () => {
    this.setState({ text: '' });
  };

  render() {
    const { text, isLoading } = this.state;
    const { repos } = this.props;

    return (
      <OnClickOutside onClickOutside={this.onBlur}>
        {({ storeRef }) => (
          <InputContainer ref={storeRef}>
            <Input
              value={text}
              placeholder="Type anything..."
              onChange={this.onChange}
              ref={this.storeInputRef}
            />

            <PrefixIcon>
              <SearchIcon />
            </PrefixIcon>

            {isLoading && (
              <LoadingIcon>
                <SpinnerIcon />
              </LoadingIcon>
            )}

            {text && !isLoading && (
              <CrossButton onClick={this.onClear}>
                <CloseIcon />
              </CrossButton>
            )}

            <DropdownList
              data={repos}
              query={text}
              active={repos.length && text.length > 1}
              onSelect={this.onBlur}
            />
          </InputContainer>
        )}
      </OnClickOutside>
    );
  }
}
