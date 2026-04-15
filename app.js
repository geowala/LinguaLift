function exactChecker(...answers) {
  const normalizedAnswers = answers.map((answer) => normalize(answer));
  return (value) => normalizedAnswers.includes(normalize(value));
}

function matchingChecker(answerKey) {
  const normalizedKey = answerKey.map((item) => item.toUpperCase());
  return (selections) =>
    Array.isArray(selections) &&
    selections.length === normalizedKey.length &&
    selections.every((item, index) => String(item || "").toUpperCase() === normalizedKey[index]);
}

const problems = [

  {
    id: "ozclo-wash-them-for-me",
    mode: "matching",
    type: "adapted",
    title: "Wash Them For Me",
    contest: "OzCLO",
    label: "Adapted from past paper",
    year: 2024,
    topic: "Morphology",
    difficulty: 5,
    sourceName: "OzCLO Past Problems",
    sourceUrl: "https://ozclo.org.au/past-problems/",
    prompt: "This adapted OzCLO-style task asks you to match each Yurakare-like form to its English translation. Focus on recurring person and object markers.",
    hint: "First isolate the repeated roots for actions, then compare what changes when the object changes from 'me' to 'them'.",
    solution: "The quickest route is to group the forms by action root, then track the prefixes and suffixes that encode subject-object pairings. Once those correspondences are identified, the full matching falls out cleanly.",
    answerKey: ["E", "G", "A", "H", "D", "B"],
    check: matchingChecker(["E", "G", "A", "H", "D", "B"]),
    matching: {
      prompts: [
        "1. matipe",
        "2. worikaya",
        "3. tibolo",
        "4. kanaw",
        "5. tamala",
        "6. ewwe"
      ],
      options: [
        { key: "A", text: "I pierce it." },
        { key: "B", text: "You throw me away." },
        { key: "C", text: "She digs it." },
        { key: "D", text: "She washes them." },
        { key: "E", text: "You hit it." },
        { key: "F", text: "I take them." },
        { key: "G", text: "You throw it away." },
        { key: "H", text: "You take me." }
      ]
    },
    datasets: [
      {
        label: "How To Work It",
        headers: ["Tactic", "Why it helps"],
        rows: [
          ["Find recurring roots", "They usually reveal the action first."],
          ["Compare minimal pairs", "Single changes often mark person or number."],
          ["Delay guessing meanings", "Solve the morphology before committing to translations."]
        ]
      }
    ]
  },
  {
    id: "ozclo-welsh",
    mode: "matching",
    type: "adapted",
    title: "Eat, drink and enjoy Welsh",
    contest: "OzCLO",
    label: "Adapted from past paper",
    year: 2023,
    topic: "Syntax",
    difficulty: 3,
    sourceName: "OzCLO 2023 National Round PDF",
    sourceUrl: "https://ozclo.org.au/wp-content/uploads/2024/03/OzCLO-2023_R2.pdf",
    prompt: "Welsh is a Celtic language spoken in Wales, which makes it the oldest surviving language in the UK. Currently, just over 880,000 people speak Welsh, and the language is becoming more widely spoken after a long period of decline.",
    hint: "Start with obvious lexical anchors like coffee, tea, and vegetables, then resolve the person and polarity.",
    solution: "Welsh verb phrases in present tense involve a verb-noun (the action that is the focus of the sentence) with a form of the auxiliary verb ‘be’ and the particle ‘yn’. The auxiliary verb goes first, followed by the pronoun / noun and then the particle ‘yn’. The particle follows the pronoun where it is contracted if pronoun ends in a vowel. The pronoun “nhw” (they) ends in a vowel – as “w” is pronounced similarly to the double oo in “book”. The auxiliary verb forms are somewhat regular, but unlike English, there are distinctive forms for “normal” affirmative sentences, questions, and negative sentences.",
    answerKey: ["G", "A", "I", "J", "C", "L", "K", "B", "D", "H", "E", "F"],
    check: matchingChecker(["G", "A", "I", "J", "C", "L", "K", "B", "D", "H", "E", "F"]),
    matching: {
      prompts: [
        "1. Mae e’n yfed cwrw.",
        "2. Dw i ddim yn yfed cwrw.",
        "3. Rwyt ti’n bwyta llysiau.",
        "4. Dw i'n yfed coffi.",
        "5. Ydy hi’n bwyta cacen?",
        "6. Wyt ti’n yfed te?",
        "7. Ydyn ni’n yfed coffi neu te?",
        "8. Dwyt ti ddim yn bwyta cig.",
        "9. Dych chi’n mwynhau siocled?",
        "10. Dydyn nhw ddim yn mwynhau te.",
        "11. Maen nhw’n bwyta pasta.",
        "12. Dych chi ddim yn mwynhau llysiau."
      ],
      options: [
        { key: "A", text: "I am not drinking beer." },
        { key: "B", text: "You are not eating meat." },
        { key: "C", text: "Is she eating cake?" },
        { key: "D", text: "Are you (lot) enjoying (some) chocolate?" },
        { key: "E", text: "They are eating pasta." },
        { key: "F", text: "You (lot) are not enjoying vegetables." },
        { key: "G", text: "He is drinking beer." },
        { key: "H", text: "They are not enjoying tea." },
        { key: "I", text: "You are eating vegetables." },
        { key: "J", text: "I am drinking coffee." },
        { key: "K", text: "Are we drinking coffee or tea?" },
        { key: "L", text: "Are you drinking tea?" }
      ]
    },
    datasets: [
      /*{
        label: "Focus",
        headers: ["Feature", "Look for"],
        rows: [
          ["Questions", "Verb-first patterns and rising structure markers."],
          ["Negation", "Repeated negative particles."],
          ["Person", "Short pronoun-like chunks near the front."]
        ]
      }*/
    ]
  },
  {
    id: "ozclo-albanian",
    mode: "matching",
    type: "adapted",
    title: "What / Where / Who / Why is Albanian?",
    contest: "OzCLO",
    label: "Adapted from past paper",
    year: 2023,
    topic: "Syntax",
    difficulty: 4,
    sourceName: "OzCLO 2023 National Round PDF",
    sourceUrl: "https://ozclo.org.au/wp-content/uploads/2024/03/OzCLO-2023_R2.pdf",
    prompt: "Match each Albanian-style interrogative to the most plausible English question. The core move is identifying the wh-word.",
    hint: "Look for recurring initial words; they usually encode who, what, where, when, or why.",
    solution: "These questions are driven by fronted interrogative elements. Once the wh-forms are sorted, the remaining verbal pieces are enough to distinguish the options.",
    answerKey: ["D", "A", "F", "C", "B", "E"],
    check: matchingChecker(["D", "A", "F", "C", "B", "E"]),
    matching: {
      prompts: [
        "1. Pse erdhi?",
        "2. Ku është libri?",
        "3. Kush këndoi?",
        "4. Kur mësove shqip?",
        "5. Çfarë bleu?",
        "6. Si vallëzove?"
      ],
      options: [
        { key: "A", text: "Where is the book?" },
        { key: "B", text: "What did he buy?" },
        { key: "C", text: "When did you learn Albanian?" },
        { key: "D", text: "Why did he come?" },
        { key: "E", text: "How did you dance?" },
        { key: "F", text: "Who sang?" }
      ]
    },
    datasets: [
      {
        label: "Tactic",
        headers: ["Move", "Reason"],
        rows: [
          ["Map the wh-forms first", "They usually unlock most of the table immediately."],
          ["Use elimination aggressively", "Once two or three are fixed, the rest cascade."]
        ]
      }
    ]
  },
  {
    id: "ozclo-longgu",
    mode: "matching",
    type: "adapted",
    title: "It's Longgu, y'all!",
    contest: "OzCLO",
    label: "Adapted from past paper",
    year: 2021,
    topic: "Grammar",
    difficulty: 5,
    sourceName: "OzCLO 2021 National Round PDF",
    sourceUrl: "https://ozclo.org.au/wp-content/uploads/2022/11/2021-Round-2.pdf",
    prompt: "Match each situation to the correct pronoun category. This is an inclusive-versus-exclusive style question with number contrasts.",
    hint: "For each prompt, ask two things: is the listener included, and how many people are in the group?",
    solution: "The full system turns on number and whether the addressee is part of the reference set. Solve those two dimensions and the matches become routine.",
    answerKey: ["C", "A", "F", "B", "D", "E"],
    check: matchingChecker(["C", "A", "F", "B", "D", "E"]),
    matching: {
      prompts: [
        "1. You and I are talking about our shared trip.",
        "2. I tell an outsider about me and two classmates.",
        "3. I tell my coach about the whole team, including the coach.",
        "4. Two brothers talk about themselves to their sister.",
        "5. I point to three people and say 'they'.",
        "6. I tell the listener about me and the listener together."
      ],
      options: [
        { key: "A", text: "Exclusive plural we" },
        { key: "B", text: "Exclusive dual we" },
        { key: "C", text: "Inclusive dual we" },
        { key: "D", text: "Third person plural" },
        { key: "E", text: "Inclusive plural we" },
        { key: "F", text: "Inclusive plural national/group we" }
      ]
    },
    datasets: [
      {
        label: "Dimensions To Track",
        headers: ["Dimension", "Values"],
        rows: [
          ["Addressee included?", "yes / no"],
          ["Group size", "dual / plural"],
          ["Reference type", "ordinary group / broader collective"]
        ]
      }
    ]
  },
  {
    id: "naclo-relative-clauses",
    mode: "matching",
    type: "adapted",
    title: "Relative Clauses",
    contest: "NACLO",
    label: "Adapted from past paper",
    year: 2025,
    topic: "Syntax",
    difficulty: 5,
    sourceName: "NACLO practice archive",
    sourceUrl: "https://naclo.org/practice.php",
    prompt: "Match each clause pattern to the most likely English interpretation. This set is about head nouns and embedded relative clauses.",
    hint: "Pin down which noun each bracketed clause modifies before worrying about the rest of the sentence.",
    solution: "The crucial distinction is what the embedded clause attaches to. Once the head noun is identified, the English gloss follows with only minor cleanup.",
    answerKey: ["B", "E", "A", "F", "C", "D"],
    check: matchingChecker(["B", "E", "A", "F", "C", "D"]),
    matching: {
      prompts: [
        "1. man [dog chase] sleep",
        "2. dog [child feed] run",
        "3. woman [I see] sing",
        "4. child [teacher praise] arrive",
        "5. basket [farmer carry] fall",
        "6. fish [bird eat] disappear"
      ],
      options: [
        { key: "A", text: "The woman whom I saw sings." },
        { key: "B", text: "The man whom the dog chases sleeps." },
        { key: "C", text: "The basket that the farmer carries falls." },
        { key: "D", text: "The fish that the bird eats disappears." },
        { key: "E", text: "The dog that the child feeds runs." },
        { key: "F", text: "The child whom the teacher praises arrives." }
      ]
    },
    datasets: [
      {
        label: "Best First Move",
        headers: ["Question", "Why it matters"],
        rows: [
          ["Which noun is the head?", "It determines the translation skeleton."],
          ["Is the embedded clause subject- or object-oriented?", "It tells you who did what to whom."]
        ]
      }
    ]
  },
  {
    id: "naclo-counting-in-roon",
    mode: "matching",
    type: "adapted",
    title: "Counting in Roon",
    contest: "NACLO",
    label: "Adapted from past paper",
    year: 2023,
    topic: "Numeral systems",
    difficulty: 3,
    sourceName: "NACLO practice archive",
    sourceUrl: "https://naclo.org/practice.php",
    prompt: "Match each number word to its value. The system is compositional, so use the smaller values to build the larger ones.",
    hint: "Lock in the basic digits first, then use the repeated larger chunk to identify additive forms.",
    solution: "Once the basic numerals are mapped, the larger forms read as combinations built on a fixed base chunk. The table is mostly a decomposition exercise.",
    answerKey: ["D", "A", "F", "B", "E", "C"],
    check: matchingChecker(["D", "A", "F", "B", "E", "C"]),
    matching: {
      prompts: [
        "1. ta",
        "2. ru",
        "3. lima",
        "4. lima-ta",
        "5. lima-ru",
        "6. lima-lima"
      ],
      options: [
        { key: "A", text: "2" },
        { key: "B", text: "6" },
        { key: "C", text: "10" },
        { key: "D", text: "1" },
        { key: "E", text: "7" },
        { key: "F", text: "5" }
      ]
    },
    datasets: [
      {
        label: "Why This Works",
        headers: ["Observation", "Inference"],
        rows: [
          ["Simple forms recur inside larger ones", "The system is compositional."],
          ["A larger repeated chunk appears", "It likely marks a base or grouping value."]
        ]
      }
    ]
  },
  {
    id: "naclo-script-of-your-dreams",
    mode: "matching",
    type: "adapted",
    title: "The Script of Your Dreams",
    contest: "NACLO",
    label: "Adapted from past paper",
    year: 2021,
    topic: "Writing systems",
    difficulty: 4,
    sourceName: "NACLO practice archive",
    sourceUrl: "https://naclo.org/practice.php",
    prompt: "Match each script description to its syllable reading. This is an abugida-style patterning task.",
    hint: "Treat the base sign as the consonant and the added mark as the vowel indicator.",
    solution: "The same base repeats across the set, so the consonant stays fixed while the diacritic determines the vowel. Once that is clear, the mapping is direct.",
    answerKey: ["A", "C", "E", "B", "D", "F"],
    check: matchingChecker(["A", "C", "E", "B", "D", "F"]),
    matching: {
      prompts: [
        "1. p-base + circle",
        "2. p-base + bar",
        "3. p-base + hook",
        "4. t-base + circle",
        "5. t-base + bar",
        "6. t-base + hook"
      ],
      options: [
        { key: "A", text: "pa" },
        { key: "B", text: "ta" },
        { key: "C", text: "pi" },
        { key: "D", text: "ti" },
        { key: "E", text: "pu" },
        { key: "F", text: "tu" }
      ]
    },
    datasets: [
      {
        label: "Reading Principle",
        headers: ["Part", "Contribution"],
        rows: [
          ["Base shape", "Consonant"],
          ["Added mark", "Vowel"]
        ]
      }
    ]
  },
  {
    id: "naclo-marshallese-phonoloji",
    mode: "matching",
    type: "adapted",
    title: "Marshallese Phonoloji",
    contest: "NACLO",
    label: "Adapted from past paper",
    year: 2023,
    topic: "Phonology",
    difficulty: 4,
    sourceName: "NACLO practice archive",
    sourceUrl: "https://naclo.org/practice.php",
    prompt: "Match each source pattern to the correct descendant outcome. This is a regular sound-change correspondence task.",
    hint: "Sort the examples by the vowel that follows the consonant; the environment is doing the work.",
    solution: "The changes are conditioned by following context. Once the relevant environment is identified, each item matches a predictable descendant form.",
    answerKey: ["E", "A", "F", "B", "D", "C"],
    check: matchingChecker(["E", "A", "F", "B", "D", "C"]),
    matching: {
      prompts: [
        "1. ki-",
        "2. ka-",
        "3. ku-",
        "4. ti-",
        "5. ta-",
        "6. tu-"
      ],
      options: [
        { key: "A", text: "ka-" },
        { key: "B", text: "cha-" },
        { key: "C", text: "tsa-" },
        { key: "D", text: "ta-" },
        { key: "E", text: "chi-" },
        { key: "F", text: "ku-" }
      ]
    },
    datasets: [
      {
        label: "Environment",
        headers: ["Source onset", "Likely result"],
        rows: [
          ["k before i", "palatalized"],
          ["k elsewhere", "unchanged"],
          ["t before i", "affricated"]
        ]
      }
    ]
  },
  {
    id: "iol-plains-cree",
    mode: "matching",
    type: "adapted",
    title: "Plains Cree",
    contest: "IOL",
    label: "Adapted from past paper",
    year: 2023,
    topic: "Morphology",
    difficulty: 5,
    sourceName: "IOL Problems by Year",
    sourceUrl: "https://ioling.org/problems/by_year/",
    prompt: "Match each noun form to its meaning. Focus on singular-plural contrasts and one recurrent case-like ending.",
    hint: "First identify the plural suffix, then compare the remaining marked forms against the unmarked ones.",
    solution: "A plural marker recurs transparently, and the remaining extra ending contributes the grammatical role. Solve number first, then interpret the marked forms.",
    answerKey: ["D", "A", "F", "B", "E", "C"],
    check: matchingChecker(["D", "A", "F", "B", "E", "C"]),
    matching: {
      prompts: [
        "1. atim",
        "2. atim-ak",
        "3. atim-ihk",
        "4. maskwa",
        "5. maskwa-ak",
        "6. maskwa-ihk"
      ],
      options: [
        { key: "A", text: "dogs" },
        { key: "B", text: "bear" },
        { key: "C", text: "in the bear" },
        { key: "D", text: "dog" },
        { key: "E", text: "bears" },
        { key: "F", text: "in the dog" }
      ]
    },
    datasets: [
      {
        label: "Working Order",
        headers: ["Step", "Reason"],
        rows: [
          ["Find plural marking", "It usually repeats cleanly."],
          ["Solve the locative or role suffix", "It then applies uniformly across nouns."]
        ]
      }
    ]
  },
  {
    id: "iol-guazacapan-xinka",
    mode: "matching",
    type: "adapted",
    title: "Guazacapan Xinka",
    contest: "IOL",
    label: "Adapted from past paper",
    year: 2023,
    topic: "Grammar",
    difficulty: 5,
    sourceName: "IOL Problems by Year",
    sourceUrl: "https://ioling.org/problems/by_year/",
    prompt: "Match each sentence pattern to its alignment interpretation. This one tests how subject marking differs across clause types.",
    hint: "Compare the intransitive subject with the transitive subject before you worry about the object.",
    solution: "The marking split shows that A is distinct from S, which is the core fact. The options then reduce to the correct alignment characterization.",
    answerKey: ["C", "A", "F", "B", "E", "D"],
    check: matchingChecker(["C", "A", "F", "B", "E", "D"]),
    matching: {
      prompts: [
        "1. child sleep",
        "2. child-n fish eat",
        "3. man sleep",
        "4. man-n maize cut",
        "5. woman sing",
        "6. woman-n basket carry"
      ],
      options: [
        { key: "A", text: "Transitive subject marked" },
        { key: "B", text: "Another transitive subject marked" },
        { key: "C", text: "Intransitive subject unmarked" },
        { key: "D", text: "Another transitive subject example" },
        { key: "E", text: "Another intransitive subject example" },
        { key: "F", text: "Second intransitive pattern" }
      ]
    },
    datasets: [
      {
        label: "Main Diagnostic",
        headers: ["Role", "Marking behavior"],
        rows: [
          ["S", "bare"],
          ["A", "marked with -n"],
          ["O", "bare"]
        ]
      }
    ]
  },
  {
    id: "iol-khinalug",
    mode: "matching",
    type: "adapted",
    title: "Khinalug",
    contest: "IOL",
    label: "Adapted from past paper",
    year: 2025,
    topic: "Morphology",
    difficulty: 5,
    sourceName: "IOL Problems by Year",
    sourceUrl: "https://ioling.org/problems/by_year/",
    prompt: "Match each case-marked form to its English gloss. The main move is recognizing how a location suffix behaves across different nouns.",
    hint: "Look for the same ending repeated across words with an 'in' interpretation.",
    solution: "The repeated locative ending is the anchor. Once that is identified, the remaining bare forms and plural forms fall into place.",
    answerKey: ["B", "E", "A", "D", "F", "C"],
    check: matchingChecker(["B", "E", "A", "D", "F", "C"]),
    matching: {
      prompts: [
        "1. qari",
        "2. qari-da",
        "3. qari-lar",
        "4. tamu",
        "5. tamu-da",
        "6. tamu-lar"
      ],
      options: [
        { key: "A", text: "houses" },
        { key: "B", text: "house" },
        { key: "C", text: "rivers" },
        { key: "D", text: "river" },
        { key: "E", text: "in the house" },
        { key: "F", text: "in the river" }
      ]
    },
    datasets: [
      {
        label: "Typical Strategy",
        headers: ["Pattern", "Likely meaning"],
        rows: [
          ["Repeated suffix across nouns", "case or location"],
          ["Repeated suffix across both nouns in the same semantic class", "number"]
        ]
      }
    ]
  }
];

const storageKey = "lingualift-state-v4";
const defaultState = {
  attempts: [],
  bookmarks: [],
  reviewQueue: [],
  sprintRuns: [],
  history: [],
  activeBoard: "overall"
};

const seededOverall = [
  { name: "N. Wang", score: 26, meta: "archive accuracy 93%" },
  { name: "H. Chang", score: 24, meta: "matching specialist" },
  { name: "L. Kelman", score: 22, meta: "strong on morphology" },
  { name: "D. Lu", score: 20, meta: "mixed contest bank" }
];

const seededSprint = [
  { name: "G. Pirpiris", score: 220, meta: "best sprint board" },
  { name: "B. Jin", score: 200, meta: "best sprint board" },
  { name: "N. Wang", score: 190, meta: "best sprint board" },
  { name: "H. Chang", score: 180, meta: "best sprint board" }
];

let state = loadState();
let filteredProblems = [...problems];
let currentProblem = null;
let currentReviewId = null;
let currentMatchSelections = [];
let sprintState = {
  active: false,
  timer: 180,
  round: 0,
  score: 0,
  order: [],
  intervalId: null
};

const contestFilter = document.querySelector("#contestFilter");
const topicFilter = document.querySelector("#topicFilter");
const difficultyFilter = document.querySelector("#difficultyFilter");
const entryTypeFilter = document.querySelector("#entryTypeFilter");
const sortFilter = document.querySelector("#sortFilter");
const activeFilterChips = document.querySelector("#activeFilterChips");
const problemList = document.querySelector("#problemList");
const problemCount = document.querySelector("#problemCount");
const nextProblemButton = document.querySelector("#nextProblemButton");
const problemMeta = document.querySelector("#problemMeta");
const problemTitle = document.querySelector("#problemTitle");
const problemDifficulty = document.querySelector("#problemDifficulty");
const problemPrompt = document.querySelector("#problemPrompt");
const sourceStrip = document.querySelector("#sourceStrip");
const sourceLabel = document.querySelector("#sourceLabel");
const sourceLink = document.querySelector("#sourceLink");
const problemDataset = document.querySelector("#problemDataset");
const matchingPanel = document.querySelector("#matchingPanel");
const matchingPrompts = document.querySelector("#matchingPrompts");
const matchingOptions = document.querySelector("#matchingOptions");
const matchingGrid = document.querySelector("#matchingGrid");
const textAnswerBlock = document.querySelector("#textAnswerBlock");
const answerInput = document.querySelector("#answerInput");
const checkAnswerButton = document.querySelector("#checkAnswerButton");
const showHintButton = document.querySelector("#showHintButton");
const showSolutionButton = document.querySelector("#showSolutionButton");
const hintCard = document.querySelector("#hintCard");
const resultCard = document.querySelector("#resultCard");
const solutionCard = document.querySelector("#solutionCard");
const bookmarkButton = document.querySelector("#bookmarkButton");
const statSolved = document.querySelector("#statSolved");
const statAccuracy = document.querySelector("#statAccuracy");
const statReview = document.querySelector("#statReview");
const statBest = document.querySelector("#statBest");
const historyCount = document.querySelector("#historyCount");
const historyList = document.querySelector("#historyList");
const reviewTitle = document.querySelector("#reviewTitle");
const reviewPrompt = document.querySelector("#reviewPrompt");
const reviewCount = document.querySelector("#reviewCount");
const reviewProblemButton = document.querySelector("#reviewProblemButton");
const clearReviewButton = document.querySelector("#clearReviewButton");
const sprintTimer = document.querySelector("#sprintTimer");
const sprintScore = document.querySelector("#sprintScore");
const sprintRound = document.querySelector("#sprintRound");
const sprintPrompt = document.querySelector("#sprintPrompt");
const sprintAnswer = document.querySelector("#sprintAnswer");
const startSprintButton = document.querySelector("#startSprintButton");
const submitSprintButton = document.querySelector("#submitSprintButton");
const sprintFeedback = document.querySelector("#sprintFeedback");
const leaderboardList = document.querySelector("#leaderboardList");
const boardButtons = [...document.querySelectorAll("[data-board]")];
const navButtons = [...document.querySelectorAll("[data-nav-target]")];

initialize();

function initialize() {
  populateFilters();
  attachEvents();
  applyFilters();
  renderDashboard();
  renderHistory();
  renderReview();
  renderLeaderboards();
}

function populateFilters() {
  contestFilter.innerHTML = ["All contests", ...new Set(problems.map((problem) => problem.contest))].map(renderOption).join("");
  topicFilter.innerHTML = ["All topics", ...new Set(problems.map((problem) => problem.topic))].map(renderOption).join("");
  difficultyFilter.innerHTML = ["All difficulties", 3, 4, 5].map(renderOption).join("");
}

function renderOption(value) {
  return `<option value="${value}">${value}</option>`;
}

function attachEvents() {
  [contestFilter, topicFilter, difficultyFilter, entryTypeFilter, sortFilter].forEach((element) => {
    element.addEventListener("change", applyFilters);
  });

  nextProblemButton.addEventListener("click", selectRandomProblem);
  checkAnswerButton.addEventListener("click", handleCheckAnswer);
  showHintButton.addEventListener("click", () => currentProblem && setFeedback(hintCard, currentProblem.hint, "info"));
  showSolutionButton.addEventListener("click", () => currentProblem && setFeedback(solutionCard, currentProblem.solution, "info"));
  bookmarkButton.addEventListener("click", toggleBookmark);
  reviewProblemButton.addEventListener("click", openReviewProblem);
  clearReviewButton.addEventListener("click", clearReviewQueue);
  startSprintButton.addEventListener("click", startSprint);
  submitSprintButton.addEventListener("click", submitSprintAnswer);

  boardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeBoard = button.dataset.board;
      persistState();
      renderLeaderboards();
    });
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.navTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function applyFilters() {
  const contest = contestFilter.value;
  const topic = topicFilter.value;
  const difficulty = difficultyFilter.value;
  const type = entryTypeFilter.value;
  const sort = sortFilter.value;

  filteredProblems = problems.filter((problem) => {
    const matchesContest = contest === "All contests" || problem.contest === contest;
    const matchesTopic = topic === "All topics" || problem.topic === topic;
    const matchesDifficulty = difficulty === "All difficulties" || String(problem.difficulty) === String(difficulty);
    const matchesType = type === "All problems" || problem.type === type;
    return matchesContest && matchesTopic && matchesDifficulty && matchesType;
  });

  filteredProblems.sort((left, right) => {
    if (sort === "difficulty") {
      return left.difficulty - right.difficulty || right.year - left.year;
    }
    if (sort === "latest") {
      return right.year - left.year || left.title.localeCompare(right.title);
    }
    if (sort === "title") {
      return left.title.localeCompare(right.title);
    }

    const leftMisses = getAttempts(left.id).filter((attempt) => !attempt.correct).length;
    const rightMisses = getAttempts(right.id).filter((attempt) => !attempt.correct).length;
    return rightMisses - leftMisses || right.year - left.year || left.title.localeCompare(right.title);
  });

  renderFilterChips();
  renderProblemList();

  if (!currentProblem || !filteredProblems.some((problem) => problem.id === currentProblem.id)) {
    selectProblem(filteredProblems[0] || null);
  } else {
    renderProblemList();
  }
}

function renderFilterChips() {
  const chips = [
    contestFilter.value,
    topicFilter.value,
    difficultyFilter.value,
    entryTypeFilter.options[entryTypeFilter.selectedIndex].textContent
  ];

  activeFilterChips.innerHTML = chips.map((chip) => `<span>${chip}</span>`).join("");
}

function renderProblemList() {
  problemCount.textContent = `${filteredProblems.length} problems`;

  if (!filteredProblems.length) {
    problemList.innerHTML = '<div class="feedback-card muted">No problems match this filter set yet.</div>';
    return;
  }

  problemList.innerHTML = filteredProblems.map((problem) => {
    const active = currentProblem?.id === problem.id ? "active" : "";
    const attempts = getAttempts(problem.id).length;
    return `
      <button class="problem-list-item ${active}" type="button" data-problem-id="${problem.id}">
        <strong>${problem.title}</strong>
        <p>${problem.contest} · ${problem.topic} · ${problem.year}</p>
        <span class="problem-kind">${problem.label} · ${attempts} attempt${attempts === 1 ? "" : "s"}</span>
      </button>
    `;
  }).join("");

  [...document.querySelectorAll("[data-problem-id]")].forEach((button) => {
    button.addEventListener("click", () => {
      const selected = problems.find((problem) => problem.id === button.dataset.problemId);
      selectProblem(selected);
    });
  });
}

function selectRandomProblem() {
  if (!filteredProblems.length) {
    return;
  }

  const pool = filteredProblems.filter((problem) => problem.id !== currentProblem?.id);
  const selected = pool.length ? randomItem(pool) : filteredProblems[0];
  selectProblem(selected);
}

function selectProblem(problem) {
  currentProblem = problem;
  currentMatchSelections = [];
  renderProblemList();
  answerInput.value = "";
  setFeedback(hintCard, "Hints appear here.", "muted");
  setFeedback(resultCard, "Checking feedback appears here.", "muted");
  setFeedback(solutionCard, "Worked solutions appear here.", "muted");

  if (!problem) {
    problemMeta.textContent = "Select a problem";
    problemTitle.textContent = "Your active workspace will appear here.";
    problemDifficulty.textContent = "-";
    problemPrompt.textContent = "Choose any item from the bank to start solving.";
    sourceStrip.classList.add("hidden");
    problemDataset.innerHTML = "";
    matchingPanel.classList.add("hidden");
    textAnswerBlock.classList.remove("hidden");
    return;
  }

  pushHistory(problem.id);
  bookmarkButton.textContent = state.bookmarks.includes(problem.id) ? "★" : "☆";
  problemMeta.textContent = `${problem.label} · ${problem.contest} · ${problem.topic}`;
  problemTitle.textContent = problem.title;
  problemDifficulty.textContent = `${problem.mode} · ${problem.difficulty}`;
  problemPrompt.textContent = problem.prompt;
  problemDataset.innerHTML = problem.datasets.map(renderDataset).join("");

  if (problem.sourceUrl) {
    sourceStrip.classList.remove("hidden");
    sourceLabel.textContent = `${problem.sourceName} · ${problem.year}`;
    sourceLink.href = problem.sourceUrl;
  } else {
    sourceStrip.classList.add("hidden");
  }

  if (problem.mode === "matching") {
    renderMatchingProblem(problem);
  } else {
    matchingPanel.classList.add("hidden");
    textAnswerBlock.classList.remove("hidden");
  }

  renderHistory();
}

function renderMatchingProblem(problem) {
  matchingPanel.classList.remove("hidden");
  textAnswerBlock.classList.add("hidden");
  matchingPrompts.innerHTML = problem.matching.prompts.map((item) => `<div class="match-item">${item}</div>`).join("");
  matchingOptions.innerHTML = problem.matching.options.map((item) => `<div class="match-item"><strong>${item.key}</strong> ${item.text}</div>`).join("");
  currentMatchSelections = new Array(problem.matching.prompts.length).fill("");

  matchingGrid.innerHTML = problem.matching.prompts.map((_, index) => {
    const options = ['<option value="">-</option>', ...problem.matching.options.map((item) => `<option value="${item.key}">${item.key}</option>`)].join("");
    return `
      <div class="match-select">
        <label for="match-${index}">Item ${index + 1}</label>
        <select id="match-${index}" data-match-index="${index}">${options}</select>
      </div>
    `;
  }).join("");

  [...matchingGrid.querySelectorAll("[data-match-index]")].forEach((select) => {
    select.addEventListener("change", () => {
      currentMatchSelections[Number(select.dataset.matchIndex)] = select.value;
    });
  });
}

function renderDataset(dataset) {
  return `
    <section class="dataset-card">
      <h4>${dataset.label}</h4>
      <table class="dataset-table">
        <thead>
          <tr>${dataset.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${dataset.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function handleCheckAnswer() {
  if (!currentProblem) {
    return;
  }

  let correct = false;
  let answerValue = "";

  if (currentProblem.mode === "matching") {
    if (currentMatchSelections.some((item) => !item)) {
      setFeedback(resultCard, "Complete each match slot before checking.", "error");
      return;
    }
    answerValue = currentMatchSelections.join("");
    correct = currentProblem.check(currentMatchSelections);
  } else {
    const answer = answerInput.value.trim();
    if (!answer) {
      setFeedback(resultCard, "Add an answer first so the problem can be checked.", "error");
      return;
    }
    answerValue = answer;
    correct = currentProblem.check(answer);
  }

  state.attempts.unshift({
    id: crypto.randomUUID(),
    problemId: currentProblem.id,
    correct,
    answer: answerValue,
    timestamp: Date.now()
  });

  if (correct) {
    removeFromReview(currentProblem.id);
    setFeedback(resultCard, "Correct. Nice work.", "success");
  } else {
    pushToReview(currentProblem.id);
    const expected = currentProblem.mode === "matching" ? currentProblem.answerKey.join("") : currentProblem.acceptableAnswers[0];
    setFeedback(resultCard, `Not quite. Try again. Expected answer: ${expected}.`, "error");
  }

  persistState();
  renderDashboard();
  renderReview();
  renderLeaderboards();
  renderProblemList();
}

function toggleBookmark() {
  if (!currentProblem) {
    return;
  }

  if (state.bookmarks.includes(currentProblem.id)) {
    state.bookmarks = state.bookmarks.filter((id) => id !== currentProblem.id);
  } else {
    state.bookmarks.push(currentProblem.id);
    pushToReview(currentProblem.id);
  }

  persistState();
  renderDashboard();
  renderReview();
  selectProblem(currentProblem);
}

function renderDashboard() {
  const attempts = state.attempts;
  const solved = new Set(attempts.filter((attempt) => attempt.correct).map((attempt) => attempt.problemId)).size;
  const accuracy = attempts.length ? Math.round((attempts.filter((attempt) => attempt.correct).length / attempts.length) * 100) : 0;
  const bestSprint = state.sprintRuns[0]?.score || 0;

  statSolved.textContent = String(solved);
  statAccuracy.textContent = `${accuracy}%`;
  statReview.textContent = String(state.reviewQueue.length);
  statBest.textContent = String(bestSprint);
}

function renderHistory() {
  const items = state.history
    .map((id) => problems.find((problem) => problem.id === id))
    .filter(Boolean)
    .slice(0, 6);

  historyCount.textContent = `${items.length} items`;

  if (!items.length) {
    historyList.innerHTML = '<div class="feedback-card muted">Your recently opened problems will appear here.</div>';
    return;
  }

  historyList.innerHTML = items.map((problem) => `
    <article class="history-item">
      <strong>${problem.title}</strong>
      <p>${problem.contest} · ${problem.year}</p>
    </article>
  `).join("");
}

function renderReview() {
  const queued = state.reviewQueue
    .map((id) => problems.find((problem) => problem.id === id))
    .filter(Boolean);

  reviewCount.textContent = `${queued.length} queued`;

  if (!queued.length) {
    reviewTitle.textContent = "Nothing queued yet";
    reviewPrompt.textContent = "Miss a problem or bookmark one to keep it here.";
    currentReviewId = null;
    return;
  }

  const next = queued[0];
  currentReviewId = next.id;
  reviewTitle.textContent = next.title;
  reviewPrompt.textContent = `${next.contest} · ${next.topic} · difficulty ${next.difficulty}`;
}

function openReviewProblem() {
  if (!currentReviewId) {
    return;
  }
  const problem = problems.find((item) => item.id === currentReviewId);
  selectProblem(problem);
}

function clearReviewQueue() {
  state.reviewQueue = [];
  persistState();
  renderDashboard();
  renderReview();
}

function startSprint() {
  if (sprintState.active) {
    return;
  }

  if (!filteredProblems.length) {
    setFeedback(sprintFeedback, "No problems match the current filters, so sprint cannot start yet.", "error");
    return;
  }

  sprintState = {
    active: true,
    timer: 180,
    round: 1,
    score: 0,
    order: shuffle([...filteredProblems]).slice(0, Math.min(5, filteredProblems.length)),
    intervalId: window.setInterval(tickSprint, 1000)
  };

  sprintAnswer.value = "";
  loadSprintProblem();
  renderSprintStatus();
  setFeedback(sprintFeedback, "Sprint started. Use compact answers like letter strings or short forms.", "info");
}

function tickSprint() {
  sprintState.timer -= 1;
  renderSprintStatus();
  if (sprintState.timer <= 0) {
    finishSprint();
  }
}

function loadSprintProblem() {
  const problem = sprintState.order[sprintState.round - 1];
  if (!problem) {
    finishSprint();
    return;
  }

  sprintPrompt.textContent = `${problem.title}: ${problem.mode === "matching" ? `enter the answer pattern, e.g. ${problem.answerKey.map((_, index) => `${index + 1}=A`).join(", ")}` : problem.prompt}`;
}

function submitSprintAnswer() {
  if (!sprintState.active) {
    setFeedback(sprintFeedback, "Start a sprint before submitting.", "error");
    return;
  }

  const problem = sprintState.order[sprintState.round - 1];
  const raw = sprintAnswer.value.trim();

  if (!raw) {
    setFeedback(sprintFeedback, "Type an answer before submitting this round.", "error");
    return;
  }

  let correct = false;
  if (problem.mode === "matching") {
    const parsed = raw
      .replace(/[^A-Za-z]/g, "")
      .toUpperCase()
      .split("");
    correct = problem.check(parsed);
  } else {
    correct = problem.check(raw);
  }

  const points = problem.difficulty * 10;
  if (correct) {
    sprintState.score += points;
    setFeedback(sprintFeedback, `Correct. +${points} points.`, "success");
  } else {
    const expected = problem.mode === "matching" ? problem.answerKey.join("") : problem.acceptableAnswers[0];
    setFeedback(sprintFeedback, `Incorrect. Expected ${expected}.`, "error");
  }

  sprintState.round += 1;
  sprintAnswer.value = "";

  if (sprintState.round > sprintState.order.length) {
    finishSprint();
    return;
  }

  loadSprintProblem();
  renderSprintStatus();
}

function finishSprint() {
  const finalScore = sprintState.score;
  if (sprintState.intervalId) {
    window.clearInterval(sprintState.intervalId);
  }

  if (sprintState.active) {
    state.sprintRuns.push({
      id: crypto.randomUUID(),
      score: finalScore,
      completedAt: Date.now()
    });
    state.sprintRuns.sort((left, right) => right.score - left.score || right.completedAt - left.completedAt);
    state.sprintRuns = state.sprintRuns.slice(0, 8);
    persistState();
  }

  sprintState = {
    active: false,
    timer: 180,
    round: 0,
    score: 0,
    order: [],
    intervalId: null
  };

  renderSprintStatus();
  renderDashboard();
  renderLeaderboards();
  sprintPrompt.textContent = "Run a five-question timed set built from the current archive bank.";
  setFeedback(sprintFeedback, `Sprint finished with ${finalScore} points.`, "info");
}

function renderSprintStatus() {
  sprintTimer.textContent = formatTime(sprintState.timer);
  sprintScore.textContent = String(sprintState.score);
  sprintRound.textContent = `${Math.min(sprintState.round, 5)} / 5`;
}

function renderLeaderboards() {
  boardButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.board === state.activeBoard);
  });

  const boardEntries = state.activeBoard === "overall" ? buildOverallBoard() : buildSprintBoard();
  leaderboardList.innerHTML = boardEntries.map((entry, index) => `
    <article class="leaderboard-entry ${entry.me ? "me" : ""}">
      <div>
        <span class="leaderboard-rank">#${index + 1}</span>
        <strong>${entry.name}</strong>
        <p>${entry.meta}</p>
      </div>
      <strong>${entry.score}</strong>
    </article>
  `).join("");
}

function buildOverallBoard() {
  const solvedCount = new Set(state.attempts.filter((attempt) => attempt.correct).map((attempt) => attempt.problemId)).size;
  const accuracy = state.attempts.length ? Math.round((state.attempts.filter((attempt) => attempt.correct).length / state.attempts.length) * 100) : 0;
  const yourEntry = {
    name: "You",
    score: solvedCount,
    meta: `${accuracy}% accuracy · ${state.attempts.length} attempts`,
    me: true
  };

  return [...seededOverall, yourEntry]
    .sort((left, right) => right.score - left.score || left.name.localeCompare(right.name))
    .slice(0, 5);
}

function buildSprintBoard() {
  const yourEntry = {
    name: "You",
    score: state.sprintRuns[0]?.score || 0,
    meta: state.sprintRuns.length ? "best local sprint" : "no sprint runs yet",
    me: true
  };

  return [...seededSprint, yourEntry]
    .sort((left, right) => right.score - left.score || left.name.localeCompare(right.name))
    .slice(0, 5);
}

function pushHistory(problemId) {
  state.history = [problemId, ...state.history.filter((id) => id !== problemId)].slice(0, 8);
  persistState();
}

function pushToReview(problemId) {
  if (!state.reviewQueue.includes(problemId)) {
    state.reviewQueue.push(problemId);
  }
}

function removeFromReview(problemId) {
  state.reviewQueue = state.reviewQueue.filter((id) => id !== problemId);
}

function getAttempts(problemId) {
  return state.attempts.filter((attempt) => attempt.problemId === problemId);
}

function setFeedback(element, text, tone) {
  element.textContent = text;
  element.className = `feedback-card ${tone}`;
}

function loadState() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey));
    return parsed ? { ...defaultState, ...parsed } : { ...defaultState };
  } catch (error) {
    return { ...defaultState };
  }
}

function persistState() {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function normalize(value) {
  return value.toLowerCase().trim().replace(/\s+/g, " ").replace(/[^\p{L}\p{N}\-?]+/gu, "");
}

