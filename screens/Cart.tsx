import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import CommonHeader from '../src/components/CommonHeader';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CartProduct from '../src/components/CartProduct';
import FormattedPrice from '../src/components/FormattedPrice';
import {resetCart} from '../redux/AmazonSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.amazon.products);
  const navigation = useNavigation();
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: any) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <View>
      <CommonHeader title="Home" />

      {productData.length > 0 ? (
        <View>
          <FlatList
            data={productData}
            renderItem={({item}) => (
              <ScrollView>
                <CartProduct item={item} />
              </ScrollView>
            )}
            keyExtractor={item => item.id}
          />
          <View className="items-end px-4 mt-1">
            <Text className="text-base">
              Total Amount:{' '}
              <Text className="text-lg font-semibold text-amazon_blue">
                <FormattedPrice amount={totalAmt} />
              </Text>
            </Text>
          </View>
          <View className="gap-4 mt-2">
            <View>
              <TouchableOpacity
                onPress={() => dispatch(resetCart())}
                className="w-56 bg-red-600 mx-auto items-center py-3 rounded-2xl">
                <Text className="text-base text-white font-medium">
                  Reset cart
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                // @ts-ignore
                onPress={() => navigation.navigate('Payment')}
                className="w-56 bg-green-600 mx-auto items-center py-3 rounded-2xl">
                <Text className="text-base text-white font-medium">
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View className="items-center mt-4">
          <Text className="text-lg font-semibold text-red-600">
            Your cart is Empty!
          </Text>

          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate('Home')}>
            <Text>Go to Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Cart;
