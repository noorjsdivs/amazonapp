import {View, Text} from 'react-native';
import React from 'react';
import CommonHeader from '../src/components/CommonHeader';

const Payment = () => {
  return (
    <View>
      <CommonHeader title="Cart" />
      <View className="px-4">
        <Text>Your Payment details will go here...</Text>
      </View>
    </View>
  );
};

export default Payment;
