export default function page() {
  return (
    <article className="prose dark:prose-invert">
      <h1>Integration Directory</h1>
      <p>
        Welcome to the central hub for integrating with our platform. Get started with our APIs,
        SDKs, and webhooks to unlock powerful features.
      </p>
      <div>
        <h3>Integration Options</h3>
        <ul>
          <li>
            <strong>REST API:</strong> Use HTTP endpoints to fetch and send data.
          </li>
          <li>
            <strong>JavaScript SDK:</strong> Simplify your integration with our ready-to-use SDK.
          </li>
          <li>
            <strong>Webhooks:</strong> Get real-time updates when something changes.
          </li>
          <li>
            <strong>Postman Collection:</strong> Explore and test APIs faster.
          </li>
        </ul>
      </div>
      <div>
        <span>
          <h3 id="apiKey">📡 REST API Example</h3>
          <pre>
            curl -X GET https://api.yourdomain.com/v1/users \ -H Authorization: Bearer
            sk-abc1234567890XYZ
          </pre>
        </span>
      </div>
    </article>
  );
}
