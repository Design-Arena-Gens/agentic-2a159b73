export type StoryBeat = {
  id: string;
  subtitle: string;
  narration: string;
  whisper?: string;
  delay: number;
};

export const storyBeats: StoryBeat[] = [
  {
    id: 'awakening',
    subtitle: 'Darkness Breathes',
    narration:
      'A young girl sits alone in a room stripped bare of comfort. The lone bulb above her hums, light faltering as if strangled by the surrounding void.',
    whisper: 'hello...',
    delay: 2800,
  },
  {
    id: 'presence',
    subtitle: 'The Air Grows Cold',
    narration:
      'Her breath trembles; frostbitten air skates across her skin. A whisper slices through the silence — soft, cold, inches from her ear.',
    whisper: 'closer...',
    delay: 3600,
  },
  {
    id: 'void',
    subtitle: 'Emptiness Answers Back',
    narration:
      'She turns, slow as syrup, to face the nothing crouched behind her. The bulb sputters. Darkness pours back in. Nothing. No one. Only the echo of her own heartbeat.',
    delay: 4200,
  },
  {
    id: 'reveal',
    subtitle: 'Something Moves',
    narration:
      'Sound distorts into a guttural growl. In the corner, a blot of shadow unhooks from the wall. It crawls, limbs too long, face collapsing inward.',
    whisper: 'mine.',
    delay: 4800,
  },
  {
    id: 'realization',
    subtitle: 'Not a Shadow',
    narration:
      'The shape pulses, wet and breathing. Her mind stumbles — the room was empty. But this is no shadow. It glistens. It hungers.',
    delay: 5200,
  },
  {
    id: 'silence',
    subtitle: 'Echoes Fade',
    narration:
      'Her scream tears through the room, ricocheting off concrete and into forever. The bulb bursts. The whisper returns. Then—silence.',
    whisper: 'hush.',
    delay: 5600,
  },
];
