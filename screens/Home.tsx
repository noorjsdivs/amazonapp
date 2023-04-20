import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../src/components/Header';
import Products from '../src/components/Products';

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
      <View className="flex items-center justify-center">
        {loading && (
          <Text className="text-amazon_blue text-lg font-semibold underline underline-offset-4 decoration-[1px]">
            Data is loading...
          </Text>
        )}
      </View>
      <ScrollView className="mb-12">
        <View className="w-full px-6 mx-auto">
          {product.map(item => (
            <Products key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
