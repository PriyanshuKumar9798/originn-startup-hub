import { useMemo, useState } from "react";
import { z } from "zod";
import {
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Circle,
  FileText,
  User as UserIcon,
  Briefcase,
  Lightbulb,
  Send,
  ExternalLink,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

/* -------------------- Proposals (top block) -------------------- */
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

/* -------------------- Form schema & sections -------------------- */
type FieldDef = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "url";
  placeholder: string;
  required: boolean;
  schema: z.ZodTypeAny;
};

type SectionDef = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof UserIcon;
  fields: FieldDef[];
};

const sections: SectionDef[] = [
  {
    id: "about-you",
    title: "About You",
    subtitle: "Tell us who you are",
    icon: UserIcon,
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Jane Doe",
        required: true,
        schema: z.string().trim().min(2, "Required").max(100),
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "jane@example.com",
        required: true,
        schema: z.string().trim().email("Invalid email").max(255),
      },
    ],
  },
  {
    id: "background",
    title: "Background & Experience",
    subtitle: "Your professional context",
    icon: Briefcase,
    fields: [
      {
        name: "currentRole",
        label: "Current Role",
        type: "text",
        placeholder: "e.g. Senior Engineer at Acme",
        required: true,
        schema: z.string().trim().min(2, "Required").max(150),
      },
      {
        name: "linkedin",
        label: "LinkedIn / Portfolio URL",
        type: "url",
        placeholder: "https://linkedin.com/in/...",
        required: true,
        schema: z.string().trim().url("Must be a valid URL").max(300),
      },
    ],
  },
  {
    id: "fit",
    title: "Why You're a Fit",
    subtitle: "Help us understand the match",
    icon: Lightbulb,
    fields: [
      {
        name: "whyFit",
        label: "Why are you the right fit for this collaboration?",
        type: "textarea",
        placeholder: "Share your motivation and unique perspective...",
        required: true,
        schema: z.string().trim().min(20, "Min 20 characters").max(800),
      },
    ],
  },
  {
    id: "experience",
    title: "Relevant Experience",
    subtitle: "Show us proof of work",
    icon: FileText,
    fields: [
      {
        name: "relevantExp",
        label: "Describe your most relevant project or experience",
        type: "textarea",
        placeholder: "Project, scope, outcome, your role...",
        required: true,
        schema: z.string().trim().min(20, "Min 20 characters").max(1000),
      },
    ],
  },
  {
    id: "commitment",
    title: "Commitment & Availability",
    subtitle: "How you can engage",
    icon: HelpCircle,
    fields: [
      {
        name: "availability",
        label: "Weekly availability & preferred engagement model",
        type: "textarea",
        placeholder: "e.g. 15 hrs/week, equity-based, remote",
        required: true,
        schema: z.string().trim().min(10, "Min 10 characters").max(500),
      },
    ],
  },
];

type FormValues = Record<string, string>;
type FormErrors = Record<string, string | undefined>;

/* -------------------- Component -------------------- */
const CollaborateSection = () => {
  const { toast } = useToast();
  const [openSection, setOpenSection] = useState<string | null>(sections[0].id);
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const setField = (name: string, val: string) => {
    setValues((v) => ({ ...v, [name]: val }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  /** Per-section validity (for the green check on the section header) */
  const sectionStatus = useMemo(() => {
    const map: Record<string, "complete" | "partial" | "empty"> = {};
    for (const s of sections) {
      const filled = s.fields.filter((f) => (values[f.name] || "").trim().length > 0).length;
      const allValid = s.fields.every((f) => f.schema.safeParse(values[f.name] || "").success);
      map[s.id] = allValid ? "complete" : filled === 0 ? "empty" : "partial";
    }
    return map;
  }, [values]);

  const completedCount = Object.values(sectionStatus).filter((s) => s === "complete").length;
  const allComplete = completedCount === sections.length;

  const handleSubmit = () => {
    const newErrors: FormErrors = {};
    for (const s of sections) {
      for (const f of s.fields) {
        const res = f.schema.safeParse(values[f.name] || "");
        if (!res.success) newErrors[f.name] = res.error.issues[0]?.message ?? "Invalid";
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstBadSection = sections.find((s) => s.fields.some((f) => newErrors[f.name]));
      if (firstBadSection) setOpenSection(firstBadSection.id);
      toast({
        title: "Please complete all sections",
        description: "Fill every required field before submitting.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Application submitted",
      description: "The Kashmir Trends team will review your application shortly.",
    });
  };

  return (
    <div className="space-y-4">
      {/* === Open Proposals Card === */}
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

      {/* === Apply Now Header === */}
      <div className="bg-card border border-border px-5 py-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-primary">Apply Now & Build Together</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Builder Profile Required · Complete all 5 sections to submit
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex gap-1">
            {sections.map((s) => (
              <div
                key={s.id}
                className={`h-1 w-6 transition-colors ${
                  sectionStatus[s.id] === "complete"
                    ? "bg-primary"
                    : sectionStatus[s.id] === "partial"
                      ? "bg-primary/40"
                      : "bg-border"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-foreground tabular-nums">
            {completedCount}/{sections.length}
          </span>
        </div>
      </div>

      {/* === Sectioned Application Form === */}
      <div className="bg-card border border-border">
        {sections.map((section, idx) => {
          const isOpen = openSection === section.id;
          const status = sectionStatus[section.id];
          const Icon = section.icon;

          return (
            <div key={section.id} className="border-b border-border last:border-b-0">
              {/* Section Header */}
              <button
                type="button"
                onClick={() => setOpenSection(isOpen ? null : section.id)}
                className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-primary/[0.03] transition-colors text-left"
              >
                {/* Numeric badge */}
                <div
                  className={`w-7 h-7 flex items-center justify-center text-[11px] font-bold border transition-colors ${
                    status === "complete"
                      ? "bg-primary text-primary-foreground border-primary"
                      : isOpen
                        ? "bg-primary/10 text-primary border-primary/30"
                        : "bg-background text-muted-foreground border-border"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {section.title}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{section.subtitle}</div>
                </div>
                {status === "complete" ? (
                  <CheckCircle2 className="w-4 h-4 text-originn-green" />
                ) : (
                  <Circle
                    className={`w-4 h-4 ${
                      status === "partial" ? "text-primary/50" : "text-muted-foreground/40"
                    }`}
                  />
                )}
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Section Body */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 bg-gradient-to-b from-primary/[0.02] to-transparent">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.fields.map((field) => {
                      const err = errors[field.name];
                      const fullWidth = field.type === "textarea";
                      return (
                        <div
                          key={field.name}
                          className={fullWidth ? "sm:col-span-2 space-y-1.5" : "space-y-1.5"}
                        >
                          <Label
                            htmlFor={field.name}
                            className="text-[11px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1"
                          >
                            {field.label}
                            {field.required && <span className="text-primary">*</span>}
                          </Label>
                          {field.type === "textarea" ? (
                            <Textarea
                              id={field.name}
                              placeholder={field.placeholder}
                              value={values[field.name] || ""}
                              onChange={(e) => setField(field.name, e.target.value)}
                              rows={4}
                              className={`rounded-none text-sm ${
                                err ? "border-destructive focus-visible:ring-destructive" : ""
                              }`}
                            />
                          ) : (
                            <Input
                              id={field.name}
                              type={field.type}
                              placeholder={field.placeholder}
                              value={values[field.name] || ""}
                              onChange={(e) => setField(field.name, e.target.value)}
                              className={`rounded-none text-sm ${
                                err ? "border-destructive focus-visible:ring-destructive" : ""
                              }`}
                            />
                          )}
                          {err && (
                            <p className="text-[11px] text-destructive font-medium">{err}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Section nav */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/60">
                    <span className="text-[11px] text-muted-foreground">
                      Section {idx + 1} of {sections.length}
                    </span>
                    {idx < sections.length - 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="rounded-none text-[11px] uppercase font-bold tracking-wider"
                        onClick={() => setOpenSection(sections[idx + 1].id)}
                      >
                        Next Section
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </Button>
                    ) : (
                      <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                        Final Section
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* === Submit Footer === */}
      <div className="bg-card border border-border p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-[11px] text-muted-foreground">
            {allComplete ? (
              <span className="text-originn-green font-bold uppercase tracking-wider">
                ✓ All sections complete — ready to submit
              </span>
            ) : (
              <span>
                <span className="font-bold text-foreground">{completedCount}</span> of{" "}
                <span className="font-bold text-foreground">{sections.length}</span> sections
                complete. All required fields must be filled to submit.
              </span>
            )}
          </div>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!allComplete}
            className="rounded-none uppercase tracking-wider text-xs font-bold gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollaborateSection;
