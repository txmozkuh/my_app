import localFont from "next/font/local";

const fontMelodrama = localFont({
  src: [
    {
      path: "../../public/fonts/melodrama/Melodrama-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/melodrama/Melodrama-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/melodrama/Melodrama-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/melodrama/Melodrama-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/melodrama/Melodrama-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-melodrama",
  display: "swap",
});

const fontPencerio = localFont({
  src: [
    {
      path: "../../public/fonts/pencerio/Pencerio-Hairline.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pencerio",
  display: "swap",
});

const fontSupreme = localFont({
  src: [
    {
      path: "../../public/fonts/supreme/Supreme-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/supreme/Supreme-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/supreme/Supreme-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/supreme/Supreme-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/supreme/Supreme-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/supreme/Supreme-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/supreme/Supreme-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/supreme/Supreme-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
});
export { fontMelodrama, fontPencerio, fontSupreme };
