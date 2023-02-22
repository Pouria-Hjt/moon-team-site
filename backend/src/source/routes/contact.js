import { Router } from "express";
import { readFileSync } from "node:fs";

// creating the /contact router
const router = Router();

// we told the original router to listen /contact for this route, so here we just give it /
router.post("/", async (req, res) => {
  // warping the entire function in try block so backend gets no errors, and sending 500 to the client.
  try {
    // body can be any, so we make sure it's an object
    let body = req.body;
    if (typeof req.body == "string") body = JSON.parse(req.body);

    // Throwing "bad request" to the client if there was missing object names the request
    if (!body["name"] || !body["email"] || !body["value"])
      return res
        .status(403)
        .send({ error: 403, message: "missing params in the body." });

    // using fs to read the message file
    // * this also can be outside of the function for optimization
    // but I put it inside so there will be no need to restart the app in case of a file change
    let message = readFileSync("./src/message.json", "utf-8")
      // replacing key values
      .replaceAll("${name}", body.name)
      .replaceAll("${email}", body.email)
      .replaceAll("${value}", body.value);

    // sending the webhook
    // ! if you get an error here, install node >19.0.0 or npm install node-fetch
    fetch(process.env.WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: message,
    });

    // there is no content so... 204
    res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .send({ error: 500, message: "there was an internal server error." });
  }
});

export default router;
