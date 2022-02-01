import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import Gate from './src/components/Gate';
import { Provider } from 'react-redux';
import store, {persistore} from './src/rtk/store';
import { PersistGate } from 'redux-persist/integration/react';



const cacheImages = images => {
    images.map(image=>{
      if (typeof image === "string"){
        return Image.prefetch(image);
      } else{
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };


const cacheFonts = fonts => fonts.map(font=> Font.loadAsync(font));


export default function App() {
  const [isReady, setIsReady] = useState(false);


  const handleOnFinish = () => setIsReady(true)

  const loadAssets = async () => {
      const images = [
        require("./assets/lgbg1.jpg"),
        require("./assets/ArnaLogo1.png")
      ]
     const fonts = [Ionicons.font];
     const imagePromises = cacheImages(images)
     const fontPromises = cacheFonts(fonts);
     return Promise.all([...fontPromises, ...imagePromises]);
  };

  return  isReady ?
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Gate />
      </PersistGate>
    </Provider>
  : 
    (<AppLoading
        onFinish={handleOnFinish}
        onError={console.error}
        startAsync={loadAssets}
      />) 
}