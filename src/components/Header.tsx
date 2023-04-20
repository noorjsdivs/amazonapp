import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full border-b-[1px] py-1 border-b-gray-400 flex-row px-4 items-center justify-between mb-4">
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('Home')}
        className="w-32 h-12 bg-amazon_blue items-center justify-center">
        <FastImage
          resizeMode="contain"
          source={require('../img/logo.png')}
          className="w-24 h-12 mt-1"
        />
      </TouchableOpacity>
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('Cart')}
        className="relative">
        <ShoppingCartIcon size={25} color="#131921" />
        <View className="absolute right-0 top-4 bg-amazon_blue w-4 h-4 rounded-full items-center justify-center">
          <Text className="text-xs text-white">0</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
