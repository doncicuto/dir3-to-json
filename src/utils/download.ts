import { createWriteStream } from "fs";
import path from "path";
import Axios from "axios";

import { fileProps } from "../types/types";

const downloadFile = async (fileUrl: string, outputLocationPath: string) => {
  const writer = createWriteStream(outputLocationPath);

  return Axios({
    method: "get",
    url: fileUrl,
    responseType: "stream",
  }).then((response) => {
    return new Promise((resolve, reject) => {
      let error: Error | null = null;
      response.data.pipe(writer);
      writer.on("error", (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on("close", () => {
        if (!error) {
          resolve(true);
        }
      });
    });
  });
};

const downloadDIR3File = async (
  { url, name }: fileProps,
  outputPath: string
) => {
  try {
    const fileName = path.join(outputPath, `${name}.xlsx`);
    await downloadFile(url, fileName);
  } catch (error) {
    console.error(error);
  }
};

export const downloadDIR3Files = async (
  files: fileProps[],
  outputPath: string
): Promise<void> => {
  for (const file of files) {
    await downloadDIR3File(file, outputPath);
  }
};
