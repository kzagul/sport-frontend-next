import { TextEffect } from '@/shared/ui/text-effect'

export const TextEffectPerChar = ({ text }: { text: string }) => {
  return (
    <TextEffect per="char" preset="fade">
      {text}
    </TextEffect>
  )
}
