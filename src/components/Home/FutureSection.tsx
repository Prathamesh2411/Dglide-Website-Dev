import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-12 bg-blue-600 text-white">
      <h2 className="text-3xl font-bold text-center mb-4">
        The Future is Here
      </h2>
      <p className="text-xl text-center mb-12">
        User-friendly and innovative—like plug-and-play for businesses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="bg-blue-700 text-white border-none">
            <CardContent className="p-6">
              <feature.icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
