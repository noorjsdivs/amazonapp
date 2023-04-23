import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import FormattedPrice from './FormattedPrice';
import {useDispatch} from 'react-redux';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../../redux/AmazonSlice';
import {MinusIcon, PlusIcon} from 'react-native-heroicons/solid';

const CartProduct = ({item}: any) => {
  const dispatch = useDispatch();
  return (
    <View className="w-full flex-row items-center justify-between px-2 border-b-[1px] border-gray-400 py-2">
      <View className="w-1/6 mr-2">
        <FastImage
          resizeMode="contain"
          source={{uri: item.image}}
          className="w-full h-20 mt-1"
        />
      </View>
      <View className="w-3/6 flex-1 h-full justify-center gap-3">
        <Text>{item.title.substring(0, 30)}...</Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row gap-2 items-center">
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  decreaseQuantity({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    image: item.image,
                    rating: item.rating,
                    quantity: 1,
                  }),
                )
              }
              className="bg-green-300 p-1">
              <MinusIcon size={15} color="#131921" />
            </TouchableOpacity>
            <Text className="text-[16px] font-semibold">{item.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  increaseQuantity({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    image: item.image,
                    rating: item.rating,
                    quantity: 1,
                  }),
                )
              }
              className="bg-green-300 p-1">
              <PlusIcon size={15} color="#131921" />
            </TouchableOpacity>
          </View>
          <View>
            <Text>
              Subtotal:{' '}
              <Text className="text-base font-semibold text-amazon_blue">
                <FormattedPrice amount={item.price * item.quantity} />
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View className="w-1/6 ml-2">
        <TouchableOpacity
          onPress={() => dispatch(deleteItem(item.id))}
          className="bg-red-500 px-2 py-1 rounded-md">
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartProduct;
