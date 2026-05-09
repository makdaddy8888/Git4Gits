/**
 * Main CRT menu drives flows; Avi expert-track drafts plan (preview, local sessionStorage).
 */

const clock = document.getElementById("clock");
const phosphorBtn = document.getElementById("toggle-phosphor");
const scanBtn = document.getElementById("toggle-scan");
const eightBitBtn = document.getElementById("toggle-8bit");

const screenLineEl = document.getElementById("screen-line");
const mainNavEl = document.getElementById("main-nav");
const kbdHintEl = document.getElementById("kbd-hint");
const flowPanelEl = document.getElementById("flow-panel");
const homeHintEl = document.getElementById("home-hint");
const welcomePreEl = document.getElementById("bbs");

const root = document.documentElement;

/** @typedef {{ shippedPay:string, positioning:string, buyersProof:string, hiddenEdge:string, proofAsset:string }} AviAnswers */

const STORAGE = {
  welcome: "g4g_welcome_bulletin_v1",
  aviFields: "g4g_avi_fields_v1",
  aviStep: "g4g_avi_step_v1",
};

const STEP_INTRO = 0;
const STEP_PLAN = 6;

/** @type {readonly { key: keyof AviAnswers; title: string; text: string }[]} */
const AVI_QUESTIONS = [
  {
    key: "shippedPay",
    title: "Ship + pay trigger",
    text:
      "What did you ship most recently — for whom — and what would have to be true for them to pay money for it? Prefer outcomes over implementation detail.",
  },
  {
    key: "positioning",
    title: "One-line positioning",
    text:
      "If your homepage allowed only one sentence: who exactly is it for, and what concrete outcome do you promise?",
  },
  {
    key: "buyersProof",
    title: "Buyers vs users + proof",
    text:
      "Who signs the cheque versus who lives in the tool daily — and what proof would each need in the first five minutes?",
  },
  {
    key: "hiddenEdge",
    title: "Hidden edge",
    text:
      "What differentiation do you avoid saying aloud publicly — even if it might be the real wedge? (Use synthetic examples in this sandbox.)",
  },
  {
    key: "proofAsset",
    title: "Next proof artifact",
    text:
      "One proof asset before next session: demo clip, before/after metric, or case-shaped write-up — which fits you best?",
  },
];

/** @returns {AviAnswers} */
function defaultAnswers() {
  return {
    shippedPay: "",
    positioning: "",
    buyersProof: "",
    hiddenEdge: "",
    proofAsset: "",
  };
}

/** @returns {AviAnswers} */
function loadAnswers() {
  try {
    const raw = sessionStorage.getItem(STORAGE.aviFields);
    if (!raw) return defaultAnswers();
    return { ...defaultAnswers(), ...JSON.parse(raw) };
  } catch {
    return defaultAnswers();
  }
}

function saveAnswers(/** @type {AviAnswers} */ a) {
  sessionStorage.setItem(STORAGE.aviFields, JSON.stringify(a));
}

function loadStep() {
  const n = parseInt(sessionStorage.getItem(STORAGE.aviStep) ?? "", 10);
  if (Number.isFinite(n) && n >= STEP_INTRO && n <= STEP_PLAN) return n;
  return STEP_INTRO;
}

function saveStep(/** @type {number} */ n) {
  sessionStorage.setItem(STORAGE.aviStep, String(n));
}

function getWelcomeBulletinVisible() {
  return sessionStorage.getItem(STORAGE.welcome) === "1";
}

function setWelcomeBulletinVisible(/** @type {boolean} */ on) {
  sessionStorage.setItem(STORAGE.welcome, on ? "1" : "0");
}

/** @typedef {{ kind: "home" }} ShellHome */
/** @typedef {{ kind: "avi"; step: number }} ShellAvi */
/** @type {ShellHome | ShellAvi} */
let shellState = { kind: "home" };

function tick() {
  if (!clock) return;
  const d = new Date();
  clock.textContent = d.toLocaleTimeString(undefined, {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function isTypingFocus(/** @type {unknown} */ t) {
  if (!(t instanceof HTMLElement)) return false;
  const tag = t.tagName;
  return tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT" || t.isContentEditable;
}

function scrapeFieldsToStorage() {
  if (!(flowPanelEl instanceof HTMLElement)) return;
  const a = loadAnswers();
  for (const { key } of AVI_QUESTIONS) {
    const el = document.getElementById(`avi-field-${key}`);
    if (el instanceof HTMLTextAreaElement) a[key] = el.value.trim();
  }
  saveAnswers(a);
}

/** @returns {HTMLButtonElement} */
function mkMenuButton(hotkey, label, action) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "menu-line";
  const hk = document.createElement("span");
  hk.className = "menu-hotkey";
  hk.textContent = `[${hotkey}]`;
  const text = document.createTextNode(label);
  b.append(hk, text);
  b.addEventListener("click", action);
  return b;
}

function handleHomeHotkey(/** @type {string} */ k) {
  if (shellState.kind !== "home") return;
  const h = k.toLowerCase();
  if (h === "1") startAviFlow();
  else if (h === "2") toggleWelcomeBulletin();
  else if (h === "3") clearAviDrafts(true);
}

function toggleWelcomeBulletin() {
  setWelcomeBulletinVisible(!getWelcomeBulletinVisible());
  renderEverything();
}

function clearAviDrafts(confirmFirst) {
  if (confirmFirst && !confirm("Discard saved Avi answers and intake step?", "")) return;
  sessionStorage.removeItem(STORAGE.aviFields);
  sessionStorage.removeItem(STORAGE.aviStep);
  shellState = { kind: "home" };
  renderEverything();
}

function goHomePreserveDrafts() {
  scrapeFieldsToStorage();
  shellState = { kind: "home" };
  renderEverything();
}

function startAviFlow() {
  const step = loadStep();
  scrapeFieldsToStorage();
  shellState = { kind: "avi", step };
  renderEverything();
}

/** @returns {readonly string[]} */
function repoPointers() {
  return [
    "plan/personas/persona-07-avi-technical-master.md",
    "plan/knowledge-reference-github-development-and-gtm-for-technical-experts.md",
    "plan/conversation-intelligence-prep.md",
    "templates/learner-profile-template.md",
    "plan/learner-intake-interview.md",
  ];
}

function buildPlanMarkdown(/** @type {AviAnswers} */ a) {
  const lines = repoPointers();
  return [
    "# Draft plan — GIT4GITS · Avi-track (sandbox)",
    `Generated preview session · ${new Date().toISOString()}`,
    "",
    "## Pay + ship triggers",
    a.shippedPay || "_(fill in intake)_",
    "",
    "## One-line positioning",
    a.positioning || "_(fill in intake)_",
    "",
    "## Buyers, users, proof",
    a.buyersProof || "_(fill in intake)_",
    "",
    "## Differentiation edge (synthetic-safe)",
    a.hiddenEdge || "_(optional)_",
    "",
    "## Next proof asset",
    a.proofAsset || "_(fill in intake)_",
    "",
    "## Repo files to open next (offline copy-out)",
    ...lines.map((p) => `- ${p}`),
    "",
  ].join("\n");
}

function readPlanDraftFromTa() {
  const ta =
    /** @type {HTMLTextAreaElement | null} */ (
      flowPanelEl?.querySelector("textarea.plan-draft")
    );
  return ta?.value ?? "";
}

async function copyDraftPlan(/** @type {string|null} */ text) {
  const t =
    text != null ? text : readPlanDraftFromTa() || buildPlanMarkdown(loadAnswers());
  try {
    await navigator.clipboard.writeText(t);
    alert("Draft plan copied to clipboard.");
  } catch {
    window.prompt("Copy:", t);
  }
}

/** @returns {number} Question index in AVI_QUESTIONS, or -1 when not question step */
function questionIndexForStep(/** @type {number} */ step) {
  if (step < 1 || step > AVI_QUESTIONS.length) return -1;
  return step - 1;
}

function refreshHomeHints() {
  if (!welcomePreEl || !homeHintEl) return;

  const bulletin = shellState.kind === "home" && getWelcomeBulletinVisible();
  welcomePreEl.hidden = !bulletin;

  homeHintEl.textContent =
    shellState.kind !== "home" ? "" :
    bulletin ?
      ""
    : [
        "GIT4GITS · preview session loaded",
        "",
        "Pick an option above in MAIN TERMINAL · or keys 1–3 when not typing:",
        "",
        "  [1]  Intelligent questions → draft plan  (persona-07 Avi)",
        "  [2]  Show / hide welcome bulletin",
        "  [3]  Clear saved intake",
        "",
      ].join("\n");
}

function renderNavHome() {
  if (!screenLineEl || !mainNavEl || !kbdHintEl) return;
  screenLineEl.textContent =
    getWelcomeBulletinVisible() ?
      "MAIN MENU · BULLETIN OPEN"
    : "MAIN MENU";

  mainNavEl.textContent = "";
  const tit = document.createElement("div");
  tit.className = "menu-title-row";
  tit.textContent = "MAIN TERMINAL — tap row or keys 1 – 3";
  mainNavEl.append(tit);
  mainNavEl.append(
    mkMenuButton("1", " Avi · intelligent questions → draft plan (expert track)", () =>
      handleHomeHotkey("1"),
    ),
  );
  mainNavEl.append(
    mkMenuButton(
      "2",
      getWelcomeBulletinVisible()
        ? " Hide welcome bulletin (ASCII)"
        : " Show welcome bulletin (ASCII)",
      () => handleHomeHotkey("2"),
    ),
  );
  mainNavEl.append(
    mkMenuButton("3", " Clear saved answers + intake step", () =>
      handleHomeHotkey("3"),
    ),
  );
  kbdHintEl.hidden = false;
  kbdHintEl.textContent = "Keys · 1–3 · Esc returns from AVI menu only";
}

function renderNavAvi(/** @type {number} */ step) {
  if (!screenLineEl || !mainNavEl || !kbdHintEl) return;
  const labels = ["INTRO", "Q 1/5", "Q 2/5", "Q 3/5", "Q 4/5", "Q 5/5", "PLAN"];
  screenLineEl.textContent = `AVI · ${labels[step] ?? "…"}`;

  mainNavEl.textContent = "";
  const tit = document.createElement("div");
  tit.className = "menu-title-row";
  tit.textContent = "AVI / INTAKE · expert track · local autosave";
  mainNavEl.append(tit);

  const back = document.createElement("button");
  back.type = "button";
  back.className = "menu-line menu-back-main";
  const hk = document.createElement("span");
  hk.className = "menu-hotkey";
  hk.textContent = "[Esc]";
  back.append(hk, document.createTextNode(" MAIN MENU · keep saved answers"));
  back.addEventListener("click", goHomePreserveDrafts);
  mainNavEl.append(back);

  if (step === STEP_PLAN) {
    mainNavEl.append(
      mkMenuButton("c", " Copy draft plan → clipboard", () =>
        void copyDraftPlan(readPlanDraftFromTa()),
      ),
    );
  }

  kbdHintEl.hidden = false;
  kbdHintEl.textContent =
    step === STEP_PLAN ?
      "c · copy draft plan · Esc · main menu"
    : "Esc · save + main menu · fields autosave between steps";

}

function renderFlowIntro() {
  if (!flowPanelEl) return;
  flowPanelEl.hidden = false;
  homeHintEl && (homeHintEl.textContent = "");
  welcomePreEl && (welcomePreEl.hidden = true);

  flowPanelEl.innerHTML = "";

  const p = document.createElement("p");
  p.className = "flow-intro";
  p.textContent =
    "You are on the Avi · expert-track preview (assume logged in). Skip toolchain lectures; sharpen packaging / positioning.";
  flowPanelEl.append(p);

  const preRepo = document.createElement("pre");
  preRepo.className = "flow-intro mono-dim";
  preRepo.style.whiteSpace = "pre-wrap";
  preRepo.style.margin = "0";
  preRepo.textContent = `Open next in repo clone:\n  ${repoPointers().join("\n  ")}`;
  flowPanelEl.append(preRepo);

  const p3 = document.createElement("p");
  p3.className = "flow-intro";
  p3.textContent =
    "Next: five facilitator-style prompts, then a paste-ready Markdown draft.";
  flowPanelEl.append(p3);

  const bar = document.createElement("div");
  bar.className = "flow-bar";
  const next = document.createElement("button");
  next.type = "button";
  next.className = "flow-btn primary";
  next.textContent = "Begin intelligent questions";

  next.addEventListener("click", () => {
    saveStep(1);
    shellState = { kind: "avi", step: 1 };
    renderEverything();
  });
  bar.append(next);
  const stepTag = document.createElement("span");
  stepTag.className = "flow-steps";
  stepTag.textContent = "Step 1 / 7";
  bar.append(stepTag);
  flowPanelEl.append(bar);
}

function renderFlowQuestion(/** @type {number} */ step, /** @type {AviAnswers} */ answers) {
  const qi = questionIndexForStep(step);
  if (qi < 0) return renderFlowIntro();
  if (!flowPanelEl) return;
  const meta = AVI_QUESTIONS[qi];
  flowPanelEl.hidden = false;
  homeHintEl && (homeHintEl.textContent = "");
  welcomePreEl && (welcomePreEl.hidden = true);

  flowPanelEl.textContent = "";
  const t1 = document.createElement("div");
  t1.className = "flow-step-title";
  t1.textContent = `${meta.title} · question ${step} / ${AVI_QUESTIONS.length}`;
  flowPanelEl.append(t1);

  const qtxt = document.createElement("div");
  qtxt.className = "flow-q-text";
  qtxt.textContent = meta.text;
  flowPanelEl.append(qtxt);

  const lab = document.createElement("label");
  lab.className = "flow-field-label";
  lab.htmlFor = `avi-field-${meta.key}`;
  lab.textContent = "Your draft answer";

  const ta = document.createElement("textarea");
  ta.className = "flow-field";
  ta.id = `avi-field-${meta.key}`;
  ta.autocomplete = "off";
  ta.value = answers[meta.key];

  ta.addEventListener("input", () => {
    const next = loadAnswers();
    /** @type {keyof AviAnswers} */
    const k = meta.key;
    next[k] = ta.value;
    saveAnswers(next);
  });

  flowPanelEl.append(lab, ta);

  const bar = document.createElement("div");
  bar.className = "flow-bar";
  const back = document.createElement("button");
  back.type = "button";
  back.className = "flow-btn";
  back.textContent = "Prev";
  back.addEventListener("click", () => {
    const ns = Math.max(STEP_INTRO, step - 1);
    saveStep(ns);
    shellState = { kind: "avi", step: ns };
    scrapeFieldsToStorage();
    renderEverything();
  });

  const next = document.createElement("button");
  next.type = "button";
  next.className = "flow-btn primary";
  next.textContent = step === AVI_QUESTIONS.length ? "Build draft plan" : "Next";

  next.addEventListener("click", () => {
    scrapeFieldsToStorage();
    if (step === AVI_QUESTIONS.length) saveStep(STEP_PLAN);
    else saveStep(step + 1);

    shellState = {
      kind: "avi",
      step:
        step === AVI_QUESTIONS.length ? STEP_PLAN
        : step + 1,
    };
    renderEverything();
  });
  bar.append(back, next);
  const stamp = document.createElement("span");
  stamp.className = "flow-steps";
  stamp.textContent = `${step}/${AVI_QUESTIONS.length}`;
  bar.append(stamp);

  flowPanelEl.append(bar);
}

function renderFlowPlan(/** @type {AviAnswers} */ answers) {
  if (!flowPanelEl) return;
  flowPanelEl.hidden = false;
  homeHintEl && (homeHintEl.textContent = "");
  welcomePreEl && (welcomePreEl.hidden = true);

  const md = buildPlanMarkdown(answers);
  flowPanelEl.textContent = "";

  const headline = document.createElement("div");
  headline.className = "flow-step-title";
  headline.textContent = "Draft plan · paste into facilitator docs";
  flowPanelEl.append(headline);

  const ta = document.createElement("textarea");
  ta.className = "flow-field plan-draft";
  ta.rows = Math.min(
    26,
    10 + md.split("\n").length,
  );
  ta.value = md;
  ta.readOnly = true;
  flowPanelEl.append(ta);

  const bar = document.createElement("div");
  bar.className = "flow-bar";
  const edit = document.createElement("button");
  edit.type = "button";
  edit.className = "flow-btn";
  edit.textContent = "Adjust answers · back to Q5";
  edit.addEventListener("click", () => {
    saveStep(AVI_QUESTIONS.length);
    shellState = { kind: "avi", step: AVI_QUESTIONS.length };
    renderEverything();
  });
  const copy = document.createElement("button");
  copy.type = "button";
  copy.className = "flow-btn primary";
  copy.textContent = "Copy plan";
  copy.addEventListener("click", () => copyDraftPlan(ta.value));
  bar.append(edit, copy);
  flowPanelEl.append(bar);

  ta.style.minHeight = "14rem";

}

function renderEverything() {
  if (shellState.kind === "home") {
    flowPanelEl && (flowPanelEl.hidden = true);
    refreshHomeHints();
    renderNavHome();
  } else if (shellState.kind === "avi") {
    const step = shellState.step;
    saveStep(step);
    renderNavAvi(step);
    const ans = loadAnswers();
    if (step === STEP_INTRO) renderFlowIntro();
    else if (step === STEP_PLAN) renderFlowPlan(ans);
    else renderFlowQuestion(step, ans);
  }
}

phosphorBtn?.addEventListener("click", () => {
  root.classList.toggle("theme-amber");
});

scanBtn?.addEventListener("click", () => {
  root.classList.toggle("no-scan");
});

eightBitBtn?.addEventListener("click", () => {
  root.classList.toggle("theme-8bit");
});

document.addEventListener("keydown", (e) => {
  if (isTypingFocus(e.target)) return;

  if (shellState.kind === "avi" && (e.key === "Escape" || e.code === "Escape")) {
    e.preventDefault();
    goHomePreserveDrafts();
    return;
  }

  if (
    shellState.kind === "avi" &&
    shellState.step === STEP_PLAN &&
    (e.key === "c" || e.key === "C")
  ) {
    e.preventDefault();
    void copyDraftPlan(readPlanDraftFromTa());
    return;
  }

  if (shellState.kind === "home" && e.key >= "1" && e.key <= "3") {
    e.preventDefault();
    handleHomeHotkey(e.key);
  }
});

function boot() {
  setInterval(tick, 250);
  tick();
  renderEverything();
  requestAnimationFrame(() => {
    renderEverything();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
