import Labels from "@/ui/labels";
import Issues from "@/ui/issues";
import * as gh from "@/lib/github";

export default async function Home() {
  const issues = await gh.issues();

  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 gap-2">
      <div className="grow">
        <Issues issues={issues} />
      </div>
      <Labels />
    </div>
  );
}
