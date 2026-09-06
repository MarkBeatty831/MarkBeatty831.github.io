# MarkBeatty831.github.io

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mark Beatty — Finance Student</title>
<meta name="description" content="Portfolio of Mark Beatty, Finance student at the David Eccles School of Business, University of Utah.">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:wght@400;600&display=swap" rel="stylesheet">

<style>
  /* ============================================================
     Color scheme — five values used consistently throughout
     ============================================================ */
  :root {
    --paper:  #f4f5f7;   /* page background            */
    --ink:    #1b2028;   /* primary text               */
    --muted:  #5c6673;   /* secondary text             */
    --rule:   #d3d7dd;   /* hairlines and dividers     */
    --accent: #9e1b32;   /* links, active nav, markers */

    --serif: "IBM Plex Serif", Georgia, "Times New Roman", serif;
    --sans:  "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }

  a { color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 3px; }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 2px;
  }

  .skip {
    position: absolute;
    left: -9999px;
    top: 0.5rem;
    background: var(--ink);
    color: var(--paper);
    padding: 0.6rem 1rem;
    border-radius: 3px;
    z-index: 10;
  }
  .skip:focus { left: 0.5rem; }

  .page {
    max-width: 1080px;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
    display: grid;
    grid-template-columns: 17rem 1fr;
    gap: 5rem;
    align-items: start;
  }

  /* ============================================================
     Left rail — identity and navigation, sticky on desktop
     ============================================================ */

  .rail { position: sticky; top: 4rem; }

  .name {
    font-family: var(--serif);
    font-weight: 600;
    font-size: clamp(2.4rem, 4vw, 3.1rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0 0 1.1rem;
  }

  .title {
    font-size: 1rem;
    line-height: 1.45;
    margin: 0;
    padding-left: 0.9rem;
    border-left: 2px solid var(--accent);
  }
  .title span { display: block; color: var(--muted); }

  .nav {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);
  }
  .nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav a {
    display: block;
    padding: 0.35rem 0 0.35rem 0.9rem;
    margin-left: -1px;
    border-left: 2px solid transparent;
    color: var(--muted);
    font-size: 0.95rem;
    text-decoration: none;
    transition: color 0.15s ease, border-color 0.15s ease;
  }
  .nav a:hover { color: var(--ink); }
  .nav a[aria-current="true"] {
    color: var(--ink);
    font-weight: 500;
    border-left-color: var(--accent);
  }
  @media (prefers-reduced-motion: reduce) {
    .nav a { transition: none; }
  }

  /* ============================================================
     Content column
     ============================================================ */

  section {
    margin-bottom: 4.5rem;
    scroll-margin-top: 2rem;
  }
  section:last-child { margin-bottom: 0; }

  h2 {
    font-family: var(--serif);
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: -0.01em;
    margin: 0 0 1.5rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--rule);
  }

  .prose { max-width: 34rem; margin: 0; }

  .lede {
    max-width: 34rem;
    margin: 0 0 1.75rem;
    color: var(--muted);
    font-size: 0.95rem;
  }

  /* Skills — grouped, because the grouping is itself information */

  .skills {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 1.75rem 2.5rem;
  }
  .skills dt {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.35rem;
  }
  .skills dd {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.7;
  }

  /* Projects — ruled records rather than cards */

  .project {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 1.5rem;
    align-items: baseline;
    padding: 1.1rem 0;
    border-bottom: 1px solid var(--rule);
  }
  .project:first-of-type { border-top: 1px solid var(--rule); }

  .project h3 {
    font-family: var(--serif);
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0;
  }
  .project p { margin: 0; color: var(--muted); font-size: 0.95rem; }

  .resume-note { margin: 0; font-size: 1.05rem; }
  .resume-note small {
    display: block;
    margin-top: 0.4rem;
    font-size: 0.9rem;
    color: var(--muted);
  }

  /* Contact — icon and link pairs */

  .contact {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .contact li { margin-bottom: 0.9rem; }
  .contact li:last-child { margin-bottom: 0; }
  .contact a {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    word-break: break-word;
  }
  .contact svg {
    flex: none;
    width: 17px;
    height: 17px;
    fill: var(--muted);
  }
  .contact a:hover svg { fill: var(--accent); }

  footer {
    max-width: 1080px;
    margin: 0 auto;
    padding: 2rem;
    border-top: 1px solid var(--rule);
    color: var(--muted);
    font-size: 0.85rem;
  }

  /* ============================================================
     Mobile — rail unsticks, nav becomes a horizontal row
     ============================================================ */

  @media (max-width: 760px) {
    body { font-size: 16px; }

    .page {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding: 2.5rem 1.5rem 4rem;
    }

    .rail { position: static; }

    .nav { margin-top: 2rem; padding-top: 1.25rem; }
    .nav ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 1.4rem;
    }
    .nav a {
      padding: 0.3rem 0;
      margin-left: 0;
      border-left: none;
      border-bottom: 2px solid transparent;
    }
    .nav a[aria-current="true"] {
      border-left: none;
      border-bottom-color: var(--accent);
    }

    section { margin-bottom: 3.5rem; }

    .project {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
</style>
</head>

<body>

<a class="skip" href="#about">Skip to content</a>

<div class="page">

  <header class="rail">
    <h1 class="name">Mark Beatty</h1>
    <p class="title">
      Finance Student
      <span>David Eccles School of Business</span>
      <span>University of Utah</span>
    </p>

    <nav class="nav" aria-label="Sections">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <section id="about">
      <h2>About me</h2>
      <p class="prose">
        I'm a sophomore studying Finance at the David Eccles School of Business
        at the University of Utah. My goal is to start my own company, so I'm
        using school to build the pieces that takes: reading financial
        statements, understanding how capital actually moves, and learning to
        lead a team through work that isn't fully defined yet. Artificial
        intelligence is where most of my curiosity sits right now. I want to get
        past using the tools and train a model of my own, so I understand what
        really goes into the data, the training, and the cost before I'd ever
        build a business around one. On the technical side I'm early, and
        starting where it counts: web development and version control this
        semester, on top of the Excel work I already do.
      </p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <dl class="skills">
        <div>
          <dt>Leadership</dt>
          <dd>Team leadership<br>Project management<br>Team collaboration<br>Reliability</dd>
        </div>
        <div>
          <dt>Communication</dt>
          <dd>Public speaking<br>Written communication<br>Community support</dd>
        </div>
        <div>
          <dt>Business</dt>
          <dd>Microsoft Excel<br>Microsoft PowerPoint<br>Lead generation<br>Critical thinking</dd>
        </div>
        <div>
          <dt>Learning now</dt>
          <dd>HTML<br>Git &amp; GitHub<br>AI prompt engineering</dd>
        </div>
      </dl>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p class="lede">Placeholders for coursework this semester. I'll fill these
        in as each project is finished.</p>

      <article class="project">
        <h3>Project One</h3>
        <p>Coming this semester.</p>
      </article>

      <article class="project">
        <h3>Project Two</h3>
        <p>Coming this semester.</p>
      </article>

      <article class="project">
        <h3>Project Three</h3>
        <p>Coming this semester.</p>
      </article>

      <article class="project">
        <h3>Project Four</h3>
        <p>Coming this semester.</p>
      </article>
    </section>

    <section id="resume">
      <h2>Resume</h2>
      <p class="resume-note">
        Resume coming soon.
        <small>
          <!-- When your PDF is ready: add resume.pdf to this repository,
               then replace the line above with the link below. -->
          <!-- <a href="resume.pdf" download>Download my resume (PDF)</a> -->
          Check back later this semester.
        </small>
      </p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <ul class="contact">
        <li>
          <a href="mailto:mark.beatty@utah.edu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M0 5.25A2.25 2.25 0 0 1 2.25 3h19.5A2.25 2.25 0 0 1 24 5.25v.383l-12 6.75-12-6.75V5.25Zm0 2.67V18.75A2.25 2.25 0 0 0 2.25 21h19.5A2.25 2.25 0 0 0 24 18.75V7.92l-11.633 6.543a.75.75 0 0 1-.734 0L0 7.92Z"/></svg>
            mark.beatty@utah.edu
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mark-m-beatty/">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            linkedin.com/in/mark-m-beatty
          </a>
        </li>
        <li>
          <a href="https://github.com/MarkBeatty831">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 6.845c1.02.005 2.04.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            github.com/MarkBeatty831
          </a>
        </li>
      </ul>
    </section>

  </main>
</div>

<footer>
  Built and maintained by Mark Beatty.
</footer>

<script>
  // Highlight the nav link for whichever section is currently in view.
  (function () {
    var links = {};
    document.querySelectorAll('.nav a').forEach(function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = links[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.values(links).forEach(function (l) {
            l.removeAttribute('aria-current');
          });
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-10% 0px -70% 0px' });

    document.querySelectorAll('main section').forEach(function (s) {
      observer.observe(s);
    });
  })();
</script>

</body>
</html>
