const checkIns = {
  stress: {
    title: "Stress Support",
    intention: "I release what is not mine to carry today.",
    affirmation: "I am allowed to slow down without falling behind.",
    journal: "What pressure am I holding that can be softened, shared, or released?",
    session: "Suggested session: Full Distance Reiki or Sleep & Nervous System Reset."
  },
  sleep: {
    title: "Rest & Sleep Support",
    intention: "I invite my body to feel safe enough to rest.",
    affirmation: "My worth is not measured by how much I do.",
    journal: "What would make tonight feel calmer before I try to sleep?",
    session: "Suggested session: Sleep & Nervous System Reset."
  },
  transition: {
    title: "Life Transition Support",
    intention: "I honor the version of me that is changing.",
    affirmation: "I can move forward gently, one breath at a time.",
    journal: "What am I being asked to release, and what am I being invited to become?",
    session: "Suggested session: Intention Setting Session."
  },
  grounding: {
    title: "Grounding Support",
    intention: "I return to my breath, my body, and this moment.",
    affirmation: "I am here. I am safe. I can take the next step.",
    journal: "Where do I feel most grounded, and how can I bring more of that into today?",
    session: "Suggested session: Intro Distance Reiki."
  },
  open: {
    title: "Open Energy Support",
    intention: "I welcome clarity, peace, and whatever is ready to unfold.",
    affirmation: "I do not need all the answers to receive support.",
    journal: "What part of my life is asking for more attention, care, or curiosity?",
    session: "Suggested session: Full Distance Reiki."
  }
};

function runCheckIn() {
  const selected = document.getElementById("energy-state").value;
  const data = checkIns[selected];
  const box = document.getElementById("checkin-result");
  box.classList.remove("hidden");
  box.innerHTML = `
    <h3>${data.title}</h3>
    <div class="result-grid">
      <div><strong>Intention</strong><p>${data.intention}</p></div>
      <div><strong>Affirmation</strong><p>${data.affirmation}</p></div>
      <div><strong>Journal Prompt</strong><p>${data.journal}</p></div>
      <div><strong>Next Step</strong><p>${data.session}</p></div>
    </div>
  `;
}

function fakeAudio(title) {
  const message = document.getElementById("audio-message");
  message.textContent = `${title} is a placeholder for Daniel’s future audio recording.`;
}

function joinList(event) {
  event.preventDefault();
  const message = document.getElementById("signup-message");
  message.textContent = "You’re on the mockup list ✨ This can connect to Mailchimp, Kit, Flodesk, or Shopify Email later.";
  event.target.reset();
}
