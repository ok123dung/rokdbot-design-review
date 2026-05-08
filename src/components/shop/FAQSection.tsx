import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faq-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-[820px] mx-auto px-4 py-20 md:py-24" id="faq">
      <header className="text-center mb-12 md:mb-14">
        <span className="section-eyebrow">FAQ</span>
        <h2 className="text-3xl md:text-4xl text-white mb-3 leading-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
          Câu hỏi <span className="cyan-grad">hay được hỏi nhất.</span>
        </h2>
      </header>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="card-glass overflow-hidden"
            style={{ padding: 0 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#9db0ca] shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-[#9db0ca] text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
