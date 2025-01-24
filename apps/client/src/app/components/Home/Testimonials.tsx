import React from "react";

interface Testimonial {
  name: string;
  date: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "שרה מ.",
    date: "2023-12-01",
    text: "לעבוד עם [שם המאמן] שינה לי את החיים לגמרי. בשלושה חודשים בלבד ירדתי 9 קילוגרם וקיבלתי ביטחון עצמי שלא חלמתי עליו!",
  },
  {
    name: "אמילי ר.",
    date: "2023-11-25",
    text: "צוות השירות לקוחות מדהים. כל שאלה שהייתה לי קיבלה מענה מהיר, ואפילו עזרו לי עם התאמות אישיות!",
  },
  {
    name: "לינדה כ.",
    date: "2023-11-15",
    text: "תודה ל-[שם האפליקציה] שעזר לי לנהל את הבריאות שלי טוב יותר מאי פעם. התזכורות והתובנות הם הצלה אמיתית!",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-10">
      <div className="container mx-auto px-4 text-right">
        <h2
          id="testimonials-heading"
          className="text-2xl md:text-4xl font-bold text-center mb-8"
        >
          המלצות המתאמנים
        </h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="border border-gray-300 p-6 rounded-lg">
              <p className="font-bold">{testimonial.name}</p>
              <time className="text-sm" dateTime={testimonial.date}>
                {new Date(testimonial.date).toLocaleDateString("he-IL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <blockquote className="text-lg italic mt-4">
                {testimonial.text}
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
