export const withDelay = (ms: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, ms));
