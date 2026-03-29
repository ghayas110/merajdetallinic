import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-[10px] z-[1000] border-b border-gray-200 shadow-sm py-4">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Meraj Dental Clinic Logo" className="h-14 w-auto" />
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/" className="font-medium text-[0.95rem] text-gray-900 relative hover:text-primary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-medium text-[0.95rem] text-gray-900 relative hover:text-primary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium text-[0.95rem] text-gray-900 relative hover:text-primary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium text-[0.95rem] text-gray-900 relative hover:text-primary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="flex">
          <Link href="/contact" className="btn btn-primary">Book Appointment</Link>
        </div>
      </div>
    </header>
  );
}
