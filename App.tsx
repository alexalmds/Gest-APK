import React, {useEffect} from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';

export default function App() {

  useEffect(() => {
    async function updateApp() {
      const {isAvailable} =   await Updates.checkForUpdateAsync();

      if (isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp()
  }, []);
  return (
    <Routes />
  );
}


