'use client';

import React from 'react';
import { Provider } from 'react-redux';
// @ts-ignore
import store from '../../redux/store.tsx';
import './globals.css';

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
