'use client';

import React, { createContext, useContext, useState } from 'react';

type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact';

interface AnimationContextType {
  animationKeys: Record<SectionId, number>;
  resetAnimation: (sectionId: SectionId) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationKeys, setAnimationKeys] = useState<Record<SectionId, number>>({
    hero: 0,
    about: 0,
    skills: 0,
    projects: 0,
    contact: 0,
  });

  const resetAnimation = (sectionId: SectionId) => {
    setAnimationKeys(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] + 1,
    }));
  };

  return (
    <AnimationContext.Provider value={{ animationKeys, resetAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}