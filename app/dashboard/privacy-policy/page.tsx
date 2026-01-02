import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaCookie,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FaUserSecret className="text-2xl" />,
      title: "1) Information Gathered",
      content:
        "You will be asked to submit information such as your name, address, phone number, and email address when you register. This information will be saved on our secure servers alone by us and will never be shared with any third parties.\n\nBy registering to use our services, you acknowledge that you have read, understood, and agreed to the Canada777 Terms and Conditions.",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "2) Protection of Information",
      content:
        "Canada777.com is scanned for vulnerabilities on a regular basis to guarantee that your information is kept as safe as possible.\n\nAll personal information is held on a secure network, and only a small number of people with the appropriate security clearance can access or alter it.\n\nAny information provided is kept strictly confidential at all times.\n\nAny payment information you enter is encrypted using the most up-to-date SSL technology to protect you from malicious or fraudulent internet behavior.\n\nNo payment information is retained on our servers; instead, it is sent via a secure gateway provider for maximum security.",
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "3) Use of Information",
      content:
        "We will only use your personal information to reply to inquiries or provide you with information about your account, such as available withdrawals or bonuses.\n\nWe may also send you emails on a regular basis to advise you of any seasonal promotions or offers to which you may be entitled and/or interested.",
    },
    {
      icon: <FaCookie className="text-2xl" />,
      title: "4) Cookies",
      content:
        "We use cookies (if you allow on your browser) to maximise your experience when navigating the site. This is to allow the site to pick up and recognise preferences based on your previous activity whilst playing with us, this allows us to ensure that when making any changes to the site we can establish what works well and what doesn't. This will help us to improve the overall experience that our players have when updating certain aspects of the site.",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "5) CAN SPAM Act",
      content:
        "The CAN-SPAM Act defines standards for commercial email, establishes requirements for commercial messaging, allows recipients the ability to have emails sent to them stopped, and spells out harsh consequences for violations.\n\nTo be in accordance with CAN-SPAM, we agree to the following:\n\n• Allow users to unsubscribe by using the link at the bottom of each email.\n• Include the physical address of our business or site headquarters.\n• Monitor third-party email marketing services for compliance, if one is used.\n• Not use false or misleading subjects or email addresses.\n• Identify the message as an advertisement in some reasonable way.\n• Honour opt-out/unsubscribe requests quickly.",
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "6) Security Policy",
      content:
        "Canada777 assures that our players information is kept safe and secure at all times by using the most up-to-date software available. We have a team of highly qualified Casino Hosts on hand to set your mind at ease and deal with even the most difficult problems.\n\nWith an ever-expanding internet market, trusting an online casino can be a challenging decision. Our basic values at Canada777 are honesty and integrity, and all of our games are independently audited to guarantee that all of our players have a fair chance at the jackpots. We can be confident that your wins will be paid directly to your account as soon as possible thanks to our expert cashier team.\n\nBy implementing the newest 128-bit Secure Socket Layer (SSL) encryption technology, Canada777 can ensure that your transactions are always 100% secure. Sensitive information is safely transmitted over the internet to our secure server, which is protected by the latest firewall technology.\n\nOur Casino Support is something we take pride in, and our hosts are here for support 24/7 to make your time with us as enjoyable as possible. Our hosts are trained in all facets of the casino and can handle any inquiry from beginning to end, ensuring that you are treated efficiently and professionally at all times.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#081A26] lg:p-6 p-2">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h1 className="text-white text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            This page is for the more concerned player to provide you assurance
            that your privacy will be maintained as well as a full disclosure of
            the information that we gather and how it will and will not be used.
            We treat our players data as if it were our own, and we take great
            care to ensure that the greatest levels of personal privacy are
            maintained at all times.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 text-red-500">
                  {section.icon}
                </div>
                <h2 className="text-white text-2xl font-bold pt-2">
                  {section.title}
                </h2>
              </div>
              <div className="pl-16">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-slate-300 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
