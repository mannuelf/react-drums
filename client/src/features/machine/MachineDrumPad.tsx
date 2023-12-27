import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MachineKey from './MachineKey';

type Props = {
  id: string;
  keyChar?: string;
  keyCode?: number;
  src: string;
  title?: string;
  ref?: any;
  name?: string;
};

const MachineDrumPad: React.FC<Props> = (props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    window.focus();

    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleKeydown = (e: any): any => {
    if (e.keyCode === props.keyCode) {
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
    <StyledButton
      className='pad-button'
      key={props.id}
      title={props.name}
      onClick={handlePlay}
    >
      <MachineKey keyChar={props.keyChar} />
      <audio
        ref={audioRef}
        id={props.keyChar}
        key={props.id}
        src={props.src}
        title={props.name}
      ></audio>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: #444;
  border-radius: 3px;
  padding: 1rem;
  border: none;
  height: 68px;
  width: 100%;
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export default MachineDrumPad;
