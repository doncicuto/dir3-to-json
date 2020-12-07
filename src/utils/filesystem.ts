import { promises as fs } from "fs";

import { showErrorMessage } from "./logging";

export const createDirectory = async (path: string): Promise<void> => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (error) {
    showErrorMessage(error);
  }
};

export const writeJSONFile = async (
  path: string,
  data: string
): Promise<void> => {
  await fs.writeFile(path, data);
};
