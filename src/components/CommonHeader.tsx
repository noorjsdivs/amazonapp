import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ArrowSmallLeftIcon,
  ShoppingCartIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const CommonHeader = () => {
  const productData = useSelector((state: any) => state.amazon.products);
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between px-4 py-1">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row">
        <ArrowSmallLeftIcon size={20} color="#131921" />
        <Text className="ml-1 text-amazon_blue font-semibold">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('Cart')}
        className="relative">
        <ShoppingCartIcon size={25} color="#131921" />
        <View className="absolute right-0 top-4 bg-amazon_blue w-4 h-4 rounded-full items-center justify-center">
          {productData ? (
            <Text className="text-xs text-white">{productData.length}</Text>
          ) : (
            <Text className="text-xs text-white">0</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;
