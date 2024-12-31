import { FormProvider } from "react-hook-form";
import { Form, FormControl, FormItem } from "./src/components/ui/form";
import { Input } from "./src/components/ui/input";
import { Button } from "./src/components/ui/button";

export function NewsletterSection({ methods }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-lg font-bold mb-6">Subscribe to our Newsletter</h4>
      <FormProvider {...methods}>
        <Form {...methods}>
          <FormItem>
            <FormControl>
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 mb-4"
              />
            </FormControl>
          </FormItem>
          <Button className="w-full md:w-auto">Subscribe</Button>
        </Form>
      </FormProvider>
    </div>
  );
}
