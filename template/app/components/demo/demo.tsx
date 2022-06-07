import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { DemoProps } from './demo.props';
import * as styles from './demo.styles';

export const Demo = memo((props: DemoProps) => {
  const { children, ...rest } = props;

  return (
    <TouchableOpacity style={styles.CONTAINER} {...rest}>
      {children}
    </TouchableOpacity>
  );
});
