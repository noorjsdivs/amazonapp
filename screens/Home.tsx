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
        <View className="px-6">
          <Text className="font-semibold text-lg text-amazon_blue">
            Noor online shopping Store
          </Text>
          <Text className="font-medium text-gray-500 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            pariatur nihil animi accusantium eveniet voluptatum officia ab
            aperiam saepe expedita, suscipit est ea! Nemo explicabo laborum
            perferendis enim optio inventore asperiores tempora nostrum!
            Recusandae, sequi!
          </Text>
        </View>
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
