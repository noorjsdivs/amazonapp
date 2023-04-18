import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../src/components/Header';
import FastImage from 'react-native-fast-image';
import {StarIcon} from 'react-native-heroicons/solid';

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

const Home = () => {
  const [product, setProduct] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const resp = await fetch(
      'https://fakestoreapiserver.reactbd.com/amazonproducts',
    );
    const data = await resp.json();
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <Header />

      <View>{loading && <Text>Data is loading</Text>}</View>
      <ScrollView>
        <View className="w-full px-6 mx-auto">
          {product.map(item => (
            <View
              key={item.id}
              className="h-auto mb-10 border border-gray-300 p-3 rounded-md">
              <FastImage
                resizeMode="contain"
                source={{uri: item.image}}
                className="w-full h-52 mt-1"
              />
              <Text className="text-[16px] font-semibold text-amazon_blue mt-2">
                {item.title}
              </Text>
              <Text className="text-sm text-gray-600 mt-2">
                {item.description}
              </Text>
              <View className="flex-row mt-2">
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
              </View>
              <TouchableOpacity className="w-full h-12 bg-amazon_yellow items-center justify-center rounded-full mt-2">
                <Text className="font-semibold text-lg text-amazon_blue">
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
