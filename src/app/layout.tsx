import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { Header } from "./components/Header/Header";
import {
  DESCRIPTION,
  DROPDOWN_CONTAINER,
  POPUP_CONTAINER,
  TITLE,
} from "./layout.const";
import { Footer } from "./components/Footer/Footer";
import { Providers } from "@/redux";
import { Roboto } from "next/font/google";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={styles.body}>
        <Providers>
          <div id={POPUP_CONTAINER} />
          <div id={DROPDOWN_CONTAINER} />
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
