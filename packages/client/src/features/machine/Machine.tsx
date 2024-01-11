import React, { useEffect, useState } from 'react';
import { Kit, Sound } from '../../types/types';
import { getDrumKitByName } from '../../utils/getDrums';
import { machine } from './Machine.css';
import MachineBody from './MachineBody';
import MachineCable from './MachineCable';
import MachineDrumPad from './MachineDrumPad';
import MachineHeader from './MachineHeader';

const Machine: React.FC = () => {
  const kitName = '808';
  const [kit, setKit] = useState<Kit | undefined>(undefined);

  useEffect(() => {
    const drumKit = getDrumKitByName(kitName);
    setKit(drumKit);
  }, [kitName]);

  if (!kit) {
    return <div className={machine}>Loading..</div>;
  }

  const { sounds } = kit as Kit;

  return (
    <div className={machine}>
      <MachineCable />
      <MachineHeader />
      <MachineBody>
        {!sounds
          ? 'Loading...'
          : sounds.map((sound: Sound) => (
              <MachineDrumPad {...sound} key={sound.id} />
            ))}
      </MachineBody>
    </div>
  );
};

export default Machine;
