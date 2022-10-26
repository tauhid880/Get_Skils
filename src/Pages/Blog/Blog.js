import React from "react";

const Blog = () => {
  return (
    <div className="lg:h-screen grid lg:grid-cols-2 grid-cols-none h-2/4   gap-3 m-5  justify-items-center items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-5">1. what is cors?</h3>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-5">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <small className="font-bold">Why are you using firebase?</small> <br />
        The Firebase Realtime Database lets us build rich, collaborative
        applications by allowing secure access to the database directly from
        client-side code. Data is persisted locally, and even while offline,
        realtime events continue to fire, giving the end user a responsive
        experience. <br />
        <small className="font-bold">
          What other options do you have to implement authentication?
        </small>
        <p>
          8 User Authentication Platforms [Auth0, Firebase Alternatives] STYTCH.
          Ory. Supabase. Okta. PingIdentity. Keycloak. Frontegg. Authress
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-5">
          3. How does the private route work?
        </h3>
        <p>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-5">
          4. What is Node? How does Node work?
        </h3>
        <p>
          <small className="font-bold">What is Node?</small>
          <p>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests.
          </p>{" "}
          <br />
          <small className="font-bold">How does Node work?</small>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blog;
