const phrases = [
    "Welcome to my website",
    "Glad to have you here",
    "Glad you are here",
    "Enjoy your visit",
    'hehe..... i am joker......',
    "I'm always watching 👀",
    'Turn around. Boo 👻',
    'A programmer from Moscow',
    "No, I'm not a furry",
    'Give me some stars on GitHub ⭐️',
    'Give me some stars on GitHub. Or else...',
    'Follow me on GitHub',
    'Follow me on GitHub. Or else...',
    'This website was created without using any AI. Probably.', 
    'Oh. I should probably keep this website “professional”',
    'Damn, I lost “the game”',
    'Do people really read this?',
    'This website is open-sourced',
    'This website is open-sourced. Give it a star on GitHub! ⭐️',
    'A geocaching addict',
    "Do not call me a 🤓",
    "GeoGuessr enjoyer",
    "I like to develop random stuff",
    "Bombardiro Crocodillo versus Tralalero Tralala 🐊🦈",
    "TmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA=",
    "I've seen you before, stranger...",
    "🐷 #TechnobladeNeverDies",
    "No one asked",
    "Who cares?",
    "🌏 I use multi-million dollar satellites to find tupperware in the woods. And what's your hobby?",
  ];
  
  function typeEffect(element, phrases, typingDelay = 70, erasingDelay = 20, pauseDelay = 2000) {
    let currentPhrase = "";
    let charIndex = 0; 
    let isDeleting = false; 
  
    function getRandomPhrase(previousPhrase) {
      let randomPhrase;
      do {
        randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      } while (randomPhrase === previousPhrase);
      return `⠀${randomPhrase}⠀`;
    }
  
    function type() {
      if (!currentPhrase) {
        currentPhrase = getRandomPhrase("");
      }
  
      if (isDeleting) {
        element.textContent = currentPhrase.substring(0, charIndex--);
      } else {
        element.textContent = currentPhrase.substring(0, charIndex++);
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => (isDeleting = true), pauseDelay);
      } else if (isDeleting && charIndex === 1) {
        const previousPhrase = currentPhrase;
        currentPhrase = getRandomPhrase(previousPhrase);
        isDeleting = false;
      }
  
      const delay = isDeleting ? erasingDelay : typingDelay;
      setTimeout(type, delay);
    }
  
    type();
  }
  
  const subtextElement = document.getElementById("subtext");
  
  typeEffect(subtextElement, phrases);