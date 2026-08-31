import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Organic Herbs - Europa Food Ingredients LLP",
  description: "Organic Herbs by Europa Food Ingredients LLP — Coming Soon.",
};

export default function OrganicHerbsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="light" />

      <main className="flex-grow bg-warm-cream flex flex-col items-center justify-center py-20 px-margin-mobile md:px-margin-desktop">
        {/* Breadcrumb */}
        <nav className="mb-10 font-body-md text-[11px] text-on-surface-variant flex items-center gap-2 bg-stark-white px-4 py-2.5 rounded-lg border border-outline-variant/10 shadow-sm">
          <Link href="/products" className="hover:text-deep-navy transition-all hover:underline">Products</Link>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-[#556B2F]">Organic Herbs</span>
        </nav>

        {/* Coming Soon Poster */}
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-outline-variant/10">
          <img
            src="/images/coming soon.jpg"
            alt="Organic Herbs — Coming Soon"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-8 font-body-md text-on-surface-variant text-center max-w-md">
          Our Organic Herbs range is being curated. Stay tuned or reach out to us for early inquiries.
        </p>

        <a
          href="https://wa.me/917041226666?text=Hello,%20I%20am%20interested%20in%20Organic%20Herbs%20from%20Europa%20Food%20Ingredients%20LLP"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-deep-navy text-stark-white px-8 py-4 rounded-xl font-label-caps text-label-caps hover:bg-champagne-gold hover:text-deep-navy transition-colors duration-300"
        >
          Inquire via WhatsApp
        </a>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
