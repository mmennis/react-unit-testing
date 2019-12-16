import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends React.Component {
    render () {
        return this.props.children;
    }
}

LoadingIndicator.propTypes = {
    isLoading: PropTypes.bool.isRequired
};