import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Cecil Denny Driving School. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Contact information (name, phone number, email address)</li>
              <li>Driving lesson preferences and scheduling information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="font-display text-xl font-bold mt-8">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Schedule and provide driving lessons</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send you important updates about our services</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="font-display text-xl font-bold mt-8">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties. We may share information with
              service providers who assist us in operating our website,
              subject to confidentiality obligations.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              4. Data Security
            </h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over
              the Internet is 100% secure.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              5. Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> {BUSINESS.email}
              <br />
              <strong>Phone:</strong> {BUSINESS.phone}
              <br />
              <strong>Address:</strong> {BUSINESS.address.street},{" "}
              {BUSINESS.address.city} {BUSINESS.address.postcode}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
