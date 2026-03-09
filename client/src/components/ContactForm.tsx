import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { Send } from "lucide-react";

export function ContactForm() {
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    const subject = encodeURIComponent(`New Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    const link = document.createElement("a");
    link.href = `mailto:mymail@gmail.com?subject=${subject}&body=${body}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Name</label>
          <input
            {...form.register("name")}
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="Your name"
          />
          {form.formState.errors.name && (
            <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Email</label>
          <input
            {...form.register("email")}
            type="email"
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="name@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Message</label>
        <textarea
          {...form.register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
          placeholder="Tell me about your project..."
        />
        {form.formState.errors.message && (
          <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        Send Message <Send className="w-5 h-5" />
      </button>
    </form>
  );
}