export default function page() {
  return (
    <article className="prose dark:prose-invert">
      <h1>Your Api Key</h1>
      <p>
        Welcome to the developer dashboard. Below is your personal API key which allows you to
        authenticate and interact with our services programmatically. Make sure to store this key
        securely and never expose it in public repositories or client-side code.
      </p>
      <div>
        <h3>Security Notice</h3>
        <ul>
          <li>Never share your API key publicly.</li>
          <li>Regenerate the key if you suspect it has been compromised.</li>
          <li>Use environment variables to store the key in server-side applications.</li>
        </ul>
      </div>
      <div>
        <span>
          <div id="apiKey">sk-abc1234567890XYZ</div>
          <button onclick="copyKey()">Copy API Key</button>
        </span>{" "}
      </div>
      <div className="lead">
        This is your unique API key used to access our platforms services. Keep it secure and do not
        share it publicly. You can copy it below and use it in your API requests for authentication.
      </div>
    </article>
  );
}
