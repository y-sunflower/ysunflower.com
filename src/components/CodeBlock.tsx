"use client";

import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "../styles/code-block.css";

type CodeBlockProps = {
  lang?: string;
  children: string;
  className?: string;
};

const normalizeCode = (code: string) =>
  code.replace(/^\n/, "").replace(/\n\s*$/, "");

const highlightCode = (code: string, lang?: string) => {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(code, {
      language: lang,
      ignoreIllegals: true,
    }).value;
  }

  return hljs.highlightAuto(code).value;
};

const fallbackCopy = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

export const CodeBlock = ({
  lang = "plaintext",
  children,
  className = "",
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const code = normalizeCode(children);
  const highlightedCode = highlightCode(code, lang);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        fallbackCopy(code);
      }
    } catch {
      fallbackCopy(code);
    }

    setCopied(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <div className={`code-block ${className}`.trim()}>
      <div className="code-block-header">
        <span className="code-block-language">{lang}</span>
        <button
          type="button"
          className="code-block-copy-button"
          onClick={handleCopy}
          aria-label={copied ? "Code copied to clipboard" : "Copy code"}
        >
          <svg
            className="code-block-copy-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M9 9h10v10H9z" />
            <path d="M5 5h10v2H7v8H5z" />
          </svg>
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <pre className="code-block-pre">
        <code
          className={`hljs language-${lang}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
