"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramPost } from "@/types/instagram";

type Props = {
  posts: InstagramPost[];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function ImageCard({ post, index }: { post: InstagramPost; index: number }) {
  return (
    <motion.div variants={itemVariants}>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden group"
        style={{ aspectRatio: "1/1" }}
      >
        <Image
          src={post.image.url}
          alt={`Instagram photo ${index + 1}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: "rgba(45,74,45,0.3)" }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
          </svg>
        </div>
      </a>
    </motion.div>
  );
}

export default function Instagram({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 400,
            color: "#1A1A1A",
            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
          }}
        >
          Instagram
        </motion.h2>

        <p
          className="text-xs tracking-widest mt-2 mb-10"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            color: "#2D4A2D",
            opacity: 0.6,
          }}
        >
          @natti_coffee
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post, i) => (
            <ImageCard key={post.id} post={post} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
