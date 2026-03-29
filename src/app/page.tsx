import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="py-16 md:py-24 bg-light overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          <div className="animate-fade-in">
            <span className="badge">Expert Dental Care</span>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-bold mt-4 mb-6 tracking-tight">Your Smile,<br/><span className="text-primary">Our Priority</span></h1>
            <p className="text-[1.1rem] text-muted max-w-[90%]">
              Experience world-class dental care with our team of experts dedicated to your oral health, comfort, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
              <Link href="/services" className="btn btn-secondary">Our Services</Link>
            </div>
            
            <div className="mt-8">
              <div className="flex mb-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-light flex items-center justify-center text-[0.8rem] -ml-2 first:ml-0 z-30 relative">🧑</div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-light flex items-center justify-center text-[0.8rem] -ml-2 z-20 relative">👩</div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-light flex items-center justify-center text-[0.8rem] -ml-2 z-10 relative">👨</div>
              </div>
              <p className="text-[0.85rem] text-muted"><strong>4.9/5</strong> from 2,800+ patient reviews</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" alt="Modern dental clinic room" className="w-full aspect-[4/3] object-cover block" />
              <div className="absolute -bottom-4 left-8 bg-white py-4 px-6 rounded-lg shadow-xl flex items-center gap-4 z-10 hover-card">
                <div>
                  <span className="block text-[0.75rem] text-primary font-bold uppercase">Next Available</span>
                  <strong>Tomorrow, 9:00 AM</strong>
                </div>
                <div className="text-xl">📅</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-gray-200 bg-light">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">10k+</h2>
              <p className="text-muted font-medium text-[0.95rem]">Happy Patients</p>
            </div>
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">15+</h2>
              <p className="text-muted font-medium text-[0.95rem]">Years Experience</p>
            </div>
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">8</h2>
              <p className="text-muted font-medium text-[0.95rem]">Specialists</p>
            </div>
            <div className="p-4 hover-card">
              <h2 className="text-[2.5rem] font-bold text-primary mb-2">24/7</h2>
              <p className="text-muted font-medium text-[0.95rem]">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="badge">What We Do</span>
              <h2 className="text-3xl font-bold">Comprehensive Care</h2>
            </div>
            <Link href="/services" className="font-semibold text-primary hover:underline">View all services →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">🦷</div>
              <h3 className="font-bold text-lg mb-4">General Dentistry</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Routine checkups, cleanings, and preventative care to keep your smile healthy and vibrant.</p>
              <Link href="/services/general" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">✨</div>
              <h3 className="font-bold text-lg mb-4">Cosmetic Surgery</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Enhance your natural beauty with veneers, bonding, and advanced smile design techniques.</p>
              <Link href="/services/cosmetic" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">🪥</div>
              <h3 className="font-bold text-lg mb-4">Orthodontics</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Modern braces and clear aligners to straighten your teeth comfortably and efficiently.</p>
              <Link href="/services/orthodontics" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl flex flex-col h-full hover-card">
              <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center text-2xl mb-6 text-primary">🌟</div>
              <h3 className="font-bold text-lg mb-4">Teeth Whitening</h3>
              <p className="text-muted flex-grow text-[0.95rem]">Professional brightening services that deliver stunning results in just one visit.</p>
              <Link href="/services/cosmetic" className="inline-block text-primary font-semibold text-[0.9rem] mt-4">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate text-white py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="badge">Testimonials</span>
              <h2 className="text-3xl font-bold text-white">What our patients say about us</h2>
              <p className="mt-4 text-white/70">We pride ourselves on providing a gentle, professional experience for every person who walks through our doors.</p>
              <div className="flex gap-4 mt-8">
                <button className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center transition-all hover-card hover:bg-white/10">←</button>
                <button className="w-10 h-10 rounded-full bg-primary border border-primary text-white flex items-center justify-center transition-all hover-card">→</button>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover-card">
              <div className="text-sm mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[1.1rem] italic mb-6 text-white/90">&quot;The best dental experience I&apos;ve ever had. The staff were professional, the clinic was spotless, and the treatment was completely painless.&quot;</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[0.9rem] bg-[#B88D3B]">JS</div>
                <div>
                  <strong className="block text-[0.95rem] text-white">John Smith</strong>
                  <span className="text-[0.8rem] text-white/60">Patient since 2021</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover-card">
              <div className="text-sm mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[1.1rem] italic mb-6 text-white/90">&quot;Meraj Dental Clinic completely changed my smile with their whitening treatment. I feel so much more confident in professional meetings now.&quot;</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[0.9rem] bg-[#8B6A27]">SA</div>
                <div>
                  <strong className="block text-[0.95rem] text-white">Sarah Adams</strong>
                  <span className="text-[0.8rem] text-white/60">Marketing Executive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="bg-primary rounded-[24px] py-16 px-8 text-center text-white" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'}}>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">Ready for a healthier<br/>smile?</h2>
            <p className="text-white/90 max-w-[600px] mx-auto mt-4">
              Join over 10,000 satisfied patients. Book your consultation today and take the first step towards your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/contact" className="btn btn-secondary">Book Now</Link>
              <Link href="/contact" className="btn border border-white/30 text-white hover:bg-white/10">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
