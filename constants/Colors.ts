/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#f97316";
const tintColorDark = '#ea580c';

export const Colors = {
  light: {
    text: '#0c0a09',
    background: '#FEFCFB',
    tint: tintColorLight,
    icon: '#f97316',
    tabIconDefault: '#f97316',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#160d0a',
    tint: tintColorDark,
    icon: '#ea580c',
    tabIconDefault: '#ea580c',
    tabIconSelected: tintColorDark,
  },
};
