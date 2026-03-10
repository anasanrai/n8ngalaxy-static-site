
import GlowButton from "@/components/ui/GlowButton";
import { Input } from "@/components/ui/input";

export function FreeTemplateCapture() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-text">
        Get a Free Template
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-subtext">
        Join our newsletter and get a free n8n workflow to automate your content calendar.
      </p>
      <form className="mt-8 max-w-md mx-auto flex gap-4">
        <Input type="email" placeholder="Enter your email" className="flex-grow" />
        <GlowButton type="submit">Get Free Template</GlowButton>
      </form>
    </div>
  );
}
