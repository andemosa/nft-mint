import { CronJob } from "cron";
import https from "https";

import logger from "../utils/logger";

const URL = process.env.SERVER_URI as string;

const job = new CronJob("*/13 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        logger.info(`GET request sent successfully`);
      } else {
        logger.error(`GET request failed. Code - ${res.statusCode}`);
      }
    })
    .on("error", (e) => {
      console.error("Error while sending request", e);
    });
});

export default job;
