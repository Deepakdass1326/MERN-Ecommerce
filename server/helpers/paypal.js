const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // ya "live" if you're going to production
  client_id: "Aaljv1IY7SvHZYKcv2xhNxxxxxxxxxxxx", // <-- Paste full client ID
  client_secret: "EK95DbpV1uqlrwGx1GL8meruLDpqSySHk1dSBv3fnbrdnmErL5lmc8KeUIMKKc1L-UZb31uAyx8Bo3kA"
});

module.exports = paypal;
