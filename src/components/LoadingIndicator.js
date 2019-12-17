import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    state = {
        isPastDelay: false
    };

    componentDidMount() {
        this._delayTimer = setTimeout(
            () => {
                this.setState({ isPastDelay: true })
            }, 200
        );
    }

    componentWillUnmount() {
        clearTimeout(this._delayTimer);
    }

    render() {
        var retVal = this.props.children;
        if (this.props.isLoading) {
          if (this.state.isPastDelay) {
            retVal = <div>loading ...</div>;
          } else {
            retVal = null;
          }
        }
        return retVal;
    }
}