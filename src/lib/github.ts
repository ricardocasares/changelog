import cfg from "@/config";
import slugify from "@sindresorhus/slugify";

export type Issue = {
  number: number;
  title: string;
  body: string;
  labels: Label[];
  link: string;
  slug: string;
};

export type Label = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
  link: string;
  slug: string;
};

function labelify(label: Label) {
  const slug = slugify(label.name);
  const link = `/issues/labels/${label.id}/${slug}`;

  return { ...label, slug, link };
}

function issueify(issue: Issue) {
  const slug = slugify(issue.title);
  const link = `/issues/${issue.number}/${slug}`;

  return {
    ...issue,
    slug,
    link,
  };
}

async function gh<T>(url: string) {
  return fetch(`${cfg.GITHUB_URL}/${url}`, {
    headers: {
      authorization: `Bearer ${cfg.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json() as T);
}

export async function issues() {
  return gh<Issue[]>(`repos/${cfg.GITHUB_REPOSITORY}/issues`).then((issues) =>
    issues.map(issueify)
  );
}

export async function issue(id: string) {
  return gh<Issue>(`repos/${cfg.GITHUB_REPOSITORY}/issues/${id}`).then(
    issueify
  );
}

export async function labels() {
  return gh<Label[]>(`repos/${cfg.GITHUB_REPOSITORY}/labels`).then((labels) =>
    labels.map(labelify)
  );
}

export async function issues_by_label(label: string) {
  return gh<Issue[]>(
    `repos/${cfg.GITHUB_REPOSITORY}/issues?labels=${label}`
  ).then((issues) => issues.map(issueify));
}
