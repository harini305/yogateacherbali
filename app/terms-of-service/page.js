import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description: "Read our Terms of Service to understand your rights, responsibilities, and usage policies. Clear, transparent, and easy to follow.",
  alternates: { canonical: "/terms-of-service" },
};

// Text reproduced from the original Terms of Service (effective 7 August 2024).
// Not changed: wording. Handled conservatively and flagged for the owner:
//   - section 8 contains the unfinished placeholder "[Insert Jurisdiction]";
//   - section 10 lists a phone number (08113867337) that matches no other
//     published number, so only the email is shown;
//   - the template sentence "Feel free to customize this draft…" is omitted.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      effective="August 7th, 2024"
      notice="Section 8 (Governing Law) is awaiting confirmation of the governing jurisdiction by YogaFX."
    >
      <h2>Introduction</h2>
      <p>
        Welcome to YogaFX Teacher Training. These Terms of Service (“Terms”) govern your use of our website https://yogafxteachertraining.com (the “Site”) and the services we
        provide. By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Site.
      </p>

      <h2>1. Use of Our Site</h2>
      <p>1.1 Eligibility: You must be at least 18 years old to use our Site. By using our Site, you represent and warrant that you meet this age requirement.</p>
      <p>
        1.2 Account Registration: To access certain features of our Site, you may need to register for an account. You agree to provide accurate, current, and complete
        information during the registration process and to update such information to keep it accurate, current, and complete.
      </p>
      <p>
        1.3 Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You
        agree to notify us immediately of any unauthorized use of your account.
      </p>

      <h2>2. Services and Payments</h2>
      <p>2.1 Services: We offer various yoga teacher training programs and related services. The details, including fees and schedules, are provided on our Site.</p>
      <p>
        2.2 Payments: All payments for our services must be made through the payment methods provided on our Site. By providing payment information, you represent and
        warrant that you are authorized to use the payment method.
      </p>
      <p>2.3 Refunds: Our refund policy is outlined on our Site. Please review it carefully before making a purchase.</p>

      <h2>3. User Conduct</h2>
      <p>3.1 Prohibited Activities: You agree not to engage in any of the following prohibited activities:</p>
      <ul>
        <li>Violating any applicable laws or regulations.</li>
        <li>Infringing upon or violating our intellectual property rights or the rights of others.</li>
        <li>Using our Site to transmit spam, viruses, or other harmful software.</li>
        <li>Engaging in any conduct that could damage, disable, or impair the operation of our Site.</li>
      </ul>
      <p>
        3.2 User Content: If you submit or post any content on our Site, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display
        such content for the purposes of operating and providing our services.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        4.1 Ownership: All content on our Site, including text, graphics, logos, and images, is the property of YogaFX Teacher Training or its licensors and is protected by
        copyright, trademark, and other intellectual property laws.
      </p>
      <p>
        4.2 Limited License: We grant you a limited, non-exclusive, non-transferable license to access and use our Site for personal and non-commercial purposes. You may not
        reproduce, distribute, or create derivative works from our content without our prior written consent.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        5.1 Third-Party Links: Our Site may contain links to third-party websites or services. We do not endorse or control these third-party websites and are not responsible
        for their content or practices. Use these links at your own risk.
      </p>
      <p>5.2 Third-Party Service Providers: We use third-party service providers to assist in operating our Site and providing our services. These providers include:</p>
      <ul>
        <li>Wufoo: For handling our enrollment forms.</li>
        <li>Paypal: For processing payments.</li>
        <li>Google Analytics: For analyzing site usage.</li>
        <li>Facebook Pixel: For tracking and marketing purposes.</li>
        <li>Microsoft Clarity: For website analytics.</li>
      </ul>

      <h2>6. Disclaimers and Limitation of Liability</h2>
      <p>
        6.1 Disclaimer of Warranties: Our Site and services are provided “as is” and “as available” without warranties of any kind, either express or implied. We do not
        warrant that our Site will be uninterrupted, error-free, or free of viruses or other harmful components.
      </p>
      <p>
        6.2 Limitation of Liability: To the maximum extent permitted by law, YogaFX Teacher Training shall not be liable for any indirect, incidental, special, consequential,
        or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses,
        resulting from (a) your use or inability to use our Site; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any
        interruption or cessation of transmission to or from our Site; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Site by any
        third party; (e) any errors or omissions in any content; and (f) any defamatory, offensive, or illegal conduct of any third party.
      </p>

      <h2>7. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless YogaFX Teacher Training and its affiliates, officers, directors, employees, and agents from and against any claims,
        liabilities, damages, losses, and expenses, including without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access
        to or use of our Site or your violation of these Terms.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of <mark>jurisdiction not yet specified</mark>, without regard to its conflict of law
        principles.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our Site. Your continued use of the Site after any changes
        indicates your acceptance of the updated Terms.
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions or concerns about these Terms, please contact us at:</p>
      <p>
        YogaFX Teacher Training
        <br />
        Email: <a href="mailto:info@yogafx.com">info@yogafx.com</a>
      </p>
      <p>By using our Site, you agree to these Terms of Service.</p>
    </LegalPage>
  );
}
