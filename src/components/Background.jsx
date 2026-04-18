import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl bottom-[-100px] right-[-100px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[700px] h-[700px] border border-purple-500 rounded-full opacity-10 top-[20%] left-[30%]"
      />
    </div>
  );
}