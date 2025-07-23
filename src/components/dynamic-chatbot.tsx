"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chatbot = dynamic(() => import("@/components/chatbot"));

export default function DynamicChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {isOpen && <Chatbot />}
      <Button
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
