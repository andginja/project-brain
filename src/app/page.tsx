"use client";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

export default function Home() {
  const [input, setInput] = useState("");
  const [encrypted, setEncrypted] = useState("");

  useEffect(() => {
    const encryptedText = CryptoJS.AES.encrypt(
      input,
      "thememes6529"
    ).toString();
    setEncrypted(encryptedText);
  }, [input]);

  const handleInputChange = (e: {
    target: { value?: any; style?: { height: string }; scrollHeight?: any };
  }) => {
    setInput(e.target.value);
    if (e.target.style) {
      adjustTextareaHeight(
        e.target as { style: { height: string }; scrollHeight: any }
      );
    }
  };

  const adjustTextareaHeight = (textarea: {
    style: { height: string };
    scrollHeight: any;
  }) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-center text-4xl">Project Brain</h1>
      <div className="flex flex-col w-[1300px] gap-2 bg-gray-700 rounded-lg p-4">
        <label htmlFor="input" className="text-white">
          Input
        </label>
        <textarea
          id="input"
          className="text-black rounded-lg p-4"
          placeholder="Data Input"
          value={input}
          onChange={handleInputChange}
          style={{ overflow: "hidden" }}
        />
        <label htmlFor="output" className="text-white mt-4">
          Encrypted Output
        </label>
        <textarea
          id="output"
          className="text-black rounded-lg p-4"
          value={encrypted}
          readOnly
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}
