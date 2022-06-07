import 'react-native-gesture-handler';

import React from 'react';
import { enableScreens } from 'react-native-screens';
import { RecoilRoot } from 'recoil';

import { Navigation } from './navigation/root-navigator';

enableScreens();

const App = () => {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
};

export default App;
