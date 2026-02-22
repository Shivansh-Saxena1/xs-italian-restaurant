import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-terracotta)] mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-[var(--color-deep)]/80 max-w-3xl mx-auto font-light">
            A family tradition of bringing joy and exceptional Italian culinary heritage to our neighborhood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop"
              alt="Chef preparing pasta"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-lg text-[var(--color-deep)]/90 leading-relaxed font-light">
            <h2 className="font-serif text-3xl text-[var(--color-deep)] mb-4">Passione in Cucina</h2>
            <p>
              It started three generations ago in a small village nestled in the hills of Tuscany. Nonna Rosa taught us that food isn&apos;t just sustenance—it&apos;s love made visible. Every dish we serve at X&apos;s Italian begins with that same philosophy.
            </p>
            <p>
              We believe in the power of simplicity. A perfectly ripe San Marzano tomato, the gentle peppery bite of cold-pressed olive oil, and pasta rolled by hand just before the lunch rush. There are no shortcuts, only time-honored techniques.
            </p>
            <p>
              When you step through our doors, you aren&apos;t just a customer; you&apos;re joining our table. We invite you to slow down, pour a glass of Barbera, and savor the moments with the people you cherish.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" alt="Restaurant Ambiance" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2732&auto=format&fit=crop" alt="Pouring Wine" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2670&auto=format&fit=crop" alt="Fresh Ingredients" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
