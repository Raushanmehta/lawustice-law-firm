"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ============================================================
   Reusable scroll-triggered animation wrappers
   ============================================================ */

// ----- Shared animation variants -----
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.0 } },
};

// ----- Viewport config -----
const VIEWPORT = { once: true, amount: 0.15 };

// ----- Base props -----
interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fade-up on scroll into view */
export function FadeUp({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Fade from left on scroll into view */
export function FadeLeft({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeLeft}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Fade from right on scroll into view */
export function FadeRight({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeRight}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scale-in on scroll into view */
export function ScaleIn({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={scaleIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger children on scroll into view */
export function StaggerContainer({
  children,
  className = "",
  fast = false,
}: AnimationProps & { fast?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fast ? staggerContainerFast : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Individual stagger child - uses fadeUp by default */
export function StaggerItem({
  children,
  className = "",
  variants = fadeUp,
}: AnimationProps & { variants?: Variants }) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
