import { useMemo, useState } from "react";
import { z } from "zod";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Upload,
  Lock,
  Send,
  X,
  Sparkles,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* -------------------- Open Proposals -------------------- */
const proposals = [
  {
    title: "Looking for a CTO",
    desc: "Seeking a technical co-founder with experience in scalable e-commerce and supply-chain platforms.",
  },
  {
    title: "A Research Collaboration in Fabric",
    desc: "Partnering with textile labs to study traditional Kashmiri weaving techniques and modern sustainability.",
  },
];

/* -------------------- Step schemas -------------------- */
const profileSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  expertise: z.string().min(1, "Please select your expertise"),
  linkedin: z
    .string()
    .trim()
    .max(300)
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^https?:\/\/.+\..+/.test(v),
      "Must be a valid URL",
    ),
});

const innovationSchema = z.object({
  contribution: z
    .string()
    .trim()
    .min(20, "Please describe in at least 20 characters")
    .max(1500),
  contributionType: z.string().min(1, "Please select a type"),
  patentInfo: z.string().trim().max(200).optional().or(z.literal("")),
});

const partnershipSchema = z.object({
  partnershipGoal: z.string().min(1, "Please select a partnership goal"),
  partnershipVision: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters")
    .max(1500),
});

type ProfileData = z.infer<typeof profileSchema>;
type InnovationData = z.infer<typeof innovationSchema>;
type PartnershipData = z.infer<typeof partnershipSchema>;

type WizardData = {
  profile: Partial<ProfileData>;
  innovation: Partial<InnovationData>;
  partnership: Partial<PartnershipData>;
  ndaConsent: boolean;
};

const STEPS = [
  { id: 1, label: "Profile" },
  { id: 2, label: "Innovation" },
  { id: 3, label: "Partnership" },
  { id: 4, label: "Review" },
] as const;

const expertiseOptions = [
  "Engineering / Tech",
  "Product & Design",
  "Research / Academia",
  "Operations & Supply Chain",
  "Marketing & Growth",
  "Finance / Legal",
  "Domain Expert (Textiles)",
  "Other",
];

const contributionTypes = [
  "Patent / IP",
  "Research Findings",
  "Technical Expertise",
  "Unique Dataset",
  "Concept / Methodology",
  "Network / Distribution",
  "Capital",
];

const partnershipGoals = [
  "Co-Founder Role",
  "Advisor / Mentor",
  "Research Collaboration",
  "Licensing / IP Partnership",
  "Strategic Investment",
  "Vendor / Supplier",
  "Other",
];

/* -------------------- Component -------------------- */
const CollaborateSection = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState<WizardData>({
    profile: {},
    innovation: {},
    partnership: {},
    ndaConsent: false,
  });

  const reset = () => {
    setStep(1);
    setErrors({});
    setData({ profile: {}, innovation: {}, partnership: {}, ndaConsent: false });
  };

  const closeWizard = () => {
    setOpen(false);
    setTimeout(reset, 200);
  };

  const validateStep = (s: number): boolean => {
    let result;
    if (s === 1) result = profileSchema.safeParse(data.profile);
    else if (s === 2) result = innovationSchema.safeParse(data.innovation);
    else if (s === 3) result = partnershipSchema.safeParse(data.partnership);
    else return true;

    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path.join(".")] = i.message;
      });
      setErrors(errs);
      return false;
    }
    setErrors({});
    return true;
  };

  const goNext = () => {
    setErrors({});
    setStep((s) => Math.min(4, s + 1));
  };
  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };
  const goToStep = (s: number) => {
    setErrors({});
    setStep(s);
  };

  const handleSubmit = () => {
    const ok =
      profileSchema.safeParse(data.profile).success &&
      innovationSchema.safeParse(data.innovation).success &&
      partnershipSchema.safeParse(data.partnership).success;
    if (!ok) {
      toast({
        title: "Incomplete proposal",
        description: "Please complete all required fields before sending.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Proposal sent securely",
      description: "Kashmir Trends will review your proposal and respond shortly.",
    });
    closeWizard();
  };

  const setProfile = <K extends keyof ProfileData>(k: K, v: ProfileData[K]) =>
    setData((d) => ({ ...d, profile: { ...d.profile, [k]: v } }));
  const setInnovation = <K extends keyof InnovationData>(k: K, v: InnovationData[K]) =>
    setData((d) => ({ ...d, innovation: { ...d.innovation, [k]: v } }));
  const setPartnership = <K extends keyof PartnershipData>(k: K, v: PartnershipData[K]) =>
    setData((d) => ({ ...d, partnership: { ...d.partnership, [k]: v } }));

  /* Step completion for stepper visuals */
  const completion = useMemo(
    () => ({
      1: profileSchema.safeParse(data.profile).success,
      2: innovationSchema.safeParse(data.innovation).success,
      3: partnershipSchema.safeParse(data.partnership).success,
      4: false,
    }),
    [data],
  );

  return (
    <div className="space-y-4">
      {/* === Open Proposals === */}
      <div className="bg-card border border-border">
        <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-gradient-to-r from-primary/[0.04] to-transparent">
          <div className="w-7 h-7 border border-border bg-background flex items-center justify-center">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            {proposals.length} Collaboration Proposals Open
          </h3>
        </div>
        <div className="divide-y divide-border">
          {proposals.map((p, i) => (
            <div
              key={i}
              className="px-5 py-4 hover:bg-primary/[0.03] transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-primary mt-0.5">{i + 1}.</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-primary group-hover:underline underline-offset-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Inline CTA / Wizard === */}
      {!open ? (
        <div className="bg-card border border-border overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-originn-green to-primary" />
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-wide">
                  Propose a Collaboration
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-md">
                  Send a structured, confidential proposal directly to Kashmir Trends — patents,
                  research, expertise, or partnership ideas welcome.
                </p>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-none uppercase tracking-wider text-xs font-bold gap-2 flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              Start Proposal
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-card border border-border flex flex-col animate-fade-in">
          {/* Inline Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border bg-gradient-to-r from-primary/[0.05] to-transparent">
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-primary uppercase tracking-wide">
                Collaborate with Kashmir Trends
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Step {step} of {STEPS.length} · {STEPS[step - 1].label}
              </p>
            </div>
            <button
              onClick={closeWizard}
              className="w-8 h-8 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Stepper */}
          <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-border">
              <div className="flex items-center justify-between gap-1 sm:gap-2">
                {STEPS.map((s, idx) => {
                  const active = step === s.id;
                  const done = completion[s.id as 1 | 2 | 3 | 4] && step > s.id;
                  const reachable = step >= s.id;
                  return (
                    <div key={s.id} className="flex items-center flex-1 last:flex-none">
                      <button
                        type="button"
                        onClick={() => reachable && setStep(s.id)}
                        disabled={!reachable}
                        className="flex flex-col items-center gap-1.5 group disabled:cursor-not-allowed"
                      >
                        <div
                          className={`w-9 h-9 flex items-center justify-center text-xs font-bold border transition-all ${
                            active
                              ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                              : done
                                ? "bg-originn-green text-white border-originn-green"
                                : "bg-background text-muted-foreground border-border"
                          }`}
                        >
                          {done ? <Check className="w-4 h-4" /> : s.id}
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            active
                              ? "text-primary"
                              : done
                                ? "text-foreground"
                                : "text-muted-foreground"
                          }`}
                        >
                          {s.label}
                        </span>
                      </button>
                      {idx < STEPS.length - 1 && (
                        <div
                          className={`flex-1 h-px mx-1 sm:mx-2 -mt-4 transition-colors ${
                            step > s.id ? "bg-primary" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Body — scrollable */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
              {step === 1 && (
                <StepProfile
                  data={data.profile}
                  errors={errors}
                  onChange={setProfile}
                />
              )}
              {step === 2 && (
                <StepInnovation
                  data={data.innovation}
                  errors={errors}
                  onChange={setInnovation}
                />
              )}
              {step === 3 && (
                <StepPartnership
                  data={data.partnership}
                  errors={errors}
                  onChange={setPartnership}
                />
              )}
              {step === 4 && (
                <StepReview
                  data={data}
                  onToggleNda={(v) =>
                    setData((d) => ({ ...d, ndaConsent: v }))
                  }
                />
              )}
            </div>

            {/* Footer */}
            <div className="px-5 sm:px-6 py-4 border-t border-border bg-muted/20 flex items-center justify-between gap-3">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  className="rounded-none text-xs font-bold uppercase tracking-wider gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Back
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeWizard}
                  className="rounded-none text-xs font-bold uppercase tracking-wider"
                >
                  Cancel
                </Button>
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  onClick={goNext}
                  className="rounded-none text-xs font-bold uppercase tracking-wider gap-1.5"
                >
                  Continue
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-none text-xs font-bold uppercase tracking-wider gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Proposal
                </Button>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

/* -------------------- Step Components -------------------- */

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-5 pb-3 border-b border-border">
    <h3 className="text-base font-extrabold text-foreground uppercase tracking-wide">
      {title}
    </h3>
    {subtitle && (
      <p className="text-[11px] text-muted-foreground mt-1">{subtitle}</p>
    )}
  </div>
);

const FieldLabel = ({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <Label
    htmlFor={htmlFor}
    className="text-[11px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1"
  >
    {children}
    {required && <span className="text-primary">*</span>}
  </Label>
);

const ErrorText = ({ msg }: { msg?: string }) =>
  msg ? <p className="text-[11px] text-destructive font-medium mt-1">{msg}</p> : null;

const inputCls = (err?: string) =>
  `rounded-none text-sm ${err ? "border-destructive focus-visible:ring-destructive" : ""}`;

/* ---- Step 1 ---- */
const StepProfile = ({
  data,
  errors,
  onChange,
}: {
  data: Partial<ProfileData>;
  errors: Record<string, string>;
  onChange: <K extends keyof ProfileData>(k: K, v: ProfileData[K]) => void;
}) => (
  <div>
    <SectionHeading title="Your Profile" subtitle="Tell Kashmir Trends who you are" />
    <div className="space-y-4">
      <div className="space-y-1.5">
        <FieldLabel htmlFor="fullName" required>
          Full Name
        </FieldLabel>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          value={data.fullName || ""}
          onChange={(e) => onChange("fullName", e.target.value)}
          className={inputCls(errors.fullName)}
        />
        <ErrorText msg={errors.fullName} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="email" required>
          Email Address
        </FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={data.email || ""}
          onChange={(e) => onChange("email", e.target.value)}
          className={inputCls(errors.email)}
        />
        <ErrorText msg={errors.email} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="expertise" required>
          Your Role / Expertise
        </FieldLabel>
        <Select
          value={data.expertise || ""}
          onValueChange={(v) => onChange("expertise", v)}
        >
          <SelectTrigger
            id="expertise"
            className={`rounded-none text-sm h-10 ${errors.expertise ? "border-destructive" : ""}`}
          >
            <SelectValue placeholder="Select your primary expertise" />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            {expertiseOptions.map((o) => (
              <SelectItem key={o} value={o} className="rounded-none text-sm">
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ErrorText msg={errors.expertise} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="linkedin">LinkedIn / Portfolio URL</FieldLabel>
        <Input
          id="linkedin"
          placeholder="https://linkedin.com/in/..."
          value={data.linkedin || ""}
          onChange={(e) => onChange("linkedin", e.target.value)}
          className={inputCls(errors.linkedin)}
        />
        <ErrorText msg={errors.linkedin} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="docs">Supporting Documents (Optional)</FieldLabel>
        <button
          type="button"
          className="w-full border border-dashed border-border bg-background hover:bg-primary/[0.03] hover:border-primary/40 transition-colors py-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground"
        >
          <Upload className="w-4 h-4 text-primary" />
          Upload Resume / Portfolio
        </button>
        <p className="text-[10px] text-muted-foreground">
          PDF, DOC, or portfolio link
        </p>
      </div>
    </div>
  </div>
);

/* ---- Step 2 ---- */
const StepInnovation = ({
  data,
  errors,
  onChange,
}: {
  data: Partial<InnovationData>;
  errors: Record<string, string>;
  onChange: <K extends keyof InnovationData>(k: K, v: InnovationData[K]) => void;
}) => (
  <div>
    <SectionHeading
      title="Your Innovation / Research / IP"
      subtitle="Be specific about what you bring to this startup"
    />
    <div className="space-y-4">
      <div className="space-y-1.5">
        <FieldLabel htmlFor="contribution" required>
          What are you bringing to the table?
        </FieldLabel>
        <Textarea
          id="contribution"
          placeholder="Describe your innovation, patent, research findings, technical expertise, unique dataset, or concept. Be specific about its relevance to this startup."
          value={data.contribution || ""}
          onChange={(e) => onChange("contribution", e.target.value)}
          rows={5}
          className={inputCls(errors.contribution)}
        />
        <ErrorText msg={errors.contribution} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="contributionType" required>
          Type of Contribution
        </FieldLabel>
        <Select
          value={data.contributionType || ""}
          onValueChange={(v) => onChange("contributionType", v)}
        >
          <SelectTrigger
            id="contributionType"
            className={`rounded-none text-sm h-10 ${errors.contributionType ? "border-destructive" : ""}`}
          >
            <SelectValue placeholder="Select the type of your contribution" />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            {contributionTypes.map((o) => (
              <SelectItem key={o} value={o} className="rounded-none text-sm">
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ErrorText msg={errors.contributionType} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="patentInfo">
          Patent Number or IP Status (if applicable)
        </FieldLabel>
        <Input
          id="patentInfo"
          placeholder="e.g., Filed / Granted / Application #123456"
          value={data.patentInfo || ""}
          onChange={(e) => onChange("patentInfo", e.target.value)}
          className={inputCls(errors.patentInfo)}
        />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="files">Supporting Documents / Research Papers</FieldLabel>
        <button
          type="button"
          className="w-full border border-dashed border-border bg-background hover:bg-primary/[0.03] hover:border-primary/40 transition-colors py-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground"
        >
          <Upload className="w-4 h-4 text-primary" />
          Upload Files
        </button>
        <p className="text-[10px] text-muted-foreground">
          PDFs, images, or research papers
        </p>
      </div>
    </div>
  </div>
);

/* ---- Step 3 ---- */
const StepPartnership = ({
  data,
  errors,
  onChange,
}: {
  data: Partial<PartnershipData>;
  errors: Record<string, string>;
  onChange: <K extends keyof PartnershipData>(k: K, v: PartnershipData[K]) => void;
}) => (
  <div>
    <SectionHeading title="Partnership Goals" subtitle="Define how you'd like to engage" />
    <div className="space-y-4">
      <div className="space-y-1.5">
        <FieldLabel htmlFor="partnershipGoal" required>
          What type of partnership are you seeking?
        </FieldLabel>
        <Select
          value={data.partnershipGoal || ""}
          onValueChange={(v) => onChange("partnershipGoal", v)}
        >
          <SelectTrigger
            id="partnershipGoal"
            className={`rounded-none text-sm h-10 ${errors.partnershipGoal ? "border-destructive" : ""}`}
          >
            <SelectValue placeholder="Select your partnership goal" />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            {partnershipGoals.map((o) => (
              <SelectItem key={o} value={o} className="rounded-none text-sm">
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ErrorText msg={errors.partnershipGoal} />
      </div>

      <div className="space-y-1.5">
        <FieldLabel htmlFor="partnershipVision" required>
          Partnership Vision & Expectations
        </FieldLabel>
        <Textarea
          id="partnershipVision"
          placeholder="What do you hope to achieve through this collaboration? What value do you bring, and what are you looking for in return?"
          value={data.partnershipVision || ""}
          onChange={(e) => onChange("partnershipVision", e.target.value)}
          rows={5}
          className={inputCls(errors.partnershipVision)}
        />
        <ErrorText msg={errors.partnershipVision} />
      </div>

      <div className="border-l-2 border-primary bg-primary/[0.04] px-4 py-3">
        <p className="text-xs leading-relaxed text-foreground">
          <span className="font-bold">Note:</span>{" "}
          <span className="text-muted-foreground">
            This platform facilitates direct, secure communication between innovators and
            founders. All proposals are reviewed confidentially.
          </span>
        </p>
      </div>
    </div>
  </div>
);

/* ---- Step 4 ---- */
const StepReview = ({
  data,
  onToggleNda,
}: {
  data: WizardData;
  onToggleNda: (v: boolean) => void;
}) => {
  const Row = ({ label, value }: { label: string; value?: string }) => (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div
        className={`text-sm mt-0.5 ${
          value ? "text-foreground font-semibold" : "text-muted-foreground italic"
        }`}
      >
        {value || "Not provided"}
      </div>
    </div>
  );

  return (
    <div>
      <SectionHeading title="Review & Submit" subtitle="Confirm your proposal before sending" />

      <div className="border border-border bg-muted/20 divide-y divide-border">
        <div className="p-4 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Your Profile
          </div>
          <Row label="Name" value={data.profile.fullName} />
          <Row label="Email" value={data.profile.email} />
          <Row label="Expertise" value={data.profile.expertise} />
          {data.profile.linkedin && <Row label="Link" value={data.profile.linkedin} />}
        </div>

        <div className="p-4 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Innovation
          </div>
          <Row label="Contribution Type" value={data.innovation.contributionType} />
          <Row label="Description" value={data.innovation.contribution} />
          {data.innovation.patentInfo && (
            <Row label="Patent / IP" value={data.innovation.patentInfo} />
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Partnership
          </div>
          <Row label="Goal" value={data.partnership.partnershipGoal} />
          <Row label="Vision" value={data.partnership.partnershipVision} />
        </div>
      </div>

      {/* NDA */}
      <button
        type="button"
        onClick={() => onToggleNda(!data.ndaConsent)}
        className={`mt-4 w-full text-left border px-4 py-3 flex items-start gap-3 transition-colors ${
          data.ndaConsent
            ? "border-primary bg-primary/[0.05]"
            : "border-border bg-background hover:border-primary/40"
        }`}
      >
        <div
          className={`w-4 h-4 border flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
            data.ndaConsent ? "bg-primary border-primary" : "border-border"
          }`}
        >
          {data.ndaConsent && <Check className="w-3 h-3 text-primary-foreground" />}
        </div>
        <span className="text-xs text-foreground leading-relaxed">
          I'm open to sharing additional details under a mutual{" "}
          <span className="font-bold">Non-Disclosure Agreement (NDA)</span>.
        </span>
      </button>

      {/* Security note */}
      <div className="mt-3 border border-border bg-muted/30 px-4 py-3 flex items-start gap-2">
        <Lock className="w-3.5 h-3.5 text-originn-green flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Your proposal will be sent directly and securely to Kashmir Trends' dashboard on
          Originn. All information is encrypted and protected. You'll receive email
          notifications for any responses.
        </p>
      </div>
    </div>
  );
};

export default CollaborateSection;
