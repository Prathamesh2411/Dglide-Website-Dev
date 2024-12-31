import { Card, CardContent } from "./ui/card";

export function FeatureCard({ title, description, icon: Icon }) {
  return (
    <Card className="bg-blue-700 text-white border-none">
      <CardContent className="p-6">
        <Icon className="w-8 h-8 mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </CardContent>
    </Card>
  );
}
