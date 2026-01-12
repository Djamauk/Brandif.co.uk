import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { showSuccess, showError } from "@/utils/toast"; // Assuming you have these toast utilities

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactFormSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Simulate API call
      console.log("Form submitted:", values);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      showSuccess("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      showError("Failed to send your message. Please try again.");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          Ready to elevate your brand?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Let's start a conversation about your next big move. Fill out the form below and we'll be in touch.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl text-left animate-fade-in-up delay-400">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} className="bg-gray-100 border-gray-300 text-gray-900" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} className="bg-gray-100 border-gray-300 text-gray-900" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-gray-100 border-gray-300 text-gray-900" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800">Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(123) 456-7890" {...field} className="bg-gray-100 border-gray-300 text-gray-900" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your project..." rows={5} {...field} className="bg-gray-100 border-gray-300 text-gray-900" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Submit Now
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;