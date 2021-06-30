import { useState, useEffect, createRef } from 'react';
import { getDrumKitByName } from '../../utils/getDrums';
import Header from '../Header';
import Footer from '../Footer';
import Cable from '../common/Cable';
import { Button } from '../common/Button';

const Machine = (): JSX.Element => {
  console.log('🎹 Machine');

  const kitName = '808';
  const [kit, setKit] = useState<Kit | undefined>();

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
          <Cable />
          <Header />
          <section className='app-panel'>
            <div className='app-panel__controls'>.</div>
            <div className='app-panel__controls'>
              <div>
                {!sounds
                  ? 'loading...'
                  : sounds.map((sound: any) => (
                      <Button
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
                      </Button>
                    ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className='app'>
        <Cable />
        <Header />
        <section className='app-panel'>
          <div>No sounds loaded</div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Machine;
