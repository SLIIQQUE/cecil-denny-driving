import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Cecil Denny Driving School. Please read our terms and conditions carefully.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By booking and receiving driving lessons from {BUSINESS.name}, you
              agree to be bound by these Terms of Service.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              2. Booking and Cancellation
            </h2>
            <p className="text-muted-foreground">
              Lessons must be cancelled at least 24 hours in advance. Failure
              to provide adequate notice may result in the lesson being charged
              in full. We reserve the right to cancel lessons due to
              instructor illness or adverse weather conditions.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              3. Payment Terms
            </h2>
            <p className="text-muted-foreground">
              Payment is expected at the end of each lesson unless other
              arrangements have been agreed upon. We accept cash and bank
              transfers.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              4. Lesson Conduct
            </h2>
            <p className="text-muted-foreground">
              Learners must hold a valid provisional driving licence and comply
              with all DVSA regulations during lessons. We reserve the right to
              terminate lessons if the learner is deemed unfit to drive or
              behaves inappropriately.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              5. Liability
            </h2>
            <p className="text-muted-foreground">
              {BUSINESS.name} is covered by appropriate business insurance.
              We are not liable for any loss or damage arising from the use of
              our services, except in cases of proven negligence.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              6. Changes to Terms
            </h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes
              will be effective upon posting on our website.
            </p>

            <h2 className="font-display text-xl font-bold mt-8">
              7. Contact
            </h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> {BUSINESS.email}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
