import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-200 bg-slate text-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 border-b border-white/10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <img src="/images/logo.png" alt="Meraj Dental Clinic" className="w-[150px] brightness-0 invert" />
            </Link>
            <p className="mt-4 text-white/80 text-[0.95rem] leading-relaxed">
              Providing high-quality dental services with a patient-first approach. Your smile is our priority.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[1.1rem] text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-[0.95rem] text-white/80 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/services" className="text-[0.95rem] text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="text-[0.95rem] text-white/80 hover:text-white transition-colors">Patient Portal</Link></li>
              <li><Link href="#" className="text-[0.95rem] text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-[1.1rem] text-white mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-[0.95rem] text-white/80">
              <li>📞 +92 333 3021554</li>
              <li>✉️ info@merajdentalclinic.com</li>
              <li>📍 House No.B14, Sector Z 6 Sector Z<br/>Gulshan-e-Maymar, Karachi</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-[1.1rem] text-white mb-6">Newsletter</h4>
            <p className="text-[0.95rem] text-white/80">Subscribe for oral health tips.</p>
            <form className="flex gap-2 mt-4">
              <input type="email" placeholder="Email" className="flex-1 px-4 py-3 border border-white/20 rounded-sm bg-white/5 text-white focus:outline-none focus:border-primary transition-colors" required />
              <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-sm font-bold transition-colors">➤</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1200px] mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.85rem] text-white/60">© 2024 Meraj Dental Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="text-[0.85rem] text-white/80 hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="text-[0.85rem] text-white/80 hover:text-white transition-colors">Facebook</Link>
          <Link href="#" className="text-[0.85rem] text-white/80 hover:text-white transition-colors">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
