import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

export async function getRandomTranslation() {
  const filePath = path.join(process.cwd(), '../translations.csv');
  const translations = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => {
        translations.push(data);
      })
      .on('end', () => {
        const randomIndex = Math.floor(Math.random() * translations.length);
        resolve(translations[randomIndex]);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
