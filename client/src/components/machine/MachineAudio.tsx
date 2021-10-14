import { forwardRef } from 'react';

type Props = {
  ref?: any;
  src: string;
};

const MachineAudio = forwardRef((props: Props, ref) => (
  <audio ref={ref} {...props} />
));

// forwardRef
MachineAudio.displayName = 'MachineAudio';
export default MachineAudio;
