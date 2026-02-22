import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroParticles } from "@/components/HeroParticles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroParticles />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop"
            alt="Interior of rustic Italian restaurant"
            fill
            priority
            className="object-cover mix-blend-multiply opacity-90"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto space-y-6 pointer-events-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold italic tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Benvenuti
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Experience the warmth, passion, and authentic flavors of Italy right in your neighborhood.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-hover">
                Book a Table
              </Button>
            </Link>
            <Link href="/menu" passHref>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg text-white border-white/50 backdrop-blur-sm shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-hover hover:border-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 px-4 bg-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl text-[var(--color-terracotta)]">Our Story</h2>
          <p className="text-lg text-[var(--color-deep)]/80 leading-relaxed font-light">
            Founded with a passion for bringing true Italian culinary heritage to our community, X&apos;s Italian uses time-honored recipes passed down through generations. From hand-rolled pasta made fresh daily to our slow-simmered sauces, every dish is a celebration of simple, exceptional ingredients and love.
          </p>
          <Link href="/about" className="inline-block pt-4">
            <span className="text-[var(--color-olive)] font-medium border-b-2 border-transparent hover:border-[var(--color-olive)] transition-colors">
              Read More About Us →
            </span>
          </Link>
        </div>
      </section>

      {/* Highlighted Dishes */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[var(--color-deep)] mb-4">Chef&apos;s Favorites</h2>
            <p className="text-[var(--color-deep)]/60">A glimpse into our most beloved creations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1621996311210-2a132bfbc128?q=80&w=2670&auto=format&fit=crop" 
                fill
                alt="Margherita Pizza"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-1">Pizza Margherita Estiva</h3>
                <p className="text-white/80 font-light text-sm">San Marzano tomatoes, fresh mozzarella, basil</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] cursor-pointer">
              <Image 
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2670&auto=format&fit=crop" 
                fill
                alt="Pasta Carbonara"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-1">Rigatoni Alla Carbonara</h3>
                <p className="text-white/80 font-light text-sm">Guanciale, pecorino romano, black pepper, egg yolk</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] cursor-pointer">
              <Image 
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2670&auto=format&fit=crop" 
                fill
                alt="Tiramisu"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-1">Tiramisù Classico</h3>
                <p className="text-white/80 font-light text-sm">Espresso-soaked ladyfingers, mascarpone cream, cocoa</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 w-full flex justify-center">
            <Link href="/menu" passHref>
              <Button variant="secondary" size="lg">Explore Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
