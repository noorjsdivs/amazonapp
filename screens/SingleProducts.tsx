import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {StarIcon} from 'react-native-heroicons/solid';
import CommonHeader from '../src/components/CommonHeader';
import FormattedPrice from '../src/components/FormattedPrice';

const SingleProducts = ({route}: any) => {
  const {item} = route.params;

  return (
    <View className="bg-white py-8 relative">
      <View className="absolute w-full top-2">
        <CommonHeader />
      </View>
      <View className="px-2">
        <FastImage
          resizeMode="contain"
          source={{uri: item.image}}
          className="w-full h-72 mt-6"
        />
        <Text className="text-[16px] font-semibold text-amazon_blue mt-2">
          {item.title}
        </Text>
        <Text className="text-sm text-gray-600 mt-2 text-justify">
          {item.description}
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
          <View className="items-center">
            <View className="flex-row">
              <StarIcon color="#febd69" size={20} />
              <StarIcon color="#febd69" size={20} />
              <StarIcon color="#febd69" size={20} />
              <StarIcon color="#febd69" size={20} />
              <StarIcon color="#febd69" size={20} />
            </View>
            <Text className="text-xs text-gray-600">(100 reviws)</Text>
          </View>
        </View>
        <TouchableOpacity className="w-full h-12 bg-amazon_yellow items-center justify-center rounded-full mt-2">
          <Text className="font-semibold text-lg text-amazon_blue">
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleProducts;
