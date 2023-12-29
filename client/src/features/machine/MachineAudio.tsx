import React from 'react';

type Props = {
  id: string;
  keyChar?: string;
  keyCode?: number;
  src: string;
  title?: string;
  ref?: any;
};

const MachineAudio: React.FC<Props> = React.forwardRef((props, ref) => {
  return <audio {...props} {...ref} />;
});

MachineAudio.displayName = 'MachineAudio';

export default MachineAudio;
