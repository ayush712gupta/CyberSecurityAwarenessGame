import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 transform
          ${isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-cyan-500 hover:bg-cyan-600 hover:scale-110"}
          text-white z-50`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div
        className={`fixed bottom-24 right-6 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] 
        transition-all duration-300 transform
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        } z-40`}
      >
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/20/08/20250220084148-SEYKOB9K.json"
          className="w-full h-full rounded-2xl shadow-2xl border border-cyan-500/20"
        />
      </div>
    </>
  );
}

export default Chatbot;
