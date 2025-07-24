export const metadata = {
  title: 'My Next App',
  description: 'Generated without Node.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
