import "./globals.css";
import "./main.css";
export const metadata = {
  title: "Framer Motion Showcase",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body-bg">{children}</body>
    </html>
  );
}
