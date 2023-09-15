import React from "react";
import TextField from './components/textfield';
import Button from './components/button';

/* const randomWord = translations[Math.floor(Math.random() * translations.length)]; */

const IndexPage = () => {
  return (
    <div className="w-screen p-96">
      <div className="justify-center">
        <h1 className="text-5xl font-semibold pb-8">🚀 Ale's Amazing Translation App</h1>
        <TextField
          placeholder="{randomWord.norw}"
        />
        <TextField
          placeholder="Your answer"
        />
        <Button
        /*  onClick={() => {
            const userInput = textField.value;
            const correctTranslation = randomWord.English;

            if (userInput === correctTranslation) {
              alert('Correct!');
            } else {
              alert('Incorrect!');
            }
          }}*/
        >
          Check answer
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;