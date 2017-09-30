import { Component } from 'react';
import PropTypes from 'prop-types';

class Bundle extends Component {
  constructor() {
    super();
    this.state = {
      mod: null,
    };
  }

  async componentDidMount() {
    const { default: mod } = await this.props.load();

    this.setState({
      mod: mod.default || mod,
    });
  }

  render() {
    return (
      this.state.mod ? this.props.children(this.state.mod) : null
    );
  }
}
Bundle.propTypes = {
  load: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Bundle;