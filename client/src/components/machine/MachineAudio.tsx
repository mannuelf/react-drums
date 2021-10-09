import { RefObject } from 'react';

type Props = {
  ref: RefObject<HTMLAudioElement>;
  key: number;
  src: string;
  'data-key': number;
};

export const MachineAudio = ({ ...props }: Props): JSX.Element => {
  return <audio {...props} />;
};
