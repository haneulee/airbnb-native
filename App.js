import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Image } from "react-native";
import { Provider } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import Gate from "./components/Gate";
import store from "./redux/store";


const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async () => {
    const images = [
      require("./assets/loginBg.jpeg"),
      "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"
    ];
    const fonts = [Ionicons.font];
    const ImagePromises = cacheImages(images);
    const FontPromises = cacheFonts(fonts);

    return Promise.all([...ImagePromises, ...FontPromises])
  };
  return isReady ? (
    <Provider store={store}>
      <Gate />
    </Provider>
  ) : (
      <AppLoading
        onError={console.error}
        onFinish={handleFinish}
        startAsync={loadAssets}
      />
    );
}
