import { TouchableOpacityProps } from 'react-native';

export interface DemoProps extends TouchableOpacityProps {
  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;
}
