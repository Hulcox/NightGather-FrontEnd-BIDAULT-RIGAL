import Header from "@/components/header";

export default function NightDatherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-3/4 m-auto">{children}</div>
    </div>
  );
}
