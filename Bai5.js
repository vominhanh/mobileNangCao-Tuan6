import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, Text, Image, StyleSheet } from 'react-native';

const Bai5 = () => {
  const shipperPosition = useRef(new Animated.Value(-100));
  const textScale = useRef(new Animated.Value(1));
  const textColor = useRef(new Animated.Value(0));
  const foodImages = useRef([
    require('./img/myTom.jpg'),
    require('./img/lyCoCa.jpg'),
    require('./img/banhChung.png'),
  ]);
  const foodScales = useRef([
    new Animated.Value(0.5),
    new Animated.Value(0.5),
    new Animated.Value(0.5),
  ]);

  useEffect(() => {
    animateShipper();
    animateText();
    animateFoodImages();
  }, []);

  const animateShipper = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shipperPosition.current, {
          toValue: 100,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shipperPosition.current, {
          toValue: -100,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const animateText = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(textColor.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(textColor.current, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(textScale.current, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(textScale.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const animateFoodImages = () => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(foodScales.current[0], {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(foodScales.current[0], {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(foodScales.current[1], {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(foodScales.current[1], {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(foodScales.current[2], {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(foodScales.current[2], {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./img/shipper.png')}
        style={[
          styles.shipper,
          {
            transform: [{ translateX: shipperPosition.current }],
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.text,
          {
            transform: [{ scale: textScale.current }],
            color: textColor.current.interpolate({
              inputRange: [0, 1],
              outputRange: ['black', 'red'],
            }),
          },
        ]}
      >
        Shopee cái gì cũng có...
      </Animated.Text>
      <View style={styles.foodImagesContainer}>
        {foodImages.current.map((image, index) => (
          <Animated.Image
            key={index}
            source={image}
            style={[
              styles.foodImage,
              {
                transform: [{ scale: foodScales.current[index] }],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shipper: {
    width: 500,
    height:500,
    resizeMode: 'contain',
    position: 'absolute',
    top: 200, 
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  foodImagesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  foodImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default Bai5;