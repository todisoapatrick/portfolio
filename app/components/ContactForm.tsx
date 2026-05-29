"use client";

import { type FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.error);
      }

      event.currentTarget.reset();
      setStatus("success");
      setNotice(result.message ?? "Message envoyé avec succès.");
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error && error.message
          ? error.message
          : "Le message n'a pas pu être envoyé.",
      );
    }
  }

  return (
    <form
      className="grid gap-5 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <label className="text-sm font-black" htmlFor="name">
          Nom
        </label>
        <input
          className="rounded-2xl border border-[#e5e5e5] px-4 py-3 outline-none focus:border-[#66ddf5]"
          id="name"
          name="name"
          placeholder="Votre nom"
          required
          type="text"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-black" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-2xl border border-[#e5e5e5] px-4 py-3 outline-none focus:border-[#66ddf5]"
          id="email"
          name="email"
          placeholder="votre@email.com"
          required
          type="email"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-black" htmlFor="message">
          Message
        </label>
        <textarea
          className="min-h-40 rounded-2xl border border-[#e5e5e5] px-4 py-3 outline-none focus:border-[#66ddf5]"
          id="message"
          name="message"
          placeholder="Décrivez votre projet..."
          required
        />
      </div>
      {notice ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm font-bold ${
            status === "success"
              ? "bg-[#d8ffe0] text-[#1f5e31]"
              : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {notice}
        </p>
      ) : null}
      <button
        className="inline-flex w-fit items-center gap-4 rounded-full bg-[#66ddf5] px-6 py-3 text-sm font-black text-black disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Envoi..." : "Envoyer"}
        <span className="grid size-9 place-items-center rounded-full bg-[#202223] text-white">
          →
        </span>
      </button>
    </form>
  );
}
