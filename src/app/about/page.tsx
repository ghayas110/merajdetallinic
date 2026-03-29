import Link from 'next/link';

export default function About() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="Dental Clinic Room" className="w-full aspect-video object-cover" />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-[2.5rem] sm:text-[3rem] font-bold leading-tight">Defining the Future of<br/>Dental Excellence</h1>
            <p className="mt-6 text-[1.1rem] text-muted">
              Since our founding, Meraj Dental Clinic has been at the forefront of combining compassionate care with cutting-edge technology to redefine your dental experience.
            </p>
            <Link href="#technology" className="btn btn-primary mt-8">View Our Tech</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          
          <div className="max-w-[800px] mx-auto relative pl-8 md:pl-16 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[24px] md:before:left-[31px] before:w-[2px] before:bg-gray-200">
            
            <div className="relative mb-12 flex flex-col md:flex-row gap-4 md:gap-8 hover-card">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xl md:text-2xl z-10 shrink-0 shadow-sm absolute -left-8 md:-left-16 md:relative">🏁</div>
              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl flex-grow">
                <h3 className="text-xl font-bold mb-2">Foundation in 2005</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Started with a single chair and a mission to provide the highest quality dental care in the region. Dr. Sarah Mitchell opened the doors with a focus on family dentistry.</p>
              </div>
            </div>
            
            <div className="relative mb-12 flex flex-col md:flex-row gap-4 md:gap-8 hover-card">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xl md:text-2xl z-10 shrink-0 shadow-sm absolute -left-8 md:-left-16 md:relative">📈</div>
              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl flex-grow">
                <h3 className="text-xl font-bold mb-2">Expansion of Services (2014)</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Grew to a multi-specialty clinic by welcoming Dr. Faisal Ahmed and Dr. Fatima Khan, introducing specialized orthodontics and periodontics under one roof.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 hover-card">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xl md:text-2xl z-10 shrink-0 shadow-sm absolute -left-8 md:-left-16 md:relative">💻</div>
              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl flex-grow">
                <h3 className="text-xl font-bold mb-2">Digital Transformation (2023)</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Implementing state-of-the-art AI diagnostics and 3D imaging technology to offer minimally invasive and highly precise treatments.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="technology" className="py-24 bg-light">
        <div className="w-full max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Advanced Technology</h2>
          <p className="max-w-[600px] mx-auto mt-4 mb-16 text-muted text-lg">We invest in the latest dental innovations to ensure your comfort and the highest quality clinical outcomes.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover-card">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center text-2xl mx-auto mb-6 text-primary">🖨️</div>
              <h3 className="font-bold text-xl mb-4">3D CBCT Imaging</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">Providing high-resolution 3D views of your teeth and jaw for precise implant planning.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover-card">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center text-2xl mx-auto mb-6 text-primary">⚡</div>
              <h3 className="font-bold text-xl mb-4">Laser Dentistry</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">Minimally invasive gum treatments using soft-tissue lasers for faster healing and less discomfort.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-200 hover-card">
              <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center text-2xl mx-auto mb-6 text-primary">🧠</div>
              <h3 className="font-bold text-xl mb-4">AI Diagnostics</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">Advanced software that helps detect early-stage dental issues before they become visible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-10">Patient-First Care</h2>
            
            <div className="flex gap-6 items-start mb-8 hover-card p-4 -ml-4 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded shrink-0 flex items-center justify-center text-xl">🛡️</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Compassionate Environment</h4>
                <p className="text-muted text-[0.9rem]">We prioritize your comfort with a calming clinic atmosphere and sedation options for anxious patients.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start mb-8 hover-card p-4 -ml-4 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded shrink-0 flex items-center justify-center text-xl">💳</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Transparent Pricing</h4>
                <p className="text-muted text-[0.9rem]">No hidden costs. We provide detailed treatment plans and flexible financing to suit your budget.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start hover-card p-4 -ml-4 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded shrink-0 flex items-center justify-center text-xl">🕒</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Personalized Appointments</h4>
                <p className="text-muted text-[0.9rem]">We value your time, ensuring minimal wait times and dedicated one-on-one sessions with our experts.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px]">
            <img src="https://images.unsplash.com/photo-1598256989768-e4eb2eabdc54?auto=format&fit=crop&w=400&q=80" alt="Dentist consult" className="absolute top-0 left-0 w-[60%] h-[200px] md:h-[280px] object-cover rounded-2xl shadow-xl z-20" />
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80" alt="Dental tools" className="absolute bottom-0 right-0 w-[60%] h-[200px] md:h-[280px] object-cover rounded-2xl shadow-xl z-10" />
          </div>

        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="w-full max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Meet Our Experts</h2>
          <p className="max-w-[600px] mx-auto mt-4 mb-16 text-muted text-lg">Led by world-class clinicians dedicated to your smile.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 text-left hover-card group">
              <div className="overflow-hidden">
                <img src="/images/dr_zaidi.png" alt="Dr. Ali Zaidi" className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">Dr. Ali Zaidi</h3>
                <p className="font-semibold text-[0.85rem] text-primary mt-1">Clinical Director & General Dentist</p>
                <p className="mt-4 text-muted text-[0.9rem] leading-relaxed">With over 18 years of experience, Dr. Zaidi specializes in holistic dental care and complex restoration.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 text-left hover-card group">
              <div className="overflow-hidden">
                <img src="/images/dr_ahmed.png" alt="Dr. Faisal Ahmed" className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">Dr. Faisal Ahmed</h3>
                <p className="font-semibold text-[0.85rem] text-primary mt-1">Orthodontist</p>
                <p className="mt-4 text-muted text-[0.9rem] leading-relaxed">Specializing in Invisalign and advanced orthodontics, Dr. Ahmed has transformed over 2,000 smiles.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 text-left hover-card group">
              <div className="overflow-hidden">
                <img src="/images/dr_fatima.png" alt="Dr. Fatima Khan" className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">Dr. Fatima Khan</h3>
                <p className="font-semibold text-[0.85rem] text-primary mt-1">Periodontist & Implantologist</p>
                <p className="mt-4 text-muted text-[0.9rem] leading-relaxed">An expert in surgical implantology and gum health with a focus on minimally invasive techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
