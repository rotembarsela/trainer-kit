"use client";

interface ContactProps {
  phoneNumber: string;
  messageTemplate: string;
}

export default function Contact({
  phoneNumber,
  messageTemplate,
}: ContactProps) {
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">צור קשר</h2>
        <p className="text-gray-700 mb-8">
          יש לכם שאלות? דברו איתי ישירות בוואטסאפ!
        </p>
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition duration-300"
        >
          שלחו לי הודעה בוואטסאפ
        </button>
      </div>
    </section>
  );
}
