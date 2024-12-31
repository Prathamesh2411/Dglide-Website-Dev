import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 w-full py-20 px-16">
        <div className="max-w-lg space-y-6">
          <h1 className="text-6xl font-bold leading-tight text-[#1a1a3f] font-sf-pro-display-bold">
            Get Started!
          </h1>
          <p className="text-2xl text-black font-sf-pro-text-regular">
            Streamline your Business, Build Relationships
          </p>
          <p className="text-black text-lg font-sf-pro-text-regular">
            Highly customizable Relationship management systems to make it work
            for your needs.
          </p>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className="h-12 px-8 bg-primary-gradient text-white hover:opacity-90 transition duration-200 font-sf-pro-display-semibold"
            >
              Schedule a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 border-[#5D9EFF] text-[#5D9EFF] hover:bg-blue-50 transition duration-200 font-sf-pro-display-semibold"
            >
              Start a Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <img
          src="./floating_mac.png"
          alt="Dashboard Preview"
          className="w-auto h-screen object-contain"
        />
      </div>
    </section>
  );
}
