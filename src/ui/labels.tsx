import Link from 'next/link'
import * as gh from '@/lib/github'
import {Tags} from '@/lib/icons'

export default async function Labels() {
  const labels = await gh.labels()

  return (
    <div>
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        Labels
        <Tags />
      </h3>
      <ul className="space-y-1 mb-10">
        {labels.map((label) => (
          <li key={label.id}>
            <Link href={label.link}>{label.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
