"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import { ModalContext } from "@/app/context/modal-context";

type AuthModalProps = Record<string, never>;

export const AuthModal: React.FC<AuthModalProps> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const context = useContext(ModalContext);
  const setShowModal = context?.setShowModal;

  return (
    <div className="w-full lg:max-w-sm xl:max-w-md 2xl:max-w-lg overflow-hidden rounded-2xl bg-white">
      {/* Branded header */}
      <div className="relative border-b border-gray-100 lg:px-5 xl:px-7 lg:pt-4 xl:pt-5 lg:pb-3 xl:pb-4">
        <div className="flex items-center justify-between lg:mb-3 xl:mb-4">
          <div className="flex items-center lg:gap-1.5 xl:gap-2">
            <Image
              src="/leaf.png"
              alt="Growly"
              width={20}
              height={20}
              className="lg:w-5 lg:h-5 xl:w-6 xl:h-6"
            />
          </div>
          {setShowModal && (
            <button
              onClick={() => setShowModal(false)}
              className="rounded-full p-1 text-muted-foreground hover:text-foreground hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <X className="lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
            </button>
          )}
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-full bg-black/10 p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 rounded-full lg:py-1 xl:py-1.5 lg:text-xs xl:text-sm font-semibold transition-all duration-200 ${
              isLogin
                ? "bg-white text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 rounded-full lg:py-1 xl:py-1.5 lg:text-xs xl:text-sm font-semibold transition-all duration-200 ${
              !isLogin
                ? "bg-white text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Form content */}
      <div className="lg:p-5 xl:p-6 2xl:p-8 flex items-center justify-center w-full">
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};
