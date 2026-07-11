"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-xl border border-border bg-muted/20 p-8 text-center">
        <h3 className="text-2xl font-semibold">Message Sent</h3>
        <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground"
        />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="w-full border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground"
        />
        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          {...register("message")}
          placeholder="Tell me about your project..."
          rows={4}
          className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground"
        />
        {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-4 flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105 disabled:opacity-50"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Message"}
        {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </button>
    </form>
  );
}
