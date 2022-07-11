import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import * as styles from '../../demo-screen.styles';
import { ISectionProps } from './section.props';

export const Section = memo(
  ({ title, children, isDarkMode }: ISectionProps) => {
    return (
      <View style={styles.SECTION_CONTAINER}>
        <Text
          style={[
            styles.SECTION_TITLE,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.SECTION_DESCRIPTION,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  },
);
