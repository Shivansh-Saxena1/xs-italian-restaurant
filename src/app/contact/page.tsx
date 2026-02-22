"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[var(--color-cream)] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-terracotta)] mb-6">Reservations & Contact</h1>
          <p className="text-lg text-[var(--color-deep)]/80 max-w-2xl mx-auto font-light">
            We are eager to welcome you. For parties larger than 6, please call us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Reservation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-[var(--color-olive)]/20">
            <h2 className="font-serif text-3xl text-[var(--color-deep)] mb-8">Book a Table</h2>
            
            {status === "success" ? (
              <div className="bg-[var(--color-olive)]/10 p-6 rounded-xl border border-[var(--color-olive)] text-center text-[var(--color-deep)]">
                <h3 className="text-xl font-serif text-[var(--color-olive)] mb-2">Reservation Requested!</h3>
                <p>Thank you. We will confirm your table shortly via email.</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                  Make another booking
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-[var(--color-deep)]">First Name</label>
                    <input required id="firstName" name="firstName" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-[var(--color-deep)]">Last Name</label>
                    <input required id="lastName" name="lastName" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-deep)]">Email Address</label>
                    <input required type="email" id="email" name="email" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-deep)]">Phone</label>
                    <input required type="tel" id="phone" name="phone" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium text-[var(--color-deep)]">Date</label>
                    <input required type="date" id="date" name="date" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-medium text-[var(--color-deep)]">Time</label>
                    <input required type="time" id="time" name="time" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guests" className="block text-sm font-medium text-[var(--color-deep)]">Guests</label>
                    <select id="guests" name="guests" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all bg-white">
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="requests" className="block text-sm font-medium text-[var(--color-deep)]">Special Requests</label>
                  <textarea id="requests" name="requests" rows={3} className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-terracotta)] focus:border-transparent outline-none transition-all resize-none"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg" disabled={status === "loading"}>
                  {status === "loading" ? "Requesting..." : "Request Reservation"}
                </Button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="space-y-12 py-4">
            <div>
              <h2 className="font-serif text-3xl text-[var(--color-deep)] mb-6">Find Us</h2>
              <ul className="space-y-6 text-[var(--color-deep)]/80">
                <li className="flex items-start">
                  <MapPin className="mr-4 text-[var(--color-terracotta)] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[var(--color-deep)]">Address</span>
                    123 Culinary Ave, Food City, FC 90210
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-4 text-[var(--color-terracotta)] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[var(--color-deep)]">Phone</span>
                    (555) 123-4567
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-4 text-[var(--color-terracotta)] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[var(--color-deep)]">Email</span>
                    hello@xsitalian.com
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-4 text-[var(--color-terracotta)] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[var(--color-deep)]">Hours</span>
                    <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                    <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative border border-[var(--color-olive)]/20 shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col text-gray-400">
                  <MapPin size={40} className="mb-2 text-gray-300" />
                  <span>Map placeholder mapping to address</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
