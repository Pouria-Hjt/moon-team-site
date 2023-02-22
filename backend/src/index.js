import { config } from "dotenv";
// Loading the Env File(s)
config();

import { createApp } from "./source/utils/createApp.js";

// Getting the Port From Env or Setting It To a Value So It Won't Be Null
const PORT = process.env.Port || 4000 ;

// Main Function, If We Ever Had To Use Async
async function main() {
  try {
    const app = createApp();
    app.listen(PORT, () =>
      console.log(`App Running on : http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
}
main();
