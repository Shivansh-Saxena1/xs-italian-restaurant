import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold italic tracking-wider text-[var(--color-terracotta)] mb-4 block">
              X&apos;s Italian
            </span>
            <p className="text-sm text-[var(--color-cream)]/80 mb-6">
              Authentic Italian dining experience bringing the heart of Italy to your table with fresh, locally-sourced ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--color-cream)]/70 hover:text-[var(--color-terracotta)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[var(--color-cream)]/70 hover:text-[var(--color-terracotta)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[var(--color-cream)]/70 hover:text-[var(--color-terracotta)] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[var(--color-cream)]/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-serif">Contact</h3>
            <ul className="space-y-2 text-sm text-[var(--color-cream)]/80">
              <li>123 Culinary Ave</li>
              <li>Food City, FC 90210</li>
              <li className="pt-2">hello@xsitalian.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-serif">Hours</h3>
            <ul className="space-y-2 text-sm text-[var(--color-cream)]/80">
              <li><span className="font-medium text-white">Mon - Thu:</span> 11:00 AM - 10:00 PM</li>
              <li><span className="font-medium text-white">Fri - Sat:</span> 11:00 AM - 11:00 PM</li>
              <li><span className="font-medium text-white">Sunday:</span> 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-[var(--color-cream)]/60">
          <p>© {new Date().getFullYear()} X&apos;s Italian Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
