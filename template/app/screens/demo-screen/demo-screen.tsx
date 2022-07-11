import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { HomeScreenParamList } from '@/navigation/home-navigator';

import { Section } from './components/section/section';
import * as styles from './demo-screen.styles';
import { useStore } from './use-store';

export const DemoScreen: FC<StackScreenProps<HomeScreenParamList, 'Demo'>> =
  function CompletedScreen() {
    const { onGetUser } = useStore();

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          style={backgroundStyle}
          contentInsetAdjustmentBehavior="automatic">
          <Header />

          <Button title="TEST GET USER" onPress={() => onGetUser()}></Button>

          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One" isDarkMode={isDarkMode}>
              <Text>Edit</Text>
              <Text style={styles.HIGH_LIGHT}>App.js</Text>
              <Text>
                to change this screen and then come back to see your edits.
              </Text>
            </Section>
            <Section title="See Your Changes" isDarkMode={isDarkMode}>
              <ReloadInstructions />
            </Section>
            <Section title="Debug" isDarkMode={isDarkMode}>
              <DebugInstructions />
            </Section>
            <Section title="Learn More" isDarkMode={isDarkMode}>
              <Text>Read the docs to discover what to do next:</Text>
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
