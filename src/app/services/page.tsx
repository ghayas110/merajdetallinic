import Link from 'next/link';
import { servicesData } from '@/data';

export default function Services() {
  return (
    <>
      <section className="py-20 md:py-28 bg-slate text-white text-center">
        <div className="w-full max-w-[800px] mx-auto px-6">
          <span className="badge !bg-white/10 !text-white border border-white/20 mb-6">Our Services</span>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] font-bold leading-tight mb-6">Comprehensive Dental Care</h1>
          <p className="text-[1.1rem] text-white/80 leading-relaxed">
            From routine cleanings to advanced restorative surgery, our dedicated team provides personalized treatments to keep your smile healthy and beautiful.
          </p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {servicesData.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className="group block h-full">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-full flex flex-col hover-card hover:border-primary/30 relative">
                {service.slug === 'implant' && (
                   <div className="absolute top-4 right-4 bg-primary text-white text-[0.7rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">Popular</div>
                )}
                <div className="h-[200px] overflow-hidden">
                  <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  {/* For icons, we can dynamically pull an icon or use a generic one if we don't have it mapped, but for now we'll look at the badges */}
                  <div className="w-auto h-auto bg-[#f5eed9] text-primary rounded-lg font-bold text-sm px-3 py-1 mb-4 inline-block self-start border border-[#e8dfc4]">
                    {service.badge}
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted text-[0.95rem] leading-relaxed mb-6 flex-grow">
                    {service.heroSubtitle}
                  </p>
                  <span className="text-primary font-semibold text-[0.9rem] flex items-center gap-2">Learn more <span className="transition-transform group-hover:translate-x-1">→</span></span>
                </div>
              </div>
            </Link>
          ))}
          
          <Link href="/contact" className="group block h-full lg:col-span-2">
             <div className="bg-gradient-to-br from-primary to-[#8B6A27] rounded-2xl overflow-hidden text-white p-10 h-full flex flex-col justify-center items-center text-center hover-card relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <h3 className="text-3xl font-bold mb-4 z-10">Not Sure What You Need?</h3>
                <p className="text-white/90 mb-8 max-w-lg z-10">
                  Book a comprehensive consultation today. Our experts will evaluate your oral health and create a personalized treatment plan.
                </p>
                <div className="btn bg-white text-primary hover:bg-light z-10">Book Consultation</div>
             </div>
          </Link>
          
        </div>
      </section>

      <section className="py-16 border-t border-gray-200 bg-white">
        <div className="w-full max-w-[1000px] mx-auto px-6 text-center flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-[2.5rem] font-bold text-primary mb-1">98%</p>
              <p className="font-semibold text-gray-900">Patient Satisfaction</p>
            </div>
            <div className="hidden md:block w-px h-[60px] bg-gray-200"></div>
            <div>
              <p className="text-[2.5rem] font-bold text-primary mb-1">15k+</p>
              <p className="font-semibold text-gray-900">Successful Procedures</p>
            </div>
            <div className="hidden md:block w-px h-[60px] bg-gray-200"></div>
            <div>
              <p className="text-[2.5rem] font-bold text-primary mb-1">0%</p>
              <p className="font-semibold text-gray-900">Interest Financing</p>
            </div>
        </div>
      </section>
    </>
  );
}
