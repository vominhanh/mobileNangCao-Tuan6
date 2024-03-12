import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, View, StyleSheet, Image } from 'react-native';

const CatAndMouseApp = () => {
  const mousePosition = useRef(new Animated.Value(0));
  const catPosition = useRef(new Animated.Value(500));
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    animateMouse();
    animateCat();
  }, []);

  const animateMouse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(mousePosition.current, {
          toValue: 500,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(mousePosition.current, {
          toValue: 0,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const animateCat = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(catPosition.current, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(catPosition.current, {
          toValue: 500,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const handleCollision = () => {
    setIsGameOver(true);
  };

  return (
    <View style={styles.container}>
      {!isGameOver && (
        <>
          <Animated.Image
            source={require('./img/chuot.png')}
            style={[
              styles.mouse,
              {
                transform: [{ translateX: mousePosition.current }],
              },
            ]}
          />
          <Animated.Image
            source={require('./img/meo.jpg')}
            style={[
              styles.cat,
              {
                transform: [{ translateY: catPosition.current }],
              },
            ]}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mouse: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 200,
  },
  cat: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 200,
  },
});

export default CatAndMouseApp;