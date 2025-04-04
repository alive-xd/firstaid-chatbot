import React, { useState } from "react";

const symptomResponses = {
  Fever: "You may have an infection or flu. Stay hydrated and take rest.\n\n\n**Medication:** Paracetamol (500mg)",
  Fatigue: "Fatigue may result from stress or poor sleep.\n\n\n**Medication:** Vitamin B12 supplements",
  Cough: "Could be due to infection or allergy.\n\n\n**Medication:** Dextromethorphan or Guaifenesin",
};

export default function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = () => {
    const found = Object.keys(symptomResponses).find((symptom) =>
      input.toLowerCase().includes(symptom.toLowerCase())
    );
    setResponse(found ? symptomResponses[found] : "Sorry, symptom not recognized.");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}>
      <div className="max-w-xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold">First Aid Chatbot</h1>
        </header>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
          <a href="tel:108" className="px-4 py-2 bg-red-500 text-white rounded">Call 108</a>
        </div>

        <input
          className="w-full p-3 border rounded"
          placeholder="Type your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Get Advice
        </button>

        {response && (
          <div className="p-4 bg-gray-100 rounded shadow dark:bg-gray-800">
            <pre className="whitespace-pre-wrap font-medium">{response}</pre>
          </div>
        )}

        <footer className="text-center pt-10 text-sm text-gray-500">
          Developed by Sumit Sulabh & Rabindra Nath Thakur
        </footer>
      </div>
    </div>
  );
}
