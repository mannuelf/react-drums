import { Sound } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { Kit } from '../../types/types';
import { getDrumKitByName } from '../../utils/getDrums';
import { machine } from './Machine.css';
import MachineBody from './MachineBody';
import MachineCable from './MachineCable';
import MachineDrumPad from './MachineDrumPad';
import MachineHeader from './MachineHeader';

const Machine: React.FC = () => {
  const kitName = '808';
  const [kit, setKit] = useState<Kit | undefined>({} as Kit);

  useEffect(() => {
    const drumKit = getDrumKitByName(kitName);
    setKit(drumKit);
  }, [setKit]);

  function handlePlaySound(keyChar: string): void {
    console.log('handlePlaySound', keyChar);
  }

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
              <MachineDrumPad
                {...sound}
                key={sound.id}
                onClick={() => handlePlaySound(sound.keyChar)}
                handleKeyDown={() => handlePlaySound(sound.keyChar)}
              />
            ))}
      </MachineBody>
    </div>
  );
};

export default Machine;
