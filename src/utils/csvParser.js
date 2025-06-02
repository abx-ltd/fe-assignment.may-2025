/**
 * Parse CSV data from text string
 * @param {string} csvText - Raw CSV text
 * @returns {Array} Array of objects with parsed data
 */
export function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",").map((header) => header.trim());

  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });

    data.push(row);
  }

  return data;
}

/**
 * Parse a single CSV line, handling quoted values with commas
 * @param {string} line - CSV line to parse
 * @returns {Array} Array of values
 */
function parseCSVLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      // End of field
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  // Add last field
  values.push(current.trim());

  return values;
}

/**
 * Load CSV data from file
 * @param {string} filePath - Path to CSV file
 * @returns {Promise<Array>} Promise resolving to parsed data
 */
export async function loadCSVFromFile(filePath) {
  try {
    const response = await fetch(filePath);
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("Error loading CSV file:", error);
    throw error;
  }
}
