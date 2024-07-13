export type ComposeType<T, S> = {
  [key in keyof T]: key extends keyof T ? T[key] : never;
} & { [key in keyof S]: key extends keyof S ? S[key] : never };
