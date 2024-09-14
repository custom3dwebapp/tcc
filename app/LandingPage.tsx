import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SovereignAI() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <div className="text-2xl font-semibold text-gray-800">
            Toronto Computing Company
          </div>
          <ul className="flex space-x-5">
            <li>
              <a
                href="#about"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition mr-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex justify-center items-center bg-gray-100 text-gray-800 py-24">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Empowering AI with Secure, Local Hardware Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            At Toronto Computing Company, we provide powerful AI hardware for
            local inference and training, keeping your data secure and encrypted
            at every step.
          </p>
          <Button className="px-6 py-3 bg-gray-800 text-white rounded-md">
            Get Started
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
          <p className="text-lg text-center text-gray-600 leading-relaxed">
            Toronto Computing Company specializes in secure, local AI hardware
            solutions for businesses that prioritize privacy and control. We
            empower organizations to train and deploy AI models locally without
            relying on cloud services, ensuring all data remains encrypted and
            secure.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border border-gray-200 shadow-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Local Inference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Run AI models locally on robust hardware, avoiding cloud
                  dependency for faster, more secure inference.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Encrypted Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Safely train AI models with advanced encryption, ensuring your
                  sensitive data remains fully protected.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All data is encrypted, both at rest and in transit,
                  safeguarding your information against unauthorized access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-10">
            Have questions about our hardware solutions? Reach out to our team
            for more information.
          </p>
          <Button className="px-6 py-3 bg-gray-800 text-white rounded-md">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="text-center text-white text-sm">
          &copy; 2024 Toronto Computing Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
