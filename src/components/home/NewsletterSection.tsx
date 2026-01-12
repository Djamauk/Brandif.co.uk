import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { showSuccess, showError } from "@/utils/toast"; // Assuming you have these toast utilities

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const NewsletterSection = () => {
  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof newsletterFormSchema>) => {
    try {
      // Simulate API call
      console.log("Newsletter subscribed:", values);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      showSuccess("Thanks for subscribing to our newsletter!");
      form.reset();
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      showError("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gray-100 text-center">
      <div className="container mx-auto px-6 max-w-3xl animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Join our newsletter for the latest updates.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Stay informed about industry insights, marketing trends, and exclusive offers from [Agency Name].
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="youremail@gmail.com"
                      {...field}
                      className="h-12 text-lg bg-white border-gray-300 text-gray-900"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="h-12 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Get Started
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default NewsletterSection;