// components/sections/PricingSection.tsx
export function PricingSection() {
  return (
    <section className="py-20 px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Find the <span className="text-blue-600">Perfect Plan</span> for
            Your Business
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-4">✓</span>
              <span>Pricing customized to fit your business goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-4">✓</span>
              <span>Plans that evolve as your team and operations grow</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-4">✓</span>
              <span>Clear, no-surprise pricing for you</span>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="/api/placeholder/500/400"
            alt="Pricing Discussion"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
