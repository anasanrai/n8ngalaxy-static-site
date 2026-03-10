
import { Profile } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AuthorInfoProps {
  author: Profile;
}

export function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="glass p-6 rounded-lg text-center">
      <Image
        src={author.avatar_url || ''}
        alt={author.full_name || ''}
        width={80}
        height={80}
        className="rounded-full mx-auto"
      />
      <h3 className="mt-4 text-xl font-bold text-text">{author.full_name}</h3>
      <p className="mt-1 text-sm text-subtext">@{author.email}</p> {/* Using email as a placeholder for username */}
      <p className="mt-4 text-subtext">{author.bio}</p>
      <div className="mt-4">
        <Button variant="outline">View Profile</Button>
      </div>
    </div>
  );
}
