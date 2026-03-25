import React, { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Gauge,
  LineChart,
  Lock,
  Sparkles,
  Users,
} from "lucide-react";
import useSEO, { breadcrumbSchema, webPageSchema, SITE } from "../hooks/useSEO";

const STEPS = [
  { id: "profile", label: "Profile", icon: Users, helper: "Who are you assessing for?" },
  { id: "context", label: "Context", icon: Building2, helper: "Industry and team setup" },
  { id: "details", label: "Details", icon: Lock, helper: "Tools, data, and constraints" },
  { id: "goals", label: "Goals", icon: LineChart, helper: "Outcomes and priorities" },
];

const AI_READINESS_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      url: `${SITE.URL}/ai-readiness`,
      name: "AI Readiness Assessment | Score your AI maturity in minutes",
      description:
        "Take a quick AI readiness assessment to get a directional maturity score and a personalized set of next steps for safe, practical adoption.",
    }),
    breadcrumbSchema([
      { name: "Home", url: `${SITE.URL}/` },
      { name: "AI Readiness", url: `${SITE.URL}/ai-readiness` },
    ]),
  ],
};

const cx = (...parts) => parts.filter(Boolean).join(" ");

const clampScore = (n) => Math.max(0, Math.min(100, Math.round(n)));

const Field = ({ label, hint, children, error, required }) => (
  <div className="space-y-1.5">
    <div className="flex items-end justify-between gap-4">
      <label className="text-sm font-semibold text-gray-900 dark:text-white">
        {label}{" "}
        {required ? <span className="text-red-500 dark:text-red-400">*</span> : null}
      </label>
      {hint ? (
        <span className="text-xs text-gray-500 dark:text-gray-400">{hint}</span>
      ) : null}
    </div>
    {children}
    {error ? (
      <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
    ) : null}
  </div>
);

const Chip = ({ active, children, onClick, icon: Icon }) => (
  <button
    type="button"
    onClick={onClick}
    className={cx(
      "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-all",
      active
        ? "border-purple-400/60 bg-purple-600 text-white shadow-lg shadow-purple-500/20"
        : "border-gray-200 bg-white/70 text-gray-800 hover:bg-white hover:shadow-sm dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-200 dark:hover:bg-gray-900/60"
    )}>
    {Icon ? <Icon className="h-4 w-4" /> : null}
    {children}
  </button>
);

const scoreLabel = (score) => {
  if (score >= 80) return { label: "AI-Ready", tone: "emerald" };
  if (score >= 60) return { label: "Scaling", tone: "blue" };
  if (score >= 40) return { label: "Early", tone: "amber" };
  return { label: "Getting Started", tone: "rose" };
};

const toneStyles = {
  emerald:
    "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/20",
  blue: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20",
  amber:
    "bg-amber-500/10 text-amber-800 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-400/20",
  rose: "bg-rose-500/10 text-rose-700 border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-400/20",
};

const TextInput = (props) => (
  <input
    {...props}
    className={cx(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none ring-0 placeholder:text-gray-400",
      "border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/15",
      "dark:bg-gray-900/50 dark:text-white dark:placeholder:text-gray-500 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-400/15",
      props.className
    )}
  />
);

const Select = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={cx(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm outline-none",
      "border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/15",
      "dark:bg-gray-900/50 dark:text-white dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-400/15"
    )}>
    {options.map((o) => (
      <option key={o.value} value={o.value} disabled={o.disabled}>
        {o.label}
      </option>
    ))}
  </select>
);

const TogglePill = ({ checked, label, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={cx(
      "group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all",
      checked
        ? "border-blue-400/50 bg-blue-600 text-white shadow-lg shadow-blue-500/15"
        : "border-gray-200 bg-white text-gray-800 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-200"
    )}>
    <span>{label}</span>
    <span
      className={cx(
        "grid h-6 w-6 place-items-center rounded-full border transition-all",
        checked
          ? "border-white/40 bg-white/15"
          : "border-gray-300 bg-transparent dark:border-gray-600"
      )}>
      {checked ? <Check className="h-4 w-4" /> : null}
    </span>
  </button>
);

const ProgressBar = ({ value }) => (
  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
    <div
      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500"
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    />
  </div>
);

const computeScore = (answers) => {
  const weights = {
    profile: 0.2,
    context: 0.2,
    details: 0.35,
    goals: 0.25,
  };

  const profile =
    (answers.representing === "company" ? 15 : 8) +
    (answers.role ? 10 : 0) +
    (answers.email ? 10 : 0);

  const context =
    (answers.industry && answers.industry !== "unknown" ? 15 : 5) +
    (answers.teamSize && answers.teamSize !== "unknown" ? 15 : 5);

  const toolsCount = (answers.toolsUsed ?? []).length;
  const details =
    Math.min(20, toolsCount * 4) +
    (answers.dataStatus === "centralized" ? 25 : answers.dataStatus === "partial" ? 15 : 6) +
    (answers.security === "enforced" ? 20 : answers.security === "draft" ? 10 : 5) +
    (answers.sensitiveData === "yes" ? 6 : 10);

  const goals =
    (answers.primaryGoal ? 15 : 0) +
    (answers.painPoint ? 10 : 0) +
    (answers.budget && answers.budget !== "unsure" ? 15 : 8) +
    (answers.horizon && answers.horizon !== "unknown" ? 10 : 6);

  const weighted =
    (profile / 35) * weights.profile * 100 +
    (context / 30) * weights.context * 100 +
    (details / 75) * weights.details * 100 +
    (goals / 50) * weights.goals * 100;

  return clampScore(weighted);
};

const pillarBreakdown = (answers) => {
  const data = clampScore(
    (answers.dataStatus === "centralized" ? 85 : answers.dataStatus === "partial" ? 60 : 35) +
      ((answers.toolsUsed ?? []).some((t) => t === "warehouse") ? 10 : 0)
  );
  const security = clampScore(
    (answers.security === "enforced" ? 85 : answers.security === "draft" ? 60 : 35) -
      (answers.sensitiveData === "yes" ? 5 : 0)
  );
  const process = clampScore(
    (answers.automation === "mostly" ? 80 : answers.automation === "some" ? 55 : 35) +
      (answers.primaryGoal ? 5 : 0)
  );
  const people = clampScore(
    (answers.teamSize === "1000+" ? 70 : answers.teamSize === "201-1000" ? 65 : answers.teamSize === "51-200" ? 60 : answers.teamSize === "11-50" ? 52 : 45) +
      (answers.representing === "company" ? 5 : 0)
  );
  return { data, security, process, people };
};

const recommendedNextSteps = ({ score, pillars }) => {
  const recs = [];

  if (pillars.security < 55) {
    recs.push({
      title: "Define safe AI guardrails",
      desc: "Agree data boundaries, approved tools, and an internal policy so experiments don’t create risk.",
      badge: "Security",
    });
  }
  if (pillars.data < 55) {
    recs.push({
      title: "Fix the data path to value",
      desc: "Centralize key sources (CRM, tickets, docs) and set access roles so AI can be accurate and auditable.",
      badge: "Data",
    });
  }
  if (pillars.process < 55) {
    recs.push({
      title: "Start with one measurable workflow",
      desc: "Pick a process you can time/measure (support triage, lead qualification, reporting) and automate end-to-end.",
      badge: "Process",
    });
  }
  if (pillars.people < 55) {
    recs.push({
      title: "Name an owner and enable the team",
      desc: "Assign one accountable owner and a small champion group; run short training and set success metrics.",
      badge: "People",
    });
  }

  if (recs.length < 3) {
    recs.push({
      title: "Move from pilots to production",
      desc: "Define monitoring, evaluation, and change management so successful experiments become reliable systems.",
      badge: "Scale",
    });
  }

  if (score >= 70) {
    recs.unshift({
      title: "Build a 90‑day AI roadmap",
      desc: "Prioritize 3 initiatives across impact, effort, and risk. Deliver one production win every 3–4 weeks.",
      badge: "Strategy",
    });
  }

  return recs.slice(0, 3);
};

const AIReadinessPage = ({ setActivePage }) => {
  useSEO({
    title: "AI Readiness Assessment",
    description:
      "Take a quick AI readiness assessment to get a directional maturity score and a personalized roadmap for safe, practical adoption.",
    keywords:
      "AI readiness assessment, AI maturity score, AI adoption roadmap, AI consulting UK, automation readiness, data governance, AI strategy",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&w=1200&q=75",
    structuredData: AI_READINESS_STRUCTURED_DATA,
  });

  const titleRef = useRef(null);
  const [stepIdx, setStepIdx] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState({});

  const [answers, setAnswers] = useState({
    representing: "company",
    fullName: "",
    email: "",
    orgName: "",
    industry: "unknown",
    teamSize: "unknown",
    role: "",
    toolsUsed: [],
    dataStatus: "unknown",
    automation: "some",
    security: "draft",
    sensitiveData: "unknown",
    primaryGoal: "",
    painPoint: "",
    budget: "unsure",
    horizon: "unknown",
  });

  const currentStep = STEPS[stepIdx];
  const completionPct = useMemo(() => {
    const base = (stepIdx / STEPS.length) * 100;
    return Math.round(base);
  }, [stepIdx]);

  const score = useMemo(() => computeScore(answers), [answers]);
  const pillars = useMemo(() => pillarBreakdown(answers), [answers]);
  const scoreMeta = scoreLabel(score);
  const nextSteps = useMemo(() => recommendedNextSteps({ score, pillars }), [score, pillars]);

  const update = (patch) => setAnswers((s) => ({ ...s, ...patch }));

  const toggleTool = (tool) => {
    setAnswers((s) => {
      const has = s.toolsUsed.includes(tool);
      return { ...s, toolsUsed: has ? s.toolsUsed.filter((t) => t !== tool) : [...s.toolsUsed, tool] };
    });
  };

  const validateStep = () => {
    const stepId = currentStep?.id;
    const e = {};

    if (stepId === "profile") {
      if (!answers.fullName.trim()) e.fullName = "Please enter your name.";
      if (!answers.email.trim() || !/^\S+@\S+\.\S+$/.test(answers.email)) {
        e.email = "Please enter a valid email address.";
      }
      if (answers.representing === "company" && !answers.orgName.trim()) {
        e.orgName = "Please enter an organization name.";
      }
    }

    if (stepId === "context") {
      if (!answers.role.trim()) e.role = "Please enter a role or job title.";
      if (answers.industry === "unknown") e.industry = "Please select an industry.";
      if (answers.teamSize === "unknown") e.teamSize = "Please select a team size.";
    }

    if (stepId === "details") {
      if (answers.dataStatus === "unknown") e.dataStatus = "Please select a data status.";
      if (answers.sensitiveData === "unknown") e.sensitiveData = "Please select an option.";
    }

    if (stepId === "goals") {
      if (!answers.primaryGoal.trim()) e.primaryGoal = "Please describe your primary goal.";
      if (!answers.painPoint.trim()) e.painPoint = "Please describe your biggest challenge.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goToStep = (idx) => {
    setShowResults(false);
    setStepIdx(idx);
    setErrors({});
    window.setTimeout(() => titleRef.current?.focus(), 0);
  };

  const onNext = () => {
    if (!validateStep()) return;
    if (stepIdx === STEPS.length - 1) {
      setShowResults(true);
      setErrors({});
      window.setTimeout(() => titleRef.current?.focus(), 0);
      return;
    }
    goToStep(stepIdx + 1);
  };

  const onBack = () => {
    if (showResults) {
      setShowResults(false);
      window.setTimeout(() => titleRef.current?.focus(), 0);
      return;
    }
    if (stepIdx === 0) return;
    goToStep(stepIdx - 1);
  };

  return (
    <div className="page-content">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" />
          <div
            className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 20% 35%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(circle at 70% 20%, rgba(168,85,247,0.25), transparent 55%), radial-gradient(circle at 55% 65%, rgba(236,72,153,0.15), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.16)_1px,transparent_0)] [background-size:22px_22px] opacity-30 dark:opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-200">
              <Sparkles className="h-4 w-4 text-purple-500" />
              2–4 minute assessment · instant score · actionable roadmap
            </div>

            <h1 className="mt-6 text-gray-900 dark:text-white">
              Is Your Business{" "}
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                AI‑Ready
              </span>
              ?
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Answer a few questions to get a directional AI maturity score and a
              tailored “next steps” plan you can execute this quarter.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <Chip active icon={Gauge}>
                Free score
              </Chip>
              <Chip active icon={LineChart}>
                Instant analysis
              </Chip>
              <Chip active icon={ArrowRight}>
                Actionable roadmap
              </Chip>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-3xl border border-gray-200 bg-white/70 p-6 shadow-xl shadow-gray-900/5 backdrop-blur dark:border-gray-800 dark:bg-gray-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    PROGRESS
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {showResults ? "Results" : `Step ${stepIdx + 1} of ${STEPS.length}`}
                  </p>
                </div>
                <div className="w-28">
                  <ProgressBar value={showResults ? 100 : completionPct} />
                  <p className="mt-2 text-right text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {showResults ? "100%" : `${completionPct}%`}
                  </p>
                </div>
              </div>

              <nav className="mt-6 space-y-2" aria-label="Assessment steps">
                {STEPS.map((s, idx) => {
                  const Icon = s.icon;
                  const isCurrent = !showResults && idx === stepIdx;
                  const isDone = idx < stepIdx || showResults;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToStep(idx)}
                      className={cx(
                        "w-full rounded-2xl border px-4 py-3 text-left transition-all",
                        isCurrent
                          ? "border-purple-400/40 bg-gradient-to-r from-purple-600/10 via-fuchsia-600/5 to-blue-600/10 shadow-sm dark:border-purple-400/25"
                          : "border-gray-200 bg-white/60 hover:bg-white dark:border-gray-800 dark:bg-gray-950/20 dark:hover:bg-gray-950/30"
                      )}
                      aria-current={isCurrent ? "step" : undefined}>
                      <div className="flex items-center gap-3">
                        <div
                          className={cx(
                            "grid h-10 w-10 place-items-center rounded-xl border",
                            isDone
                              ? "border-transparent bg-gradient-to-br from-purple-600 to-blue-600 text-white"
                              : "border-gray-200 bg-white text-gray-700 dark:border-gray-800 dark:bg-gray-900/30 dark:text-gray-200"
                          )}>
                          {isDone ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            {s.label}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                            {s.helper}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950/20 dark:text-gray-300">
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  Privacy note
                </p>
                <p className="mt-1 text-xs leading-relaxed">
                  This score is directional and helps shape a roadmap. We don’t
                  sell your data.
                </p>
              </div>
            </div>
          </aside>

          {/* Main card */}
          <section className="min-w-0">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900/40">
              <div className="border-b border-gray-100 px-6 py-6 dark:border-gray-800 sm:px-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h2
                      ref={titleRef}
                      tabIndex={-1}
                      className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white outline-none">
                      {showResults
                        ? "Your AI Readiness Snapshot"
                        : currentStep?.id === "profile"
                          ? "Tell us about yourself"
                          : currentStep?.id === "context"
                            ? "Professional context"
                            : currentStep?.id === "details"
                              ? "Current infrastructure"
                              : "Goals & challenges"}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {showResults
                        ? "Here’s what to do next to move from interest → production safely."
                        : currentStep?.id === "profile"
                          ? "We’ll use this to personalize your recommendations and send your results."
                          : currentStep?.id === "context"
                            ? "A little context helps benchmark your readiness against similar teams."
                            : currentStep?.id === "details"
                              ? "Tools, data, and constraints shape what’s feasible and safe."
                              : "We’ll prioritize steps based on your goals, pain points, and timeline."}
                    </p>
                  </div>

                  {showResults ? (
                    <div className="shrink-0">
                      <div
                        className={cx(
                          "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold",
                          toneStyles[scoreMeta.tone]
                        )}>
                        <Gauge className="h-4 w-4" />
                        {scoreMeta.label} · {score}/100
                      </div>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Directional score (not a certification)
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="px-6 py-6 sm:px-10 sm:py-8">
                {showResults ? (
                  <div className="space-y-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { k: "Data readiness", v: pillars.data },
                        { k: "Security & risk", v: pillars.security },
                        { k: "Process maturity", v: pillars.process },
                        { k: "People & change", v: pillars.people },
                      ].map((p) => (
                        <div
                          key={p.k}
                          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950/20">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                              {p.k}
                            </p>
                            <p className="text-sm font-extrabold text-gray-900 dark:text-white">
                              {p.v}
                            </p>
                          </div>
                          <div className="mt-3">
                            <ProgressBar value={p.v} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 dark:border-gray-800 dark:from-blue-950/30 dark:via-gray-950/10 dark:to-purple-950/20">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            Your top next steps
                          </p>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            Prioritized to maximize impact while staying safe.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActivePage?.("contact")}
                          className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/20 hover:from-blue-700 hover:to-purple-700">
                          Talk to an expert
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {nextSteps.map((r) => (
                          <div
                            key={r.title}
                            className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950/10">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-sm font-extrabold text-gray-900 dark:text-white">
                                {r.title}
                              </p>
                              <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-bold text-gray-700 dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-200">
                                {r.badge}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {r.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-col gap-2 sm:hidden">
                        <button
                          type="button"
                          onClick={() => setActivePage?.("contact")}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/20 hover:from-blue-700 hover:to-purple-700">
                          Talk to an expert
                          <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowResults(false);
                            window.setTimeout(() => titleRef.current?.focus(), 0);
                          }}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950/20 dark:text-white dark:hover:bg-gray-950/30">
                          Edit answers
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : currentStep?.id === "profile" ? (
                  <div className="space-y-6">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <Chip
                        active={answers.representing === "self"}
                        onClick={() => update({ representing: "self", orgName: "" })}
                        icon={Users}>
                        Myself / Freelancer
                      </Chip>
                      <Chip
                        active={answers.representing === "company"}
                        onClick={() => update({ representing: "company" })}
                        icon={Building2}>
                        Company / Team
                      </Chip>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" required error={errors.fullName}>
                        <TextInput
                          value={answers.fullName}
                          onChange={(e) => update({ fullName: e.target.value })}
                          placeholder="Your name"
                          autoComplete="name"
                        />
                      </Field>

                      <Field label="Email address (for results)" required error={errors.email}>
                        <TextInput
                          value={answers.email}
                          onChange={(e) => update({ email: e.target.value })}
                          placeholder="you@company.com"
                          autoComplete="email"
                          inputMode="email"
                        />
                      </Field>
                    </div>

                    {answers.representing === "company" ? (
                      <Field label="Organization name" required error={errors.orgName}>
                        <TextInput
                          value={answers.orgName}
                          onChange={(e) => update({ orgName: e.target.value })}
                          placeholder="e.g. Saan-hub Solutions"
                          autoComplete="organization"
                        />
                      </Field>
                    ) : null}
                  </div>
                ) : currentStep?.id === "context" ? (
                  <div className="space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Industry / sector" required error={errors.industry}>
                        <Select
                          value={answers.industry}
                          onChange={(v) => update({ industry: v })}
                          options={[
                            { value: "unknown", label: "Select an option…", disabled: true },
                            { value: "saas", label: "SaaS / Technology" },
                            { value: "services", label: "Professional services" },
                            { value: "ecommerce", label: "E-commerce / Retail" },
                            { value: "health", label: "Healthcare" },
                            { value: "finance", label: "Finance" },
                            { value: "public", label: "Public sector" },
                            { value: "education", label: "Education" },
                            { value: "other", label: "Other" },
                          ]}
                        />
                      </Field>

                      <Field label="Team size" required error={errors.teamSize}>
                        <Select
                          value={answers.teamSize}
                          onChange={(v) => update({ teamSize: v })}
                          options={[
                            { value: "unknown", label: "Select size…", disabled: true },
                            { value: "1-10", label: "1–10" },
                            { value: "11-50", label: "11–50" },
                            { value: "51-200", label: "51–200" },
                            { value: "201-1000", label: "201–1000" },
                            { value: "1000+", label: "1000+" },
                          ]}
                        />
                      </Field>
                    </div>

                    <Field label="Role / job title" required error={errors.role} hint="This helps tailor examples">
                      <TextInput
                        value={answers.role}
                        onChange={(e) => update({ role: e.target.value })}
                        placeholder="e.g. Operations Manager"
                        autoComplete="organization-title"
                      />
                    </Field>
                  </div>
                ) : currentStep?.id === "details" ? (
                  <div className="space-y-7">
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        Tools currently used (select all that apply)
                      </p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        This helps us recommend integrations and the right adoption path.
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <TogglePill
                          checked={answers.toolsUsed.includes("slack")}
                          label="Slack / Teams"
                          onChange={() => toggleTool("slack")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("notion")}
                          label="Notion / Jira"
                          onChange={() => toggleTool("notion")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("crm")}
                          label="HubSpot / Salesforce"
                          onChange={() => toggleTool("crm")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("figma")}
                          label="Figma"
                          onChange={() => toggleTool("figma")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("chatgpt")}
                          label="ChatGPT / Claude"
                          onChange={() => toggleTool("chatgpt")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("automation")}
                          label="Zapier / Make"
                          onChange={() => toggleTool("automation")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("warehouse")}
                          label="Data warehouse (BigQuery/Snowflake)"
                          onChange={() => toggleTool("warehouse")}
                        />
                        <TogglePill
                          checked={answers.toolsUsed.includes("custom")}
                          label="Custom software"
                          onChange={() => toggleTool("custom")}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Data infrastructure status" required error={errors.dataStatus}>
                        <Select
                          value={answers.dataStatus}
                          onChange={(v) => update({ dataStatus: v })}
                          options={[
                            { value: "unknown", label: "Select status…", disabled: true },
                            { value: "ad-hoc", label: "Ad‑hoc (spread across tools)" },
                            { value: "partial", label: "Partially centralized" },
                            { value: "centralized", label: "Centralized with governance" },
                          ]}
                        />
                      </Field>

                      <Field label="Automation level" hint="How standardized are workflows?">
                        <Select
                          value={answers.automation}
                          onChange={(v) => update({ automation: v })}
                          options={[
                            { value: "manual", label: "Mostly manual" },
                            { value: "some", label: "Some automation" },
                            { value: "mostly", label: "Mostly automated" },
                          ]}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="AI policy / security readiness">
                        <Select
                          value={answers.security}
                          onChange={(v) => update({ security: v })}
                          options={[
                            { value: "none", label: "No policy yet" },
                            { value: "draft", label: "Draft / informal" },
                            { value: "enforced", label: "Approved & enforced" },
                          ]}
                        />
                      </Field>

                      <Field label="Sensitive data present (PII/PHI/PCI)?" required error={errors.sensitiveData}>
                        <Select
                          value={answers.sensitiveData}
                          onChange={(v) => update({ sensitiveData: v })}
                          options={[
                            { value: "unknown", label: "Select…", disabled: true },
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                            { value: "prefer-not", label: "Prefer not to say" },
                          ]}
                        />
                      </Field>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <Field label="Primary goal for AI adoption" required error={errors.primaryGoal} hint="1–2 sentences">
                      <textarea
                        value={answers.primaryGoal}
                        onChange={(e) => update({ primaryGoal: e.target.value })}
                        rows={3}
                        placeholder="e.g. Automate support triage, generate leads, optimize internal workflows…"
                        className={cx(
                          "w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none placeholder:text-gray-400",
                          "border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/15",
                          "dark:bg-gray-900/50 dark:text-white dark:placeholder:text-gray-500 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-400/15"
                        )}
                      />
                    </Field>

                    <Field label="Biggest challenge / pain point" required error={errors.painPoint}>
                      <TextInput
                        value={answers.painPoint}
                        onChange={(e) => update({ painPoint: e.target.value })}
                        placeholder="e.g. Lack of time, too much manual data entry…"
                      />
                    </Field>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Time horizon">
                        <Select
                          value={answers.horizon}
                          onChange={(v) => update({ horizon: v })}
                          options={[
                            { value: "unknown", label: "Select…", disabled: true },
                            { value: "0-3", label: "0–3 months" },
                            { value: "3-6", label: "3–6 months" },
                            { value: "6-12", label: "6–12 months" },
                            { value: "12+", label: "12+ months" },
                          ]}
                        />
                      </Field>

                      <Field label="Approx. budget for transformation" hint="Optional">
                        <Select
                          value={answers.budget}
                          onChange={(v) => update({ budget: v })}
                          options={[
                            { value: "unsure", label: "Prefer not to say / Unsure" },
                            { value: "<5k", label: "< £5k" },
                            { value: "5-15k", label: "£5k–£15k" },
                            { value: "15-50k", label: "£15k–£50k" },
                            { value: "50k+", label: "£50k+" },
                          ]}
                        />
                      </Field>
                    </div>
                  </div>
                )}
              </div>

              <div className="sticky bottom-0 border-t border-gray-100 bg-white/90 px-6 py-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 sm:px-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={onBack}
                    disabled={!showResults && stepIdx === 0}
                    className={cx(
                      "inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold",
                      !showResults && stepIdx === 0
                        ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400 dark:border-gray-800 dark:bg-gray-950/20 dark:text-gray-600"
                        : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950/20 dark:text-white dark:hover:bg-gray-950/30"
                    )}>
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => setActivePage?.("contact")}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950/20 dark:text-white dark:hover:bg-gray-950/30">
                      Save & talk to us
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={onNext}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-purple-500/20 hover:from-purple-700 hover:via-fuchsia-700 hover:to-blue-700">
                      {stepIdx === STEPS.length - 1 ? "Generate report" : "Next"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIReadinessPage;

