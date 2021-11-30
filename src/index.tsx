import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-offertoro' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Offertoro = NativeModules.Offertoro
  ? NativeModules.Offertoro
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function show(appId: string, secretKey: string, pubUid = ''): void {
  Offertoro.show(appId, secretKey, pubUid);
}
