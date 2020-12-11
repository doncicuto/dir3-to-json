import path from "path";
import XLSX from "xlsx";

import { fileProps } from "../types/types";
import { showErrorMessage } from "./logging";
import { writeJSONFile } from "./filesystem";

const fileDIR3ToJSON = async (input: string): Promise<string | undefined> => {
  try {
    const workBook = XLSX.readFile(input, { cellDates: true });
    if (workBook.SheetNames.length < 1) {
      throw new Error("XLSX file has no sheets");
    }

    const workSheet = workBook.Sheets[workBook.SheetNames[0]];
    if (!workSheet) {
      throw new Error("First sheet not found");
    }

    const jsonOutput = JSON.stringify(
      XLSX.utils.sheet_to_json(workSheet, {
        range: 1,
        defval: "",
      })
    );
    return jsonOutput;
  } catch (error) {
    showErrorMessage(error);
  }
};

export const filesDIR3ToJSON = async (
  filesDIR3: fileProps[],
  inputDirectory: string,
  outputDirectory: string
): Promise<void> => {
  for (const file of filesDIR3) {
    const inputPath = path.join(inputDirectory, `${file.name}.xlsx`);
    const outputPath = path.join(outputDirectory, `${file.name}.json`);
    const jsonData = await fileDIR3ToJSON(inputPath);
    if (jsonData) {
      await writeJSONFile(outputPath, jsonData);
    }
  }
};
