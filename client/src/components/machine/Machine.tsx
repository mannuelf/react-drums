import { useState, useEffect } from 'react';
import { getDrumKitByName } from '../../utils/getDrums';
import MachineHeader from './MachineHeader';
import MachineCable from './MachineCable';
import MachinePad from './MachinePad';
import MachineBody from './MachineBody';
import MachineAudio from './MachineAudio';
import MachineKey from './MachineKey';

interface ISound {
  id: number;
  name: string;
  src: string;
  keyCode: number;
  keyChar: string;
}

const Machine: React.FC = (): JSX.Element => {
  const kitName = '808';
  const [kit, setKit] = useState<Kit | undefined>({} as Kit);

  const handlePlaySound = (keyChar: string) => {
    const audioEl = document.getElementById(keyChar) as HTMLAudioElement;
    if (audioEl) {
      audioEl.currentTime = 0;
      audioEl.play();
    }
  };

  function handleKeyDown(e: any, keyChar: string): void {
    // TODO: make it right
    const audioEl = document.getElementById(keyChar) as HTMLAudioElement;
    if (e.key.toString().toUpperCase() === keyChar.toString().toUpperCase()) {
      audioEl.currentTime = 0;
      audioEl.play();
    }
  }

  useEffect(() => {
    const drumKit = getDrumKitByName(kitName);
    setKit(drumKit);
    document.addEventListener('keydown', () => handleKeyDown);
  }, [setKit]);

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
          : sounds.map((props: ISound) => (
              <MachinePad
                className='pad-button'
                key={props.id}
                title={props.name}
                onClick={() => handlePlaySound(props.keyChar)}
                onKeyDown={(e) => handleKeyDown(e, props.keyChar)}
              >
                <MachineKey keyChar={props.keyChar} />
                <MachineAudio
                  id={props.keyChar}
                  key={props.id}
                  src={props.src}
                  title={props.name}
                />
              </MachinePad>
            ))}
      </MachineBody>
    </div>
  );
};

export default Machine;
