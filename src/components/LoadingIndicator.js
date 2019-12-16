import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    state = {
        isPastDelay: false
    };

    componentDidMount() {
        this._delayTimer = setTimeout(
            () => {
                console.log("TIMER EXPIRED!!!")
                this.setState({ isPastDelay: true })
            }, 200
        );
    }

    componentWillUnmount() {
        clearTimeout(this._delayTimer);
    }

    render() {
        if (this.props.isLoading) {
          if (!this.state.isPastDelay) {
            return null;
          }
          return <div>loading...</div>;
        }
        return this.props.children;
    }
}