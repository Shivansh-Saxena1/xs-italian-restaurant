"use client";

import { useState } from "react";
import menuData from "@/data/menu.json";
import { clsx } from "clsx";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

  return (
    <div className="bg-[var(--color-cream)] min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-terracotta)] mb-6">Our Menu</h1>
          <p className="text-lg text-[var(--color-deep)]/80 max-w-2xl mx-auto font-light">
            Crafted with passion, our menu changes seasonally to ensure the freshest ingredients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {menuData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                "px-6 py-2 rounded-full font-serif transition-all duration-300 transform",
                activeCategory === category.id 
                  ? "bg-[var(--color-olive)] text-white scale-105 shadow-md" 
                  : "bg-white text-[var(--color-deep)]/80 hover:bg-[var(--color-olive)]/20 hover:text-[var(--color-deep)]"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[var(--color-olive)]/20 min-h-[500px]">
          {menuData.categories.map((category) => (
            <div 
              key={category.id} 
              className={clsx(
                "transition-opacity duration-500",
                activeCategory === category.id ? "block opacity-100 animate-in fade-in" : "hidden opacity-0"
              )}
            >
              <h2 className="font-serif text-4xl text-center text-[var(--color-deep)] mb-12 pb-4 border-b border-[var(--color-terracotta)]/20">
                {category.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="flex items-baseline justify-between mb-2 pb-1 border-b border-gray-100">
                      <h3 className="text-xl font-serif text-[var(--color-deep)] pr-4 group-hover:text-[var(--color-terracotta)] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-medium text-[var(--color-terracotta)] tabular-nums">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-[var(--color-deep)]/70 text-sm font-light leading-relaxed pr-8">
                      {item.description}
                    </p>
                    {item.isVegetarian && (
                      <span className="absolute top-1 right-14 text-xs bg-[var(--color-olive)]/20 text-[var(--color-olive)] px-2 py-0.5 rounded-full" title="Vegetarian">
                        V
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
