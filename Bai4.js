import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const Bai4 = () => {
  const balloons = useRef([]);

  useEffect(() => {
    animateBalloons();
  }, []);

  const animateBalloons = () => {
    balloons.current.forEach((balloon, index) => {
      const delay = index * 1000; 

      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(balloon.top, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(balloon.opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
       
        balloon.top.setValue(500);
        balloon.opacity.setValue(1);
        animateBalloons(); 
      });
    });
  };

  const createBalloons = () => {
    const numberOfBalloons = 5; 

    for (let i = 0; i < numberOfBalloons; i++) {
      const top = new Animated.Value(500); 
      const opacity = new Animated.Value(1); 

      balloons.current.push({ top, opacity });
    }
  };

  createBalloons();

  return (
    <View style={styles.container}>
      {balloons.current.map((balloon, index) => (
        <Animated.View
          key={index}
          style={[
            styles.balloon,
            {
              top: balloon.top,
              opacity: balloon.opacity,
            },
          ]}
        />
      ))}
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
  balloon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default Bai4;