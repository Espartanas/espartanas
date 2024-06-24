import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Test() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://player.vimeo.com/video/962565900?h=43c0098493' }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
  },
  webview: {
    flex: 1,
  },
});