import React, { useEffect, useRef } from 'react';
import { machineDrumPadStyle } from './MachineDrumPad.css';
import MachineKey from './MachineKey';

type Props = {
  id: number;
  keyChar: string;
  keyCode?: number;
  src: string;
  title?: string;
  ref?: any;
  name?: string;
  onClick?: () => void;
  handleKeyDown?: () => void;
};

const MachineDrumPad: React.FC<Props> = ({
  id,
  name,
  keyChar,
  keyCode,
  src,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    window.focus();

    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleKeydown = (e: any): any => {
    if (e.keyCode === keyCode) {
      audioRef!.current!.currentTime = 0;
      audioRef!.current!.play();
    }
  };

  const handlePlay = (): any => {
    if (audioRef) {
      audioRef?.current?.play();
      audioRef!.current!.currentTime = 0;
    }
  };

  return (
    <button className={machineDrumPadStyle} key={id} title={name} onClick={handlePlay}>
      <MachineKey keyChar={keyChar} />
      <audio
        ref={audioRef}
        id={keyChar}
        key={id}
        src={src}
        title={name}
      ></audio>
    </button>
  );
};


export default MachineDrumPad;
