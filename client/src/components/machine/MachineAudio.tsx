import { forwardRef } from 'react';

type Props = {
  ref?: any;
  key: number;
  src: string;
  'data-key': number;
};

const MachineAudio = forwardRef((props: Props, ref) => (
  <audio ref={ref} {...props} />
));

MachineAudio.displayName = 'MachineAudio';
export default MachineAudio;
