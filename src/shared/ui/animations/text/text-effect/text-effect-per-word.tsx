import { TextEffect } from '@/shared/ui/text-effect'

export const TextEffectPerWord = ({ text }: { text: string }) => {
  return (
    <TextEffect per="word" as="h3" preset="blur">
      {text}
    </TextEffect>
  )
}
