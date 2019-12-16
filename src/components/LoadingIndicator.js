import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    render () {
        if (this.props.isLoading) {
            return null;
        }
        return this.props.children;
    }
}