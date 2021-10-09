import { useState, useEffect, createRef } from 'react';
import { getDrumKitByName } from '../../utils/getDrums';
import { MachineHeader } from './MachineHeader';
import { MachineCable } from './MachineCable';
import { Button } from '../common/Button';
import Footer from '../Footer';
import { MachinePad } from './MachinePad';
import { MachineBody } from './MachineBody';

const Machine: React.FC = (): JSX.Element => {
  console.log('🎹 Machine');

  const kitName = '808';
  const [kit, setKit] = useState<Kit | undefined>({} as Kit);

  const audioElement = createRef<HTMLAudioElement>()!;
  const buttonElement = createRef<HTMLButtonElement>()!;

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

  if (kit) {
    const { sounds } = kit;
    return (
      <>
        <div className='app'>
          <MachineCable />
          <MachineHeader />
          <MachineBody>
            {!sounds
              ? 'loading...'
              : sounds.map((sound: any) => (
                  <MachinePad
                    ref={buttonElement}
                    key={sound.id}
                    data-key={sound.keyCode}
                    className='pad-button'
                    onClick={(e: any) => handlePlaySound(e)}
                    onKeyPress={(e: any) => handlePlaySound(e)}
                  >
                    <span className='pad-button-char'>{sound.keyChar}</span>
                    <audio
                      ref={audioElement}
                      key={sound.id}
                      src={sound.src}
                      data-key={sound.keyCode}
                    />
                  </MachinePad>
                ))}
          </MachineBody>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className='app'>
        <MachineCable />
        <MachineHeader />
        <section className='app-panel'>
          <div>No sounds loaded</div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Machine;
