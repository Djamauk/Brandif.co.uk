import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
            <CardHeader className="pb-4">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-bold text-gray-900">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base">
                123 Marketing Ave, Suite 400<br />
                Brand City, BC 12345
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-100">
            <CardHeader className="pb-4">
              <Phone className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-bold text-gray-900">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base">
                (123) 456-7890
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-200">
            <CardHeader className="pb-4">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl font-bold text-gray-900">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base">
                info@[agencyname].com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;