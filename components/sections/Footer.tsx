import { contact } from '@/lib/pricing';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60 px-5 md:px-10 pb-10">
      <div className="max-w-7xl mx-auto border-t border-paper/10 pt-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm">
        <div className="font-serif text-paper text-lg">
          Proweb<span className="text-accent">.</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href={contact.whatsapp} className="hover:text-paper">WhatsApp</a>
          <a href={`mailto:${contact.email}`} className="hover:text-paper">
            {contact.email}
          </a>
          <a href={contact.calendar} className="hover:text-paper">
            Marcar chamada
          </a>
        </div>
        <div className="text-paper/40">
          © 2026 Proweb · Portugal
        </div>
      </div>
    </footer>
  );
}
