import React, { useState, useEffect, useCallback } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({ score: 0, label: "Very Weak" });

  useEffect(() => {
    let score = 0;

    // Increase score based on options
    if (includeUpper) score += 10;
    if (includeLower) score += 10;
    if (includeNumbers) score += 20;
    if (includeSymbols) score += 30;
    if (length >= 12) score += 30;
    else if (length >= 8) score += 20;

    // Label based on score
    let label = "Very Weak";
    if (score >= 80) label = "Strong";
    else if (score >= 60) label = "Medium";
    else if (score >= 40) label = "Weak";

    setStrength({ score, label });
  }, [includeUpper, includeLower, includeNumbers, includeSymbols, length]);




  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const NUMBERS = "0123456789";
  const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?/";


  const generatePassword = useCallback(() => {
    let chars = '';
    if (includeUpper) chars += UPPER;
    if (includeLower) chars += LOWER;
    if (includeNumbers) chars += NUMBERS;
    if (includeSymbols) chars += SYMBOLS;

    if (chars.length === 0) {
      setPassword("Select at least one option!");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
    setCopied(false);
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    generatePassword();
  }, [length, generatePassword]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-[450px] p-8 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

        <h1 className="text-3xl font-extrabold text-center text-white tracking-wide mb-6">
          🔐 Password Generator
        </h1>


        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your Secure Password"
            className="outline-none text-white w-full p-3 rounded-xl bg-[rgba(255,255,255,0.08)] 
                   border border-[rgba(255,255,255,0.15)] shadow-inner placeholder-gray-400"
          />
          <button onClick={copyToClipboard} className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 transition-all duration-300 text-white p-3 px-6 rounded-xl cursor-pointer text-nowrap font-semibold shadow-lg">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>


        <div className="flex items-center justify-between mb-6">
          <label className="text-white text-lg font-medium">Length</label>
          <input
            type="range"
            min="6"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer w-40 accent-blue-500"
          />
          <span className="text-gray-300 text-xl">{length}</span>
        </div>


        <div className="mb-6 select-none">
          <div className="flex my-4 justify-between items-center gap-2">
            <span className="text-white text-lg  font-medium flex items-center ">
              Include
            </span>

            <span onChange={() => setStrength()}
              className={` text-lg  font-medium ${strength.score >= 80
                  ? "text-green-500"
                  : strength.score >= 60
                    ? "text-yellow-500"
                    : strength.score >= 40
                      ? "text-orange-500"
                      : "text-red-500"
                }`}>
              {strength.label}
            </span>

          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 text-gray-200 cursor-pointer">
              <input
                type="checkbox"
                id="includeUpper"
                checked={includeUpper}
                onChange={() => setIncludeUpper(!includeUpper)}
                className="accent-blue-500" />
              Uppercase
            </label>
            <label className="flex items-center gap-2 text-gray-200 cursor-pointer">
              <input
                type="checkbox"
                id="includeNumbers"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="accent-blue-500" />
              Numbers
            </label>
            <label className="flex items-center gap-2 text-gray-200 cursor-pointer">
              <input
                type="checkbox"
                id="includeSymbols"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="accent-blue-500" />
              Symbols
            </label>
            <label className="flex items-center gap-2 text-gray-200 cursor-pointer">
              <input
                type="checkbox"
                id="includeLower"
                checked={includeLower}
                onChange={() => setIncludeLower(!includeLower)}
                className="accent-blue-500" />
              Lowercase
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={generatePassword} className="cursor-pointer w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-103 transition-all duration-500 text-white font-semibold py-3 rounded-xl shadow-xl">
            <span className=" text-xl">↻</span> Generate Password
          </button>
        </div>

      </div>
    </div>
  );
}

export default PasswordGenerator;
