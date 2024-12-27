import Image from "next/image";
import React from "react";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
}

const mockPosts: InstagramPost[] = [
  {
    id: "1",
    caption: "חוקרים את היופי של הטבע 🌿 #טיולים",
    media_url: "https://picsum.photos/300/300?grayscale",
    permalink: "https://instagram.com",
  },
  {
    id: "2",
    caption: "וייבים של שקיעה 🌅 #שלווה",
    media_url: "https://picsum.photos/300/300?grayscale",
    permalink: "https://instagram.com",
  },
  {
    id: "3",
    caption: "פינוקים טעימים 🍩 #אוכל",
    media_url: "https://picsum.photos/300/300?grayscale",
    permalink: "https://instagram.com",
  },
  {
    id: "4",
    caption: "הרפתקאות מחכות! 🏔️ #מטיילים",
    media_url: "https://picsum.photos/300/300?grayscale",
    permalink: "https://instagram.com",
  },
  {
    id: "5",
    caption: "עובדים קשה, נהנים קשה 🎉 #מוטיבציה",
    media_url: "https://picsum.photos/300/300?grayscale",
    permalink: "https://instagram.com",
  },
  {
    id: "6",
    caption: "שלווה על חוף הים 🏖️ #רוגע",
    media_url: "https://picsum.photos/300/300?grayscale",
    permalink: "https://instagram.com",
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          פיד האינסטגרם שלי
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {mockPosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative group">
                <Image
                  src={post.media_url}
                  alt={post.caption || "פוסט אינסטגרם"}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    {post.caption ? post.caption.slice(0, 100) + "..." : ""}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
