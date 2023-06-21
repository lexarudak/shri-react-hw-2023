import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { Header } from "./components/Header/Header";
import { DESCRIPTION, TITLE } from "./layout.const";
import { Footer } from "./components/Footer/Footer";
import { Providers } from "@/redux";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
