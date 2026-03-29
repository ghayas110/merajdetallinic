import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section 
        className="py-20 bg-slate text-white relative bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(28,34,47,0.8), rgba(28,34,47,0.8)), url(${service.heroImage})` }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[0.85rem] mb-6 text-white/80 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>›</span>
            <span className="text-white">{service.title}</span>
          </div>
          
          <div className="max-w-[800px]">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-bold leading-tight mb-4">{service.title}</h1>
            <p className="text-[1.1rem] text-white/90 leading-relaxed max-w-[600px]">
              {service.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="sticky top-[73px] bg-white border-b border-gray-200 z-40 overflow-x-auto shadow-sm">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <ul className="flex min-w-max">
            <li><Link href="#overview" className="inline-block py-4 px-6 font-semibold text-[0.9rem] text-gray-800 hover:text-primary border-b-2 border-primary transition-colors">Overview</Link></li>
            <li><Link href="#procedure" className="inline-block py-4 px-6 font-semibold text-[0.9rem] text-gray-500 hover:text-gray-800 border-b-2 border-transparent transition-colors">Procedure</Link></li>
            <li><Link href="#benefits" className="inline-block py-4 px-6 font-semibold text-[0.9rem] text-gray-500 hover:text-gray-800 border-b-2 border-transparent transition-colors">Benefits</Link></li>
            <li><Link href="#faqs" className="inline-block py-4 px-6 font-semibold text-[0.9rem] text-gray-500 hover:text-gray-800 border-b-2 border-transparent transition-colors">FAQs</Link></li>
          </ul>
        </div>
      </div>

      <div className="py-16 bg-light bg-opacity-30">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12 items-start">
          
          <div className="flex flex-col gap-12">
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-bold mb-6 text-slate">{service.overviewTitle}</h2>
              <div className="text-[1rem] text-muted leading-[1.7] flex flex-col gap-4">
                {service.overviewContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section id="procedure" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-bold mb-6 text-slate">{service.procedureTitle}</h2>
              <div className="flex flex-col gap-4">
                {service.procedures.map((proc, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-6 hover-card">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-primary font-bold flex shrink-0 items-center justify-center text-lg shadow-sm">
                      {proc.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-slate">{proc.title}</h3>
                      <p className="text-muted text-[0.95rem] leading-relaxed">{proc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-bold mb-6 text-slate">{service.benefitsTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-light p-6 rounded-xl hover-card border border-gray-100/50">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mb-4 font-bold">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-[1.05rem] mb-2 text-slate">{benefit.title}</h3>
                    <p className="text-muted text-[0.9rem] leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-bold mb-6 text-slate">{service.faqTitle}</h2>
              <div className="flex flex-col gap-3">
                {service.faqs.map((faq, index) => (
                  <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="cursor-pointer p-5 font-bold text-[0.95rem] text-slate flex justify-between items-center group-open:bg-gray-50/50">
                      {faq.question}
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="p-5 pt-0 text-muted text-[0.95rem] leading-relaxed bg-gray-50/50">
                      <div className="mt-2">{faq.answer}</div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="sticky top-[160px] flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-slate">{service.sidebar.journeyTitle}</h3>
              <p className="text-muted text-[0.95rem] mb-6 leading-relaxed bg-white">{service.sidebar.journeyDesc}</p>
              
              <ul className="flex flex-col gap-3 mb-6">
                {service.sidebar.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[0.9rem] text-slate font-medium">
                    <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-[0.6rem]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn btn-primary w-full text-center">Book Appointment</Link>
                <Link href="tel:+923333021554" className="btn bg-gray-100 text-slate hover:bg-gray-200 font-bold border border-gray-200">Call +92 333 3021554</Link>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
               <h3 className="font-bold text-lg text-slate mb-4">{service.sidebar.expertTitle}</h3>
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm">
                  <img src={service.sidebar.expertImage} alt={service.sidebar.expertName} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <h4 className="font-bold text-[0.95rem] text-slate">{service.sidebar.expertName}</h4>
                   <p className="text-primary text-[0.8rem] font-medium">{service.sidebar.expertRole}</p>
                 </div>
               </div>
               <p className="italic text-muted text-[0.85rem] leading-relaxed">
                 {service.sidebar.expertQuote}
               </p>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
