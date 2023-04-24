import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {StarIcon} from 'react-native-heroicons/solid';
import CommonHeader from '../src/components/CommonHeader';
import FormattedPrice from '../src/components/FormattedPrice';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/AmazonSlice';
import RecommandProducts from '../src/components/RecommandProducts';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}
[];

const SingleProducts = ({route}: any) => {
  // ======== Current items ============
  const {item} = route.params;
  // @ts-ignore
  const dispatch = useDispatch();

  // ======== Recommanding data ========

  const [recommandProducts, setRecommandProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetch(
        'https://fakestoreapiserver.reactbd.com/amazonproducts',
      );
      const data = await resp.json();
      // @ts-ignore
      const newData = await data.filter(i => i.id !== item.id);
      setRecommandProducts(newData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View className="bg-white py-8 relative">
      <View className="absolute w-full top-2">
        <CommonHeader title="Home" />
      </View>
      <ScrollView>
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
          <TouchableOpacity
            onPress={() =>
              dispatch(
                addToCart({
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
            className="w-full h-12 bg-amazon_yellow items-center justify-center rounded-full mt-2">
            <Text className="font-semibold text-lg text-amazon_blue">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {loading ? (
            <View>
              <Text className="text-amazon_blue text-lg font-semibold underline underline-offset-4 decoration-[1px] text-center py-2">
                Recommand data is loading...
              </Text>
            </View>
          ) : (
            <View className="p-8">
              {recommandProducts.map(item => (
                <RecommandProducts key={item.id} item={item} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleProducts;
