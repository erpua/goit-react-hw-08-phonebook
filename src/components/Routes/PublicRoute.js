import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
