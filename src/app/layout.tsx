"use client"
import "./globals.css";
import { Provider } from 'react-redux';
import store from '../../redux/store';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="ru">
        <body className="flex justify-center">{children}</body>
      </html>
    </Provider>
  );
}