import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | VehicleRent",
  description: "Learn about how VehicleRent collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>
          This Privacy Policy describes how VehicleRent ("we," "our," or "us") collects, uses, and shares your personal
          information when you use our website and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as:</p>
        <ul>
          <li>Personal information (e.g., name, email address, phone number)</li>
          <li>Payment information</li>
          <li>Driver's license information</li>
          <li>Vehicle preferences and rental history</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and customer service requests</li>
          <li>Communicate with you about products, services, offers, and events</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>
          We may share your personal information with vendors, service providers, and business partners who need access
          to such information to carry out work on our behalf.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized
          access, disclosure, alteration, and destruction.
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You can choose not to provide certain information, but this may limit your ability to use certain features of
          our service. You can also opt out of receiving promotional communications from us by following the
          instructions in those messages.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the
          date at the top of this policy.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@vehiclerent.com.</p>
      </div>
    </div>
  )
}

