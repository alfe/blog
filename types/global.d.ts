declare module "remark-strip-html";
declare module "ga-gtag" {
  const gtag: (...args: any[]) => void;
  export default gtag;
}
declare module "playwright-core" {
  export const chromium: any;
}
