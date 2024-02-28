import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import Colors from '../utility/colorConstant';

const Icon = props => {
  const {iconName, iconType, color, iconSize} = props;

  const getIconComponent = () => {
    let iconComponent = (
      <MaterialIcons {...props} name={iconName} size={iconSize} color={color} />
    );
    if (iconType === 'ant') {
      iconComponent = (
        <AntDesignIcons
          {...props}
          name={iconName}
          size={iconSize}
          color={color}
        />
      );
    }
    if (iconType === 'ionic') {
      iconComponent = (
        <Ionicons {...props} name={iconName} size={iconSize} color={color} />
      );
    }
    if (iconType === 'entypo') {
      iconComponent = (
        <Entypo {...props} name={iconName} size={iconSize} color={color} />
      );
    }
    if (iconType === 'materialCommunity') {
      iconComponent = (
        <MaterialCommunityIcons
          {...props}
          name={iconName}
          size={iconSize}
          color={color}
        />
      );
    }
    if (iconType === 'FontAweSome') {
      iconComponent = (
        <FontAweSome {...props} name={iconName} size={iconSize} color={color} />
      );
    }
    if (iconType === 'FontAweSome5') {
      iconComponent = (
        <FontAweSome5
          {...props}
          name={iconName}
          size={iconSize}
          color={color}
        />
      );
    }
    if (iconType === 'materialIcons') {
      iconComponent = (
        <MaterialIcons
          {...props}
          name={iconName}
          size={iconSize}
          color={color}
        />
      );
    }
    return iconComponent;
  };

  return getIconComponent();
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  color: PropTypes.string,
  iconSize: PropTypes.number,
};

Icon.defaultProps = {
  onDismiss: () => null,
  iconType: 'material',
  color: Colors.BLACK_COLOR,
  size: 25,
};

export default Icon;
