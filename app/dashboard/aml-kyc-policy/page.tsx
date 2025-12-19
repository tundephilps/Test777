const AMLKYCPolicy = () => {
  return (
    <div className="bg-[#081A26] mx-auto px-4 py-12 text-gray-500">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">
        AML and KYC Policy
      </h1>

      {/* 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          1) Purpose and Scope
        </h2>
        <p className="mb-3">
          This AML and KYC Policy outlines the measures and controls implemented
          by <strong>Canada777</strong> to prevent and detect money laundering
          (ML), terrorist financing (TF), and other financial crimes.
        </p>
        <p className="mb-3">
          It applies to all players, staff, agents, and third-party service
          providers engaged with our online casino operations.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Financial Action Task Force (FATF) Recommendations</li>
          <li>EU 5th/6th AML Directives (where applicable)</li>
          <li>
            Proceeds of Crime and Terrorist Financing Acts in our operating
            jurisdictions
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          2) Objectives
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Verify the identity of all customers before onboarding</li>
          <li>Monitor transactions to detect suspicious activity</li>
          <li>Maintain accurate customer and transaction records</li>
          <li>Train staff to recognize suspicious behavior</li>
          <li>Cooperate with regulatory and law enforcement authorities</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          3) Customer Due Diligence (KYC)
        </h2>

        <h3 className="font-semibold mb-2">3.1 Identity Verification</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Government-issued photo ID</li>
          <li>Utility bill or bank statement (last 3 months)</li>
          <li>Proof of payment method ownership</li>
        </ul>

        <h3 className="font-semibold mb-2">3.2 Enhanced Due Diligence (EDD)</h3>
        <ul className="list-disc list-inside mb-3 space-y-1">
          <li>Transactions exceeding €2,000 (or equivalent)</li>
          <li>High-risk jurisdictions</li>
          <li>Suspicious or inconsistent behavior</li>
        </ul>
        <p>
          EDD measures may include video verification, source of funds checks,
          and continuous monitoring.
        </p>
      </section>

      {/* 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          4) Risk Assessment
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Geographic location</li>
          <li>Transaction volume and frequency</li>
          <li>Payment methods used</li>
          <li>Behavioral patterns</li>
        </ul>
      </section>

      {/* 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          5) Ongoing Monitoring
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Automated monitoring of deposits and withdrawals</li>
          <li>Manual review of flagged accounts</li>
          <li>Suspension of accounts under investigation</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          6) Reporting Suspicious Activity
        </h2>
        <p className="mb-2">
          Suspicious activities are reported to the Money Laundering Reporting
          Officer (MLRO).
        </p>
        <p>
          The MLRO files Suspicious Activity Reports (SARs) with the relevant
          Financial Intelligence Unit. Tipping-off is strictly prohibited.
        </p>
      </section>

      {/* 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          7) Record Keeping
        </h2>
        <p>
          All records are securely retained for at least five (5) years and are
          accessible only to authorized compliance personnel.
        </p>
      </section>

      {/* 8 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          8) PEPs & Sanctions
        </h2>
        <p>
          Players are screened against PEP and sanctions lists. High-risk
          individuals require senior management approval and EDD.
        </p>
      </section>

      {/* 9 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          9) Training and Awareness
        </h2>
        <p>All relevant staff receive initial and annual AML/KYC training.</p>
      </section>

      {/* 10 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          10) Internal Controls and Auditing
        </h2>
        <p>
          The MLRO enforces this policy. Internal audits are conducted annually
          and the policy is reviewed at least once per year.
        </p>
      </section>

      {/* 11 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          11) Disciplinary Measures
        </h2>
        <p>
          Non-compliance may result in disciplinary action, regulatory
          penalties, or criminal prosecution.
        </p>
      </section>

      {/* 12 */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          12) Policy Approval
        </h2>
        <p>
          <strong>Approved by:</strong> Mark Martin, Compliance Officer / MLRO
        </p>
        <p>
          <strong>Effective Date:</strong> 17/08/2025
        </p>
        <p>
          <strong>Next Review Date:</strong> 17/08/2026
        </p>
      </section>
    </div>
  );
};

export default AMLKYCPolicy;
