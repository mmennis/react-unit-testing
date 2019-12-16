import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends React.Component {
    render () {
        if (this.props.isLoading) {
            return null;
        }
        return this.props.children;
    }
}

LoadingIndicator.propTypes = {
    isLoading: PropTypes.bool.isRequired
};