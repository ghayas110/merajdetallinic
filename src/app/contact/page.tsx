export default function Contact() {
  return (
    <>
      <section className="py-20 md:py-28 bg-light border-b border-gray-200">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] font-bold leading-tight">Contact Us</h1>
          <p className="text-[1.1rem] text-muted mt-4 max-w-[600px] mx-auto">
            Have questions about your dental health or ready to schedule your visit? We&apos;re here to provide the expert care you deserve.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form Section */}
            <div className="p-8 md:p-12 lg:w-[60%] border-r border-gray-100">
              <h2 className="text-2xl font-bold mb-8">Book an Appointment</h2>
              
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="font-semibold text-[0.9rem] text-gray-700">First Name <span className="text-red-500">*</span></label>
                    <input type="text" id="firstName" name="firstName" placeholder="John" required className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="font-semibold text-[0.9rem] text-gray-700">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" id="lastName" name="lastName" placeholder="Doe" required className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-[0.9rem] text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-semibold text-[0.9rem] text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" name="phone" placeholder="+92 333 3021554" required className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-semibold text-[0.9rem] text-gray-700">Interested Service</label>
                    <select id="service" name="service" className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem] bg-white appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      <option value="general">General Checkup & Cleaning</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="orthodontics">Orthodontics (Braces/Invisalign)</option>
                      <option value="implants">Dental Implants</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="font-semibold text-[0.9rem] text-gray-700">Preferred Date</label>
                    <input type="date" id="date" name="date" className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold text-[0.9rem] text-gray-700">Additional Notes / Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="How can we help you?" className="px-4 py-3 border border-gray-300 rounded hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[0.95rem] resize-y"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full mt-4 text-[1.1rem] py-4">Request Appointment</button>
                <p className="text-[0.85rem] text-muted text-center mt-2">
                  By submitting this form, you agree to our privacy policy. We will contact you to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="lg:w-[40%] bg-slate text-white flex flex-col p-0">
              <div className="p-8 md:p-12 flex-grow">
                <h3 className="text-xl font-bold mb-8 text-white">Contact Information</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0 border border-white/20">📍</div>
                    <div>
                      <h4 className="font-bold text-[1.05rem] mb-1">Visit Us</h4>
                      <p className="text-white/80 text-[0.95rem] leading-relaxed">
                        House No.B14, Sector Z 6 Sector Z<br/>
                        Gulshan-e-Maymar, Karachi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0 border border-white/20">📞</div>
                    <div>
                      <h4 className="font-bold text-[1.05rem] mb-1">Call Us</h4>
                      <p className="text-white/80 text-[0.95rem] leading-relaxed">
                        Phone: +92 333 3021554
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0 border border-white/20">✉️</div>
                    <div>
                      <h4 className="font-bold text-[1.05rem] mb-1">Email Us</h4>
                      <p className="text-white/80 text-[0.95rem] leading-relaxed">
                        info@merajdentalclinic.com<br/>
                        appointments@merajdentalclinic.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center shrink-0 border border-white/20">🕒</div>
                    <div>
                      <h4 className="font-bold text-[1.05rem] mb-1">Hours</h4>
                      <div className="flex flex-col gap-1 text-white/80 text-[0.95rem]">
                        <div className="flex justify-between w-[200px]"><span>Mon - Sun:</span> <span>Opens 4:00 PM</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-[#d32f2f] text-white p-6 flex items-center gap-4">
                <div className="text-3xl">🚨</div>
                <div>
                  <h2 className="text-white font-bold italic mb-1">Emergency?</h2>
                  <p className="text-white/90 text-[0.9rem] leading-tight">
                    Severe pain, a knocked-out tooth, or bleeding? Don&apos;t wait.<br/>We provide priority emergency dental care.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden flex items-center justify-center">
        {/* Decorative Grid Background to easily replace with an iframe later */}
        <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: `20px 20px`
        }}></div>
       
      </section>
    </>
  );
}
