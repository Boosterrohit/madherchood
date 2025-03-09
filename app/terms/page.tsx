import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | VehicleRent",
  description: "Read our Terms of Service to understand your rights and responsibilities when using VehicleRent.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the VehicleRent service, you agree to be bound by these Terms of Service. If you do not
          agree to these terms, please do not use our service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          VehicleRent provides a platform for users to rent vehicles from registered vendors. We do not own or operate
          any vehicles ourselves.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          You must create an account to use certain features of our service. You are responsible for maintaining the
          confidentiality of your account information and for all activities that occur under your account.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          You agree to use VehicleRent only for lawful purposes and in accordance with these Terms. You agree not to use
          the service:
        </p>
        <ul>
          <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail,"
            "chain letter," "spam," or any other similar solicitation
          </li>
          <li>
            To impersonate or attempt to impersonate VehicleRent, a VehicleRent employee, another user, or any other
            person or entity
          </li>
        </ul>

        <h2>5. Payments and Fees</h2>
        <p>
          Rental fees are set by vendors. VehicleRent charges a service fee for each transaction. All fees are
          non-refundable unless otherwise stated.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          VehicleRent is not responsible for the actions, content, information, or data of third parties. You expressly
          agree that your use of the service is at your sole risk.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of significant changes to these
          Terms by posting the new Terms on the site.
        </p>

        <h2>8. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at legal@vehiclerent.com.</p>
      </div>
    </div>
  )
}

