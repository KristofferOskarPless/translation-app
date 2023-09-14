// src/app/components/TranslationAppClient.js
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import TextField from "./textfield";
import Button from "./button";

const TranslationAppClient = () => {
  const [translations, setTranslations] = useState([]);
  const [randomWord, setRandomWord] = useState({});
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    // Fetch and parse the CSV data on the client side
    fetch('/translations.csv') // Update the path to your CSV file
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        setTranslations(parsedData);
        const randomIndex = Math.floor(Math.random() * parsedData.length);
        setRandomWord(parsedData[randomIndex]);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    const correctTranslation = randomWord.English;

    if (userInput === correctTranslation) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <TextField placeholder={randomWord.Norwegian} />
      <TextField
        placeholder="Your answer"
        value={userInput}
        onChange={handleInputChange}
      />
      <Button onClick={checkAnswer}>Check answer</Button>
      {isCorrect === true && <p className="text-green-500">Correct!</p>}
      {isCorrect === false && <p className="text-red-500">Incorrect!</p>}
    </div>
  );
};

export default TranslationAppClient;