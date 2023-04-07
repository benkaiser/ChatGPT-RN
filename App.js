import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const ChatScreen = () => {
  return <>
    <WebView
      source={{ uri: 'https://chat.openai.com/' }}
      style={{ flex: 1 }}
    />
    <StatusBar style="light" backgroundColor="#343541" translucent={false} />
  </>;
};

export default ChatScreen;