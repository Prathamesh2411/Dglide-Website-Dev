import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export function SolutionCard({ title, description, image }) {
  return (
    <Card className="h-full">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Button variant="link" className="p-0">
          Contact Us for a Demo
        </Button>
      </CardContent>
    </Card>
  );
}
