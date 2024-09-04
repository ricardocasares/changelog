import Link from 'next/link'
import {Label} from '@/lib/github'

type HashtagsProps = {
  labels: Label[]
}

export default function Hashtags(props: HashtagsProps) {
  return (
    <ul className="flex gap-2">
      {props.labels.map((label) => (
        <li key={label.id} className="text-xs inline-block">
          <Link href={label.link}>{label.name}</Link>
        </li>
      ))}
    </ul>
  )
}
