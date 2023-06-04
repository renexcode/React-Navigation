import React from 'react';

const WithNavigation = (WrappedComponent, navigationOptions) => {
  const WithNavigation = (props) => {
    return <WrappedComponent {...props} />;
  };

  WithNavigation.navigationOptions = navigationOptions;

  return WithNavigation;
};

export default WithNavigation;