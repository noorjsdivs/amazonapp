import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const Header = () => {
  return (
    <TouchableOpacity className="w-full border-b-[1px] py-1 border-b-gray-400 items-center justify-center mb-4">
      <View className="w-36 h-14 bg-amazon_blue items-center justify-center">
        <FastImage
          resizeMode="contain"
          source={require('../img/logo.png')}
          className="w-24 h-12 mt-1"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Header;
