'use client';

export default function ShareButtons() {
  const socialLinks = [
    {
      Icon: '/linkedIn.svg',
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/company/dysol-pvt-ltd/',
    },
    { Icon: '/instagram.svg', text: 'Instagram' },
    { Icon: '/twitter.svg', text: 'Twitter' },
    {
      Icon: '/facebook.svg',
      text: 'Facebook',
      link: 'https://www.facebook.com/share/1Abqv41mXX/',
    },
    { Icon: '/telegram.svg', text: 'Telegram' },
    { Icon: '/copy.svg', text: 'Copy Link', isCopy: true }
  ];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      // You can replace alert with a toast notification
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="flex gap-2.5 md:gap-3 flex-wrap">
      {socialLinks.map((item, i) => (
        item.isCopy ? (
          <button
            key={i}
            onClick={handleCopyLink}
            className="w-8 h-8 md:w-6 md:h-6 flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] rounded-lg transition"
            title={item.text}
          >
            <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        ) : (
          <a
            key={i}
            href={item.link || "#"}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className="w-8 h-8 md:w-6 md:h-6 flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] rounded-lg transition"
            title={item.text}
          >
            <img src={item.Icon} alt={item.text} className="w-4 h-4 object-contain" />
          </a>
        )
      ))}
    </div>
  );
}
