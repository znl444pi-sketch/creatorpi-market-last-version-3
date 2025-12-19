"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { useLanguage, getLanguageName } from "@/contexts/language-context"
import { ChevronDown, Globe } from "lucide-react"
import { useState } from "react"

export default function WelcomePage() {
  const { language, setLanguage, t } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const languages = [
    { code: "en" as const, name: "English" },
    { code: "fr" as const, name: "Français" },
    { code: "ar" as const, name: "العربية" },
    { code: "zh" as const, name: "中文" },
  ]

  return (
    <div className="min-h-screen bg-[#036E82] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFD54F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD54F] rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-6 right-6 z-10">
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors"
          >
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">{getLanguageName(language)}</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </button>
          {showLanguageMenu && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden min-w-[150px] z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setShowLanguageMenu(false)
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    language === lang.code ? "bg-[#FFD54F]/10 text-[#036E82] font-semibold" : "text-gray-700"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4 mb-8 animate-[fade-in_0.6s_ease-out]">
          <Logo className="w-20 h-20 sm:w-24 sm:h-24" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span
              className="text-[#FFD54F]"
              style={{
                textShadow: "0 0 30px rgba(255, 213, 79, 0.5), 0 0 60px rgba(255, 213, 79, 0.3)",
              }}
            >
              CreatorPi
            </span>{" "}
            <span className="text-white">Market</span>
          </h1>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-12 animate-[fade-in_0.8s_ease-out] max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            {t("welcomeTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 text-pretty">{t("welcomeSubtitle")}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-[fade-in_1s_ease-out]">
          <Link href="/login-verification" className="flex-1">
            <Button
              size="lg"
              className="w-full bg-[#FFD54F] hover:bg-[#FFD54F]/90 text-[#036E82] font-semibold text-lg h-14 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: "0 0 20px rgba(255, 213, 79, 0.4), 0 0 40px rgba(255, 213, 79, 0.2)",
              }}
            >
              <span className="mr-2">π</span>
              {t("signInButton")}
            </Button>
          </Link>
          <Link href="/guest-verification" className="flex-1">
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#036E82] font-semibold text-lg h-14 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {t("guestButton")}
            </Button>
          </Link>
        </div>

        {/* Terms & Privacy links section */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm animate-[fade-in_1.2s_ease-out]">
          <Link
            href="/terms"
            className="text-[#FFD54F] hover:text-[#FFD54F]/80 transition-colors underline underline-offset-4"
          >
            {t("termsLink")}
          </Link>
          <span className="text-white/40">•</span>
          <Link
            href="/privacy"
            className="text-[#FFD54F] hover:text-[#FFD54F]/80 transition-colors underline underline-offset-4"
          >
            {t("privacyLink")}
          </Link>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center animate-[fade-in_1.6s_ease-out]">
          <p className="text-white/60 text-sm">Support only Pi coin</p>
        </div>
      </div>
    </div>
  )
}
