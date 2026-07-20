const Arrow = () => <span aria-hidden="true">↗</span>;

const Play = () => (
  <span className="play" aria-hidden="true">
    <span />
  </span>
);

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/thestorytellers_music" },
  { label: "YouTube", href: "https://www.youtube.com/@TheStorytellersMusic-s1b" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61570553462608" },
];

const videos = [
  { title: "Groźna", context: "Must Be The Music · Polsat", href: "https://www.youtube.com/watch?v=zYtLwmQ95wA", image: "/assets/mbtm-stage.webp", featured: true },
  { title: "Tylko w nas", context: "Piknik Country · Mrągowo 2025", href: "https://www.youtube.com/watch?v=C1k2nego2to", image: "/assets/mragowo-stage.webp" },
  { title: "Groźna", context: "Piknik Country · Mrągowo 2025", href: "https://www.youtube.com/watch?v=NHC3POmKFNQ", image: "/assets/mragowo.webp" },
  { title: "Koncert w Starym Maneżu", context: "Gdańsk · 17 maja 2025", href: "https://www.youtube.com/watch?v=pHLxgCQ7tt4", image: "/assets/stary-manez.webp" },
  { title: "Historie Końca Lata", context: "Live at Tallpine Records", href: "https://www.youtube.com/watch?v=3pDlvIb49WM", image: "/assets/tallpine-thumb.webp" },
  { title: "This Time", context: "Live", href: "https://www.youtube.com/watch?v=JZrjaAK0RkU", image: "/assets/live-duo.webp" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="The Storytellers — strona główna">
          <img src="/assets/logo-new.png" alt="The Storytellers" />
        </a>
        <nav aria-label="Stała nawigacja strony">
          <a href="#o-zespole">O zespole</a>
          <a href="#na-zywo">Na żywo</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="grain" />
        <div className="hero-copy">
          <h1>
            Muzyka, która
            <em> żyje na scenie.</em>
          </h1>
          <p className="hero-lead">
            Historie opowiedziane harmonią i rytmem. O emocjach i z emocjami.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#na-zywo">Zobacz nas na żywo <span>↓</span></a>
            <a className="text-link" href="mailto:koncerty@thestorytellers.pl">Booking koncertów <Arrow /></a>
          </div>
        </div>
        <div className="hero-photo" role="img" aria-label="The Storytellers w pełnym składzie" />
        <div className="scroll-note">Przewiń, żeby poznać historię</div>
      </section>

      <section className="marquee" aria-label="Najważniejsze informacje">
        <span>Muzyka</span><i>✦</i>
        <span>Historie</span><i>✦</i>
        <span>Emocje</span>
      </section>

      <section className="about section" id="o-zespole">
        <div className="section-number">01 / O zespole</div>
        <div className="about-grid">
          <h2>Pięć osób.<br />Jedna opowieść.</h2>
          <div className="about-copy">
            <p className="intro">The Storytellers założyliśmy w 2024 roku — my, czyli Kuba Jaźwiecki i Mateusz Rybicki. Połączyły nas wieloletnia przyjaźń, muzyczna pasja i potrzeba opowiadania własnych historii.</p>
            <p>Nasze „poprzednie muzyczne wcielenia” to niezależne ścieżki, które zaprowadziły nas na sceny m.in. Open’er Festival, Orange Warsaw Festival czy Woodstock. Obaj mamy za sobą również udział w popularnych talent show.</p>
            <p>Rozdział pod tytułem „The Storytellers” rozpoczął się jako akustyczny duet, ale szybko ewoluował i dziś grają z nami także Jędrzej Antkiewicz na perkusji, Piotr „Pióro” Piórkowski na basie oraz Gabi Żmigrodzka na skrzypcach.</p>
            <p>W duecie nagraliśmy dostępną w serwisie YT live sesję „Historie Końca Lata”, ale już niebawem ukaże się nasza debiutancka płyta z nowymi utworami w pełnych, szerokich, miejscami rockowych aranżach.</p>
          </div>
        </div>
        <blockquote>
          <span>“</span>
          Najbardziej lubimy moment, w którym nasza muzyka zaczyna żyć na scenie.
        </blockquote>
        <div className="lineup" aria-label="Skład zespołu">
          <div><b>Mateusz Rybicki</b><small>wokal · gitary · mandolina</small></div>
          <div><b>Kuba Jaźwiecki</b><small>wokal · gitary · instrumenty klawiszowe</small></div>
          <div><b>Piotr „Pióro” Piórkowski</b><small>gitara basowa</small></div>
          <div><b>Jędrzej Antkiewicz</b><small>perkusja</small></div>
          <div><b>Gabi Żmigrodzka</b><small>skrzypce</small></div>
        </div>
      </section>

      <section className="live section" id="na-zywo">
        <div className="section-number light">02 / Zobacz nas na żywo</div>
        <div className="live-heading">
          <h2>Wejdź do świata naszych<br /><em>muzycznych historii.</em></h2>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <a className={`video-card${video.featured ? " featured" : ""}`} href={video.href} target="_blank" rel="noreferrer" key={video.href}>
              <img src={video.image} alt={`${video.title} — ${video.context}`} />
              <div className="video-overlay"><Play /><p><small>{video.context}</small><b>{video.title}</b></p><Arrow /></div>
            </a>
          ))}
        </div>
        <a className="channel-link" href="https://www.youtube.com/@TheStorytellersMusic-s1b" target="_blank" rel="noreferrer">Więcej na YouTube <Arrow /></a>
      </section>

      <section className="format section">
        <div className="format-photo">
          <img src="/assets/live-duo.webp" alt="Akustyczny koncert The Storytellers" />
          <span>Koncert akustyczny · Gdańsk</span>
        </div>
        <div className="format-copy">
          <div className="section-number">03 / Format koncertowy</div>
          <h2>Intymnie albo<br /><em>z pełną mocą.</em></h2>
          <p>Nasz program to ponad 60 minut autorskiej muzyki — różnorodnej, dynamicznej i pełnej emocji. W pełnym składzie kameralne momenty przeplatają się z mocniejszymi aranżacjami, nadając koncertowi naturalny rytm i wyraźną dramaturgię. Możemy również wystąpić w kameralnej, akustycznej odsłonie, dostosowanej do charakteru wydarzenia.</p>
          <div className="format-options">
            <div><span>01</span><b>Pełny skład</b><small>Pięcioosobowy zespół, szerokie brzmienie i koncertowa energia.</small></div>
            <div><span>02</span><b>Akustycznie</b><small>Głosy, gitary i mandolina — blisko publiczności.</small></div>
          </div>
        </div>
      </section>

      <section className="contact section" id="kontakt">
        <img className="contact-figures" src="/assets/hugs.webp" alt="" aria-hidden="true" />
        <div className="section-number light">04 / Kontakt</div>
        <div className="contact-inner">
          <p>Koncerty · wydarzenia · współpraca</p>
          <h2>Tak nas<br /><em>znajdziesz</em></h2>
          <div className="contact-links">
            <a href="mailto:koncerty@thestorytellers.pl">koncerty@thestorytellers.pl <Arrow /></a>
            <a href="tel:+48690344431">+48 690 344 431 <Arrow /></a>
            {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <Arrow /></a>)}
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#top" aria-label="The Storytellers — do góry"><img src="/assets/logo-new.png" alt="The Storytellers" /></a>
        <small>© 2026 The Storytellers</small>
      </footer>
    </main>
  );
}
