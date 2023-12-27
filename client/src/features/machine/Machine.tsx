import React, { useState, useEffect } from 'react';
import { getDrumKitByName } from '../../utils/getDrums';
import MachineHeader from './MachineHeader';
import MachineCable from './MachineCable';
import MachineDrumPad from './MachineDrumPad';
import MachineBody from './MachineBody';

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
    return <div className='app'>Loading..</div>;
  }

  const { sounds } = kit as Kit;

  return (
    <div className='app'>
      <MachineCable />
      <MachineHeader />
      <MachineBody>
        {!sounds
          ? 'Loading...'
          : sounds.map((sound: any) => (
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
