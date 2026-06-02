import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Shipments & Logistics - Europa Foods",
  description: "Global supply chain precision. Learn about our packaging standards and track your shipment status.",
};

export default function ShipmentsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 z-10 pr-0 md:pr-12">
            <span className="font-label-caps text-label-caps text-champagne-gold block mb-6 uppercase tracking-widest">Global Supply Chain</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mb-8 leading-tight">Precision in Every Mile.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Our logistics network is built on the principles of uncompromising quality and absolute reliability. From Indian ports to global destinations, we ensure your high-end food products are handled with editorial-grade precision.
            </p>
          </div>
          <div className="md:col-span-5 mt-12 md:mt-0 relative h-[500px] md:h-[700px] img-container">
            <div className="absolute inset-0 bg-deep-navy/10 z-10 pointer-events-none"></div>
            <img alt="Logistics Port" className="w-full h-full object-cover hover-zoom-img" src="/images/shipment.jpeg" />
          </div>
        </div>
      </header>



      {/* Port-to-Port Handling (Editorial Table/List) */}
      <section className="bg-stark-white py-section-gap-mobile md:py-section-gap border-y border-deep-navy/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy sticky top-32">Port-to-Port<br />Handling Protocol</h2>
            </div>
            <div className="md:col-span-3">
              {/* Step 1 */}
              <div className="pb-10 mb-10 border-b border-deep-navy/10 flex flex-col md:flex-row gap-8 items-start">
                <div className="text-champagne-gold font-display-lg text-display-lg opacity-40 leading-none">01</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Origin Verification</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Rigorous quality control checks prior to container loading. Ambient temperatures and humidity levels are calibrated and locked.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="pb-10 mb-10 border-b border-deep-navy/10 flex flex-col md:flex-row gap-8 items-start">
                <div className="text-champagne-gold font-display-lg text-display-lg opacity-40 leading-none">02</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Maritime Transit</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Exclusive partnerships with premium freight lines ensure priority stowage. Continuous environmental monitoring via IoT sensors.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="pb-10 border-b-0 flex flex-col md:flex-row gap-8 items-start">
                <div className="text-champagne-gold font-display-lg text-display-lg opacity-40 leading-none">03</div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Destination Clearance</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Expedited customs processing handled by our global logistics team, minimizing terminal dwell time and ensuring rapid final-mile dispatch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
      <WhatsAppButton />
    </>
  );
}
