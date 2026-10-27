import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Welcome to YogaFX Teacher Training's Privacy Policy. We respect your privacy and are committed to protecting your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

// Text reproduced from the original Privacy Policy (effective 7 August 2024).
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effective="7 August 2024">
      <h2>Introduction</h2>
      <p>
        Welcome to YogaFX Teacher Training’s Privacy Policy. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains
        how we collect, use, and share information about you when you visit our website https://yogafxteachertraining.com (the “Site”).
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Personal Information: Name, email address, phone number, and other contact details you provide when you register or make an inquiry.</li>
        <li>Payment Information: Credit card details and billing information to process transactions.</li>
        <li>Usage Information: Information about how you use our Site, such as your IP address, browser type, pages visited, and time spent on our Site.</li>
        <li>Cookies and Tracking Technologies: We use cookies and similar technologies to track your activity on our Site and hold certain information.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>To Provide and Maintain Our Services: To process your registration, manage your account, and provide customer support.</li>
        <li>To Process Transactions: To handle payments and deliver products or services you have purchased.</li>
        <li>To Improve Our Site: To understand how users interact with our Site and improve our content and services.</li>
        <li>To Communicate with You: To send you newsletters, marketing materials, and other information that may be of interest to you.</li>
        <li>To Ensure Security: To detect and prevent fraud and other harmful activities.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>We do not share your personal information with third parties except in the following circumstances:</p>
      <ul>
        <li>With Your Consent: When you give us explicit permission to share your information.</li>
        <li>
          Service Providers: We share your information with third-party service providers who assist us in operating our Site, processing transactions, and providing
          services. These service providers include: Wufoo: For handling our enrollment forms. Paypal: For processing payments. Google Analytics: For analyzing site usage and
          improving our website. Facebook Pixel: For tracking and marketing purposes. Microsoft Clarity: For website analytics and user experience insights.
        </li>
        <li>Legal Requirements: When we are required to do so by law or in response to a legal request.</li>
      </ul>

      <h2>Your Choices</h2>
      <p>You have the following choices regarding your information:</p>
      <ul>
        <li>Access and Update: You can access and update your personal information by contacting us.</li>
        <li>Opt-Out: You can opt out of receiving marketing emails from us by following the unsubscribe instructions in those emails.</li>
        <li>Cookie Settings: You can set your browser to refuse cookies or to alert you when cookies are being sent.</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2>Children’s Privacy</h2>
      <p>Our Site is not intended for children under the age of 13, and we do not knowingly collect personal information from children.</p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Site. Your continued use of the Site
        after any changes indicates your acceptance of the updated Privacy Policy.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p>
        YogaFX Teacher Training
        <br />
        Email: <a href="mailto:info@yogafx.com">info@yogafx.com</a>
        <br />
        Phone: 08113888330
      </p>
      <p>By using our Site, you consent to our Privacy Policy.</p>

      <h2>Acknowledgment</h2>
      <p>By using our Site, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
    </LegalPage>
  );
}
