"use client";

import { Suspense, useState } from "react";
import Loading from "./loading";

export default function App() {
  const [input, setInput] = useState("");
  const [session, setSession] = useState([{ user: false, message: "Hello!" }]);

  async function send() {
    const box = document.getElementById("chat-input");
    if (input == "") return;
    const obj = { user: true, message: input };
    setSession((old) => [obj, ...old]);
    setInput("");
    (box as HTMLInputElement).disabled = true;
    const r = await fetch(`/fetch?input=${input}`, {
      cache: "no-cache",
    });
    const res: { reply: string; status: number } = await r.json();

    setSession((old) => [{ user: false, message: res.reply }, ...old]);
    (box as HTMLInputElement).disabled = false;
    box?.focus();
  }

  return (
    <Suspense fallback={<Loading />}>
      <main>
        
        <div className="left">
          <div className="content">
            <h1>Chatable</h1>
            <p>
              This is a Discriminative AI which identifies the tone of the text
              and its meaning using NLU and NLP and outputs a pre-learned text.
            </p>

            <span className="datasets">12k+ Datasets</span>
          </div>

          <div>
            <p>Source Code</p>
            <div className="flex gap-2">
              <a href="https://github.com/Rahuletto/chatable" className="links">
                Website
              </a>
              <a href="https://github.com/Rahuletto/chatbot" className="links">
                Core AI
              </a>
            </div>
          </div>
        </div>

        <div className="chatbox">
          <div className="input flex">
            <input
              value={input}
              onKeyDown={(e) => {
                if (e.key == "Enter") return send();
              }}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type something"
              id="chat-input"
            />
            <button
              disabled={input == ""}
              onClick={(e) => {
                e.preventDefault();
                send();
              }}
              title="send"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Icon</title>
                <path d="M232,127.89a16,16,0,0,1-8.18,14L55.91,237.9A16.14,16.14,0,0,1,48,240a16,16,0,0,1-15.05-21.34L60.3,138.71A4,4,0,0,1,64.09,136H136a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47H64.16a4,4,0,0,1-3.79-2.7l-27.44-80A16,16,0,0,1,55.85,18.07l168,95.89A16,16,0,0,1,232,127.89Z"></path>
              </svg>
            </button>
          </div>
          <div id="bubbles" className="flex flex-col-reverse">
            {session.map((elem) => {
              return (
                <div className="message">
                  <div className={elem.user ? "user" : "bot"}>
                    <p>{elem.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Suspense>
  );
}
