// NO "use client" here
import "../styles/global.css";

export const metadata = {
  title: "InsuranceHub – Best Insurance Quotes",
  description: "Get the best insurance quotes personalized for your needs. Health, Life, Vehicle, and more.",
  keywords: ["insurance", "health insurance", "life insurance", "vehicle insurance", "quotes"],
  authors: [{ name: "Basit Warsi" }],
  creator: "Basit Warsi",
  openGraph: {
    title: "InsuranceHub",
    description: "Smart insurance estimates powered by AI",
    url: "https://yourdomain.com",
    siteName: "InsuranceHub",
    type: "website"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
