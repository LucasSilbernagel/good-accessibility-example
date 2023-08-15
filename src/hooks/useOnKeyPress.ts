import { useEventListener } from 'usehooks-ts';

export default function (keys: string[], callback: () => void) {
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (keys.includes(e.key)) {
      callback();
    }
  });
}
