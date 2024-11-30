import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  FileText,
  Zap,
  CheckCircle,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-[9] w-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src=""
              height={40}
              width={40}
              alt="ResumeX"
              className="rounded-full border-2 border-white shadow-md"
            />{" "}
            <span className="text-xl font-bold text-white md:text-2xl">
              ResumeX
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <LoginLink>
              <Button
                variant="ghost"
                className="text-white hover:text-gray-100 hover:bg-purple-700"
              >
                Sign In
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Sign Up
              </Button>
            </RegisterLink>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-100 px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Craft Your Perfect Resume with{" "}
              <span className="text-purple-600">AI</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              ResumeX uses cutting-edge AI to help you create a standout resume
              in minutes. Tailor your professional story with ease and land your
              dream job.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <RegisterLink>
                  <Button className="flex items-center justify-center px-8 py-3 text-base font-medium md:px-10 md:py-4 md:text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </RegisterLink>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  className="flex items-center justify-center px-8 py-3 text-base font-medium md:px-10 md:py-4 md:text-lg"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose ResumeX?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Our AI-powered platform offers unparalleled features to make
                your resume stand out.
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <Bot className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">
                    AI-Powered Suggestions
                  </h3>
                  <p className="mt-2 text-center text-base text-gray-500">
                    Get intelligent recommendations for skills, experiences, and
                    achievements to highlight.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">
                    Industry-Specific Templates
                  </h3>
                  <p className="mt-2 text-center text-base text-gray-500">
                    Choose from a wide range of professionally designed
                    templates tailored to your industry.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">
                    Instant Optimization
                  </h3>
                  <p className="mt-2 text-center text-base text-gray-500">
                    Our AI analyzes your resume in real-time, providing instant
                    feedback to improve your chances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Boost Your Job Search
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  ResumeX doesn't just create resumes; it enhances your entire
                  job search process. Here's how:
                </p>
                <div className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-500 text-white">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        ATS-Friendly Formats
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Our resumes are optimized for Applicant Tracking
                        Systems, increasing your chances of getting past initial
                        screenings.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-500 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        LinkedIn Profile Sync
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Seamlessly sync your resume content with your LinkedIn
                        profile to maintain consistency across platforms.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-500 text-white">
                        <Star className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Interview Preparation
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Get AI-powered interview questions based on your resume
                        content to help you prepare for your next interview.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <Image
                  className="relative mx-auto"
                  width={490}
                  height={590}
                  src="https://picsum.photos/300"
                  alt="Resume preview"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-gradient-to-br from-purple-100 to-indigo-100 py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Users Say
            </h2>
            <div className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
              {[
                {
                  name: "Sarah J.",
                  role: "Software Engineer",
                  image: "/testimonial-1.jpg",
                  quote:
                    "ResumeX helped me land my dream job at a top tech company. The AI suggestions were spot-on!",
                },
                {
                  name: "Michael T.",
                  role: "Marketing Manager",
                  image: "/testimonial-2.jpg",
                  quote:
                    "I was skeptical at first, but the results speak for themselves. My interview rate has doubled since using ResumeX.",
                },
                {
                  name: "Emily R.",
                  role: "Recent Graduate",
                  image: "/testimonial-3.jpg",
                  quote:
                    "As a new grad, I was struggling to create a compelling resume. ResumeX made it easy and professional.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-purple-600">
                        {testimonial.role}
                      </p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:align-center sm:flex sm:flex-col">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-center sm:text-4xl">
                Pricing Plans
              </h2>
              <p className="mt-5 text-xl text-gray-500 sm:text-center">
                Choose the perfect plan for your needs
              </p>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  description: "Perfect for trying out ResumeX",
                  features: ["1 resume", "Basic templates", "AI suggestions"],
                },
                {
                  name: "Pro",
                  price: "$15",
                  description: "For job seekers who want more",
                  features: [
                    "Unlimited resumes",
                    "Premium templates",
                    "Advanced AI features",
                    "LinkedIn integration",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For teams and organizations",
                  features: [
                    "All Pro features",
                    "Team collaboration",
                    "Custom branding",
                    "Priority support",
                  ],
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500">
                      {tier.description}
                    </p>
                    <p className="mt-8">
                      <span className="text-4xl font-extrabold text-gray-900">
                        {tier.price}
                      </span>
                      {tier.name !== "Enterprise" && (
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      )}
                    </p>
                    <RegisterLink>
                      <Button className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center">
                        {tier.name === "Enterprise"
                          ? "Contact us"
                          : "Get started"}
                      </Button>
                    </RegisterLink>
                  </div>
                  <div className="px-6 pt-6 pb-8">
                    <h4 className="text-sm font-medium text-gray-900">
                      What's included
                    </h4>
                    <ul className="mt-6 space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex space-x-3">
                          <CheckCircle
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-500">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-100 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-gray-900">
              Ready to transform your career?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
              Join thousands of professionals who've boosted their job search
              with ResumeX.
            </p>
            <div className="mt-8 flex justify-center">
              <RegisterLink>
                <Button className="flex items-center justify-center px-8 py-3 text-base font-medium md:px-10 md:py-4 md:text-lg">
                  Start Building Your Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </RegisterLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto bg-gradient-to-br from-purple-600 to-indigo-700 py-6 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-sm md:text-base">
            &copy; 2024{" "}
            <a
              href="https://tarin-agarwal.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-200"
            >
              Tarin Agarwal
            </a>{" "}
            | ResumeX
          </p>
        </div>
      </footer>
    </div>
  );
}
