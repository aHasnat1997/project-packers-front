import React from "react";
import { useState } from "react";
import copy from '../assets/icon/cd-copy-01.svg';
import checkmark from '../assets/icon/cd-checkmark-circle-01.svg'

/**
 * @param {String} textToCopy The text want to copy
 * @returns Copy the text
 */

const CopyButton = ({ textToCopy = String }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <button
      onClick={copyToClipboard}
    >
      {isCopied ? <img src={checkmark} alt='checkmark' /> : <img src={copy} alt='copy' />}
    </button>
  );
};

export default CopyButton;
