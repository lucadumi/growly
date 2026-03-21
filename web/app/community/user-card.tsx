import Link from "next/link";

type UserCardProps = {
  id: string;
  name: string;
  username: string | null;
  location?: string | null;
  focusArea?: string | null;
  sharedHabitsCount?: number;
};

export default function UserCard({ id, name, username }: UserCardProps) {
  const href = `/profile/${username ?? id}`;

  const card = (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-3.5 hover:bg-gray-100 transition cursor-pointer">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
        <span className="lg:text-xs xl:text-sm font-bold text-primary leading-none">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm truncate">
          {name}
        </p>
        {username && (
          <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] truncate">
            @{username}
          </p>
        )}
      </div>
    </div>
  );

  return <Link href={href}>{card}</Link>;
}
