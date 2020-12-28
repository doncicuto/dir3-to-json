import path from "path";

import { filesDIR3 } from "./config/dir3";
import { createDirectory } from "./utils/filesystem";
import { downloadDIR3Files } from "./utils/download";
import { filesDIR3ToJSON } from "./utils/xlsx-to-json";
import { showMessage } from "./utils/logging";

export const inputDirectory = path.join(__dirname, "./input");
export const outputDirectory = path.join(__dirname, "./output");

const main = async () => {
  showMessage("Step 1. Create directories...");
  await createDirectory(inputDirectory);
  await createDirectory(outputDirectory);
  showMessage("Done!");
  showMessage("Step 2. Download files... Please be patient!");
  await downloadDIR3Files(filesDIR3, inputDirectory);
  showMessage("Done!");
  showMessage("Step 3. Convert files to JSON... Please be patient!");
  await filesDIR3ToJSON(filesDIR3, inputDirectory, outputDirectory);
  showMessage("Done!");
  showMessage("All files have been downloaded and converted");
};

showMessage(`Execution at: ${__dirname}`);
main();
