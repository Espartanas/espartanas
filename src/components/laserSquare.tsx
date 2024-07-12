// LaserSquare.js

import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const squareSize = 140;
const laserWidth = 2;
const trailLength = 100; // Define the length of the trail (increase for more density)

const LaserSquare = () => {
  const animationValues = useRef(
    Array.from({ length: trailLength }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = animationValues.map((animationValue, index) => {
      return Animated.loop(
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false,
          delay: index * 20, // Reduce delay for more segments in the trail
        })
      );
    });
    Animated.stagger(20, animations).start();
  }, [animationValues]);

  const createAnimatedStyle = (animationValue) => {
    const translateX = animationValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, squareSize - laserWidth, squareSize - laserWidth, 0, 0],
    });

    const translateY = animationValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, 0, squareSize - laserWidth, squareSize - laserWidth, 0],
    });

    const opacity = animationValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.5, 0], // Adjust opacity for the fading effect
    });

    return {
      transform: [{ translateX }, { translateY }],
      opacity,
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        {animationValues.map((animationValue, index) => (
          <Animated.View
            key={index}
            style={[
              styles.laser,
              createAnimatedStyle(animationValue),
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: squareSize,
    height: squareSize,
    borderWidth: 2,
    borderColor: 'black',
    position: 'relative',
  },
  laser: {
    width: laserWidth,
    height: laserWidth,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default LaserSquare;
