const phrases = [
    "⠀Welcome to my website⠀",
    "⠀Glad to have you here⠀",
    "⠀Glad you are here⠀",
    "⠀Enjoy your visit⠀",
    '⠀hehe..... i am joker......⠀',
    "⠀I'm always watching 👀⠀",
    '⠀Turn around. Boo 👻⠀',
    '⠀A programmer from Moscow⠀',
    "⠀No, I'm not a furry⠀",
    '⠀Give me some stars on GitHub ⭐️⠀',
    '⠀Give me some stars on GitHub. Or else...⠀',
    '⠀Follow me on GitHub⠀',
    '⠀Follow me on GitHub. Or else...⠀',
    '⠀This website was created without using any AI. Probably.⠀', 
    '⠀Oh. I should probably keep this website “professional”⠀',
    '⠀Damn, I lost “the game”⠀',
    '⠀Do people really read this?⠀',
    '⠀This website is open-sourced⠀',
    '⠀This website is open-sourced. Give it a star on GitHub! ⭐️⠀',
    '⠀A geocaching addict⠀',
    "⠀Do not call me a 🤓⠀",
    "⠀GeoGuessr enjoyer⠀",
    "⠀I like to develop random stuff⠀",
    "⠀Bombardiro Crocodillo versus Tralalero Tralala 🐊🦈⠀",
  ];
  
  function typeEffect(element, phrases, typingDelay = 70, erasingDelay = 20, pauseDelay = 2000) {
    let currentPhrase = ""; // Store the current phrase
    let charIndex = 0; // Index for the current character in the phrase
    let isDeleting = false; // Flag to indicate whether we are typing or deleting
  
    function getRandomPhrase(previousPhrase) {
      let randomPhrase;
      do {
        randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      } while (randomPhrase === previousPhrase); // Ensure it's not the same as the last one
      return randomPhrase;
    }
  
    function type() {
      if (!currentPhrase) {
        // Select the initial phrase randomly
        currentPhrase = getRandomPhrase("");
      }
  
      if (isDeleting) {
        // Delete characters
        element.textContent = currentPhrase.substring(0, charIndex--);
      } else {
        // Type characters
        element.textContent = currentPhrase.substring(0, charIndex++);
      }
  
      // Check if we finished typing or deleting
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Wait before deleting
        setTimeout(() => (isDeleting = true), pauseDelay);
      } else if (isDeleting && charIndex === 1) {
        // Pick a new random phrase
        const previousPhrase = currentPhrase;
        currentPhrase = getRandomPhrase(previousPhrase);
        isDeleting = false;
      }
  
      // Set the delay for typing or deleting
      const delay = isDeleting ? erasingDelay : typingDelay;
      setTimeout(type, delay);
    }
  
    type();
  }
  
  // Get the subtext element
  const subtextElement = document.getElementById("subtext");
  
  // Start the typing effect
  typeEffect(subtextElement, phrases);