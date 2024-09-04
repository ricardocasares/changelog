import * as gh from "@/lib/github";
import { render } from "@/lib/markdown";

type IssueProps = {
  id: string;
};

export default async function Issue(props: IssueProps) {
  const issue = await gh.issue(props.id);
  const __html = await render(issue.body);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{issue.title}</h2>
      <div dangerouslySetInnerHTML={{ __html }} className="prose" />
    </div>
  );
}
