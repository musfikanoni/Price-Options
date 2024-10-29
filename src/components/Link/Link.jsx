import PropTypes from 'prop-types';
import React from 'react';

const Link = ({route}) => {
    return (
        <li className="mr-8">
            <a href={route.path}>{route.name}</a>
        </li>

    );
};

Link.PropTypes = {
    route: PropTypes.object
}
export default Link;