"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./../styles/form.css";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mkgqbgwv");
  if (state.succeeded) {
    return (
      <p className="success-message">
        Thanks for reaching out! We&apos;ll get back to you soon.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
