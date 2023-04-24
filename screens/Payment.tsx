import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../src/components/CommonHeader';
import {useSelector} from 'react-redux';
import FormattedPrice from '../src/components/FormattedPrice';

const Payment = () => {
  const productData = useSelector((state: any) => state.amazon.products);
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
      <CommonHeader title="Cart" />
      <View className="px-4">
        <Text>Your Payment details as follows:</Text>
        <View>
          <Text className="text-lg">
            Total amount:{' '}
            <Text className="font-semibold text-amazon_blue">
              <FormattedPrice amount={totalAmt} />
            </Text>
          </Text>
          <Text className="mt-2 text-yellow-600">
            Various payment options will be available soon...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Payment;
