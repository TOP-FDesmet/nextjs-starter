import "./globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-200">HEADER</header>
        <main>{children}</main>
        <footer className="bg-green-200">FOOTER</footer>
      </body>
    </html>
  );
}
