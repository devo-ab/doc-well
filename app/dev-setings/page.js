export default function page() {
  return (
    <article className="prose dark:prose-invert">
      <h1>🔧 Developer Settings</h1>
      <p>
        {" "}
        The Developer Settings page allows you to manage how your application connects to our
        platform. Here’s what you can configure:
      </p>
      <ul>
        <li>
          <strong>API Key:</strong> Authenticate your application securely
        </li>
        <li>
          <strong>Webhooks:</strong> Receive real-time updates
        </li>
        <li>
          <strong>Environment:</strong> Switch between Sandbox and Production
        </li>
        <li>
          <strong>IP/Domain Restrictions:</strong> Lock down API usage to your services only
        </li>
      </ul>

      <section>
        <h2>🚦 API Rate Limits</h2>
        <p>To ensure fair usage, all API requests are subject to rate limits:</p>
        <table border="1" cellPadding="10" style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Limit</th>
              <th>Reset Interval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free</td>
              <td>1000 requests/day</td>
              <td>Every 24 hours</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>10,000 requests/day</td>
              <td>Every 24 hours</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>Custom limits</td>
              <td>By agreement</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
          You can monitor your API usage in the <a href="/dashboard">Dashboard</a>.
        </p>
      </section>

      <section>
        <h2>📦 SDKs & API Versioning</h2>
        <p>
          We offer SDKs to make development easier. All SDKs support the latest version of our API.
        </p>
        <ul>
          <li>
            <strong>Node.js SDK:</strong> <code>npm install your-sdk</code>
          </li>
          <li>
            <strong>Python SDK:</strong> <code>pip install your-sdk</code>
          </li>
          <li>
            <strong>Current API Version:</strong> <code>v1.3.0</code> (released June 2025)
          </li>
          <li>
            See full changelog <a href="/changelog">here</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>✅ Compliance & Data Protection</h2>
        <p>Our platform is compliant with major data privacy regulations including:</p>
        <ul>
          <li>
            🛡️ <strong>GDPR</strong> (Europe)
          </li>
          <li>
            📄 <strong>CCPA</strong> (California)
          </li>
          <li>🔐 Data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
        </ul>
        <p>
          For full details, please read our <a href="/privacy-policy">Privacy Policy</a> and{" "}
          <a href="/terms-of-service">Terms of Service</a>.
        </p>
      </section>
    </article>
  );
}
