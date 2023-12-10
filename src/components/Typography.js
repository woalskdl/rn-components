import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

export class Typography extends React.Component {
  render() {
    return (
      <RNText 
        style={{ 
          color:this.props.color, 
          fontSize:this.props.fontSize 
        }}
      >
        {this.props.children}
      </RNText>
    )
  }
}

// PropTypes 선언 >> Type 체크
Typography.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
}