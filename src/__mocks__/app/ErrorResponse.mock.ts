export default {
  error: {
    code: 403,
    message: "The request is missing a valid API key.",
    errors: [
      {
        message: "The request is missing a valid API key.",
        domain: "global",
        reason: "forbidden"
      }
    ],
    status: "PERMISSION_DENIED"
  }
};