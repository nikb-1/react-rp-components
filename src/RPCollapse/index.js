import { Component } from 'react';
import PropTypes from 'prop-types';

export default class RPCollapse extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    defaultOpen: PropTypes.bool
  };

  static defaultProps = {
    defaultOpen: false
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: props.defaultOpen };
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const {
      state: { isOpen },
      toggle
    } = this;

    return this.props.render({ isOpen, toggle });
  }
}
