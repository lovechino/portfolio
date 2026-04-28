'use client'

import { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { ChatDialog } from './chat-dialog'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollBot() {
  const { language } = useLanguage()
  const t = translations[language]
  const botRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = () => {
    setIsChatOpen(true);
    setShowChat(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    fetch('/scroll-bot.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading lottie animation:", err));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useGSAP(() => {
    if (!botRef.current) return;

    // Appearance & Initial Position
    gsap.set(botRef.current, { opacity: 0, scale: 0, x: 50 });
    
    gsap.to(botRef.current, {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#hero",
        start: "top 20%",
        toggleActions: "play none none none"
      }
    });

    // Phase 1: Continuous downward movement following the scroll
    gsap.to(botRef.current, {
      y: "80vh", // Move down to 80% of screen height
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "#contact top",
        scrub: 0.5, // Faster responsiveness
      }
    });

    // Floating effect (loops independently)
    gsap.to(iconRef.current, {
      y: "-=20",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut"
    });

    // Phase 2: Contact Section Transformation & Rolling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      }
    });

    tl.to(iconRef.current, {
      borderRadius: "999px",
      backgroundColor: "var(--accent)",
      padding: "0px",
      width: "50px",
      height: "50px",
      scale: 1,
      rotation: 720,
      boxShadow: "0 0 30px var(--accent)",
      duration: 1,
    })
    .to(".robot-image", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    }, "<") // Start at the same time as parent transformation
    .to(botRef.current, {
      x: "-=85vw",
      rotation: -1440,
      ease: "power2.inOut",
      duration: 5,
    })
    .to(botRef.current, {
       opacity: 0,
       scale: 0,
       duration: 0.5,
    });

  }, []);

  return (
    <>
      <div
        ref={botRef}
        className="fixed top-20 right-10 z-[100] hidden md:block"
      >
        <div
          ref={iconRef}
          onClick={handleClick}
          className="flex h-40 w-40 items-center justify-center cursor-pointer pointer-events-auto relative group"
        >
          {showChat && (
            <div className="absolute -top-12 right-0 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl rounded-tr-none shadow-xl border border-pink-100/50 text-pink-500 font-bold whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-300 z-[101]">
              {t.hero.botGreeting}
              <div className="absolute top-0 right-[-6px] w-4 h-4 bg-white/95 border-t border-r border-pink-100/50" 
                   style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
            </div>
          )}
          {animationData ? (
            <div className="robot-image w-[140px] h-[140px] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <Lottie 
                animationData={animationData} 
                loop={true}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="robot-image w-[140px] h-[140px] flex items-center justify-center transition-transform duration-500 group-hover:scale-110" />
          )}
        </div>
      </div>
      <ChatDialog 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  )
}
