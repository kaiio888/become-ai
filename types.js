/* Shared data used across pages: quotes + discipline-type profiles */

const QUOTES = [
  { text: "Motivation gets you started. A routine is what shows up after motivation leaves.", who: "Field Note 014" },
  { text: "You don't rise to the level of your goals. You fall to the level of your routine.", who: "Field Note 027" },
  { text: "Discipline is just a decision you already made, so you don't have to make it again today.", who: "Field Note 039" },
  { text: "The first rep doesn't build the habit. The rep after you don't feel like it does.", who: "Field Note 041" },
  { text: "A streak isn't broken by one bad day. It's broken by not showing up the day after.", who: "Field Note 052" },
  { text: "Small, repeated, unglamorous. That's the whole method.", who: "Field Note 058" },
  { text: "You don't need more willpower. You need fewer decisions standing between you and the habit.", who: "Field Note 063" },
  { text: "Track the process, not the mood. The mood will lie to you.", who: "Field Note 071" }
];

/* Four discipline-type profiles, mapped from the assessment */
const TYPES = {
  forger: {
    key: "forger",
    name: "The Forger",
    tagline: "Built by repetition, not motivation.",
    description: "You build discipline the way a blacksmith builds an edge — the same strike, repeated, until the shape holds on its own. Variety isn't your friend. Sameness is.",
    goals: [
      "Run the same 3 keystone habits at the same time, in the same order, for 21 days straight.",
      "Track unbroken repetition, not variety — one routine, refined slowly.",
      "Remove decisions from the process so the routine runs on autopilot."
    ],
    routineName: "The Forge Protocol",
    routine: "Same wake time, same first drink of water, same 10-minute movement block, same start time for your hardest task. Nothing rotates. If it's working, don't touch it.",
    workout: {
      split: "Structured strength, progressive overload — the same core lifts, refined weekly.",
      days: [
        { day: "Mon / Wed / Fri", plan: "Full-body strength: squat, push-up or bench, row, plank — same order every session. Add one small rep or a little load each week." },
        { day: "Tue / Thu", plan: "20-minute brisk walk, no phone." },
        { day: "Weekend", plan: "Rest one day, light mobility work the other." }
      ]
    }
  },
  sentinel: {
    key: "sentinel",
    name: "The Sentinel",
    tagline: "Guards the routine like a border.",
    description: "You don't need a complicated system. You need one hour nobody is allowed to touch. Your discipline is a wall, not a schedule.",
    goals: [
      "Defend one non-negotiable hour a day — usually the first hour — from any interruption.",
      "Build a single 'no-exceptions' rule for one keystone habit.",
      "Track how many days the guarded hour stayed intact, not how productive it was."
    ],
    routineName: "The Perimeter Check",
    routine: "Pick one hour. Phone in another room, notifications off, door closed if you need it. Treat it like a locked appointment that nobody — including you — is allowed to move.",
    workout: {
      split: "A fixed-time daily circuit — same time, non-negotiable.",
      days: [
        { day: "Every day, same time", plan: "3 rounds: 12–15 push-ups, 15 squats, 30-second plank, 12 lunges per side." },
        { day: "Sunday", plan: "Mobility and stretching only — the perimeter still holds, the intensity drops." }
      ]
    }
  },
  wildfire: {
    key: "wildfire",
    name: "The Wildfire",
    tagline: "Runs hot, needs fuel to keep burning.",
    description: "You don't lack drive — you lack a container for it. Left alone, your motivation burns bright and fast, then goes out. Give it short, urgent sprints and it'll keep relighting itself.",
    goals: [
      "Convert bursts of motivation into short, intense sprints with built-in recovery.",
      "Use a fresh deadline or challenge every 5–7 days to reignite momentum.",
      "Track your 'spark events' — the things that reliably get you moving again."
    ],
    routineName: "The Controlled Burn",
    routine: "Set a short, urgent 5-day sprint toward one goal with a visible finish line. Push hard. Then rest fully for two days before lighting the next one.",
    workout: {
      split: "HIIT-based, with real recovery built in — not optional, structural.",
      days: [
        { day: "Mon / Wed / Fri", plan: "20-minute HIIT: sprints, burpees, jump squats — 30 seconds on, 30 seconds off, 8 rounds." },
        { day: "Tue / Thu / Weekend", plan: "Full recovery — walk, stretch, or nothing. The burn needs the rest to mean anything." }
      ]
    }
  },
  cartographer: {
    key: "cartographer",
    name: "The Cartographer",
    tagline: "Maps the path before walking it.",
    description: "You build discipline through visibility — if you can't see the trend, you don't trust it. Give yourself a log and a weekly review and the consistency follows.",
    goals: [
      "Log every habit attempt — win or miss — in one simple tracker.",
      "Review the data weekly and adjust the plan, never the underlying goal.",
      "Set a measurable checkpoint every two weeks."
    ],
    routineName: "The Survey",
    routine: "Every Sunday, review what worked and what didn't. Write next week's plan on paper before the week starts — never mid-week.",
    workout: {
      split: "A periodized 4-week block, logged in detail every session.",
      days: [
        { day: "Week 1 — Base", plan: "Moderate reps, moderate load. Establish the numbers." },
        { day: "Week 2 — Build", plan: "Add one set per exercise." },
        { day: "Week 3 — Peak", plan: "Add load, keep sets the same." },
        { day: "Week 4 — Deload", plan: "Light recovery week, log how you feel, not just numbers." }
      ]
    }
  }
};

function getSavedType() {
  return localStorage.getItem('becomeai_type');
}
