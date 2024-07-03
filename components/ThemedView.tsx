import { type ViewProps } from "react-native";

// import { useThemeColor } from '@/hooks/useThemeColor';
import { View } from "tamagui";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <View backgroundColor={"$background"} style={[, style]} {...otherProps} />
  );
}
