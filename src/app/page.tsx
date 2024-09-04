import Labels from "@/ui/labels";
import Issues from "@/ui/issues";
import * as gh from "@/lib/github";

export default async function Home() {
  const issues = await gh.issues();

  return (
    <div className="main">
      <div className="grow">
        <Issues issues={issues} />
      </div>
      <Labels />
    </div>
  );
}
