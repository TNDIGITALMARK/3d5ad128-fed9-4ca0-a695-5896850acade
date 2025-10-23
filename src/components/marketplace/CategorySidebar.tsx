'use client';

import { Monitor, Armchair, ShirtIcon, BookOpen, Home, Dumbbell, Package } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'electronics', name: 'Electronics', icon: Monitor },
  { id: 'furniture', name: 'Furniture', icon: Armchair },
  { id: 'apparel', name: 'Apparel', icon: ShirtIcon },
  { id: 'books', name: 'Books', icon: BookOpen },
  { id: 'home-goods', name: 'Home Goods', icon: Home },
  { id: 'sports', name: 'Sports', icon: Dumbbell },
  { id: 'toys', name: 'Toys', icon: Package }
];

const conditions = [
  { id: 'new', label: 'New' },
  { id: 'used', label: 'Used' }
];

export default function CategorySidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleCondition = (conditionId: string) => {
    setSelectedConditions(prev =>
      prev.includes(conditionId)
        ? prev.filter(id => id !== conditionId)
        : [...prev, conditionId]
    );
  };

  return (
    <aside className="bg-white rounded-lg p-6 shadow-card h-fit sticky top-20">
      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wide mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategories.includes(category.id);
            return (
              <label
                key={category.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCategory(category.id)}
                  className="w-4 h-4 text-[hsl(var(--accent))] border-gray-300 rounded focus:ring-[hsl(var(--accent))] cursor-pointer"
                />
                <Icon className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <span className="text-sm text-[hsl(var(--foreground))]">{category.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Condition Section */}
      <div>
        <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wide mb-4">
          Condition
        </h3>
        <div className="space-y-2">
          {conditions.map((condition) => {
            const isSelected = selectedConditions.includes(condition.id);
            return (
              <label
                key={condition.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCondition(condition.id)}
                  className="w-4 h-4 text-[hsl(var(--accent))] border-gray-300 rounded focus:ring-[hsl(var(--accent))] cursor-pointer"
                />
                <span className="text-sm text-[hsl(var(--foreground))]">{condition.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
