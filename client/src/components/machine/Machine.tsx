import { useState, useEffect, createRef, useRef } from 'react';
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
  const audioElement = useRef<HTMLAudioElement>();
  const buttonElement = createRef<HTMLButtonElement>();

  useEffect(() => {
    const drumKit = getDrumKitByName(kitName);
    setKit(drumKit);
  }, [setKit]);

  const handlePlaySound = (e: any) => {
    if (audioElement) {
      const audioEl = e.target.children[1];
      audioEl.currentTime = 0;
      audioEl.play();
    }
  };

  const handleKeyPress = (e: any) => {
    if (audioElement) {
      const audioEl = e.target.children[1];
      audioEl.currentTime = 0;
      audioEl.play();
    }
  };

  if (!kit) {
    return <div className='app'>Loading..</div>;
  } else {
    const { sounds } = kit as Kit;
    return (
      <div className='app'>
        <MachineCable />
        <MachineHeader />
        <MachineBody>
          {!sounds
            ? 'loading...'
            : sounds.map((sound: ISound) => (
                <MachinePad
                  ref={buttonElement}
                  key={sound.id}
                  data-key={sound.keyCode}
                  onClick={(e: any) => handlePlaySound(e)}
                  onKeyPress={(e: any) => handleKeyPress(e)}
                  className='pad-button'
                >
                  <MachineKey keyChar={sound.keyChar} />
                  <MachineAudio
                    ref={audioElement}
                    key={sound.id}
                    src={sound.src}
                    data-key={sound.keyCode}
                  />
                </MachinePad>
              ))}
        </MachineBody>
      </div>
    );
  }
};

export default Machine;
