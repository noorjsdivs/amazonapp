import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {StarIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import FormattedPrice from './FormattedPrice';

const Products = ({item}: any) => {
  const navigation = useNavigation();
  const handleDetails = () => {
    // @ts-ignore
    navigation.navigate('SingleProducts', {
      item: item,
    });
  };

  return (
    <View
      key={item.id}
      className="h-auto mb-10 border border-gray-300 px-3 py-5 rounded-md bg-white">
      <FastImage
        resizeMode="contain"
        source={{uri: item.image}}
        className="w-full h-52 mt-1"
      />
      <Text className="text-[16px] font-semibold text-amazon_blue mt-2">
        {item.title.substring(0, 40)}...
      </Text>
      <Text className="text-sm text-gray-600 mt-2">
        {item.description.substring(0, 100)}...
      </Text>
      <View className="flex-row items-center justify-between py-2">
        <View>
          <Text className="text-base font-medium">
            Price:{' '}
            <Text className="font-bold text-lg text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </Text>
          </Text>
        </View>
        <View className="flex-row">
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleDetails}
        className="w-full h-12 bg-amazon_yellow items-center justify-center rounded-full mt-2">
        <Text className="font-semibold text-lg text-amazon_blue">
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Products;
