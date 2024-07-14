import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
  bannerRef: React.RefObject<HTMLDivElement>;
  catalogRef: React.RefObject<HTMLDivElement>;
  productRef: React.RefObject<HTMLDivElement>;
  youtubeRef: React.RefObject<HTMLDivElement>;
  advantagesRef: React.RefObject<HTMLDivElement>;
  callbackRef: React.RefObject<HTMLDivElement>;
  newsRef: React.RefObject<HTMLDivElement>;
  feedbackRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  bannerRef: { current: null },
  catalogRef: { current: null },
  productRef: { current: null },
  youtubeRef: { current: null },
  advantagesRef: { current: null },
  callbackRef: { current: null },
  newsRef: { current: null },
  feedbackRef: { current: null },
  faqRef: { current: null },
  scrollToRef: () => {},
});

export const ScrollProvider = ({ children }:any) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const youtubeRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{
      bannerRef,
      catalogRef,
      productRef,
      youtubeRef,
      advantagesRef,
      callbackRef,
      newsRef,
      feedbackRef,
      faqRef,
      scrollToRef
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);