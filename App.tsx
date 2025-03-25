import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://retto.social' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
