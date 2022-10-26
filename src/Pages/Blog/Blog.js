import React from "react";

const Blog = () => {
  return (
    <div className="h-screen grid grid-cols-2 gap-3 m-5  justify-items-center items-center">
      <div className="card w-auto   bg-lime-200 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">what is cors?</h2>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
      </div>
      <div className="card w-auto bg-lime-200 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            <small className="font-bold">Why are you using firebase?</small>{" "}
            <br />
            The Firebase Realtime Database lets us build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience. <br />
            <small className="font-bold">
              What other options do you have to implement authentication?
            </small>
            <p>
              8 User Authentication Platforms [Auth0, Firebase Alternatives]
              STYTCH. Ory. Supabase. Okta. PingIdentity. Keycloak. Frontegg.
              Authress
            </p>
          </p>
        </div>
      </div>
      <div className="card   bg-lime-200 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">How does the private route work?</h2>
          <p>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </p>
        </div>
      </div>
      <div className="card  bg-lime-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is Node? How does Node work?</h2>
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
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
