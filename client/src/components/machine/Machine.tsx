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

    document.addEventListener('keydown', handleKeyPress);
    window.focus();
    return () => {
      console.log('removing keydown');
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setKit]);

  const handlePlaySound = (e: any) => {
    console.log('handlePlaySound: buttonElement >', buttonElement);
    if (audioElement) {
      const audioEl = e.target.children[1];
      audioEl.currentTime = 0;
      audioEl.play();
    }
  };

  const handleKeyPress = (e: any): any => {
    console.log(
      'handleKeyPress',
      e.keyCode,
      Number(e.target.dataset.key),
      audioElement.current?.dataset.key,
      audioElement.current,
    );
    const audioEl = e.current?.children[1];
    console.log(audioEl);

    if (Number(e.keyCode) === Number(audioElement.current?.dataset.key)) {
      audioElement!.current!.currentTime = 0;
      console.log('playing...');
      !audioElement.current!.play();
      // audioEl.currentTime = 0;
      // audioEl.play();
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
                  onClick={(e) => handlePlaySound(e)}
                  onKeyPress={(e) => handleKeyPress(e)}
                  className='pad-button'
                >
                  <MachineKey keyChar={sound.keyChar} />
                  <MachineAudio
                    ref={audioElement}
                    key={sound.id}
                    src={sound.src}
                    data-char={sound.keyChar}
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
