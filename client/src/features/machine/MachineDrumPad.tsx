import { style } from '@vanilla-extract/css';
import React, { useEffect, useRef } from 'react';
import MachineKey from './MachineKey';

type Props = {
  id: string;
  keyChar: string;
  keyCode?: number;
  src: string;
  title?: string;
  ref?: any;
  name?: string;
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
    <button className={buttonStyle} key={id} title={name} onClick={handlePlay}>
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

export const buttonStyle = style({
  background: '#444',
  borderRadius: '3px',
  padding: '1rem',
  border: 'none',
  height: '68px',
  width: '100%',
  cursor: 'pointer',
  boxShadow: '-2px 2px 2px rgba(0, 0, 0, 0.4)',
});

export default MachineDrumPad;
