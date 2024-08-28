import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TemaContext, { TemaProvider } from './src/contexts/TemaContext';

export default function App() {
  let tema = useContext(TemaContext);
  return (
    <TemaProvider>
      <PaperProvider theme={tema}>
        <HomeScreen />
      </PaperProvider>
    </TemaProvider>
  );
}

