type Kit = {
  id: number;
  name: string;
  sounds: {
    id: number;
    name: string;
    src: string;
    keyCode: number;
    keyChar: string;
  }[];
};

type Sound = {
  sounds: {
    id: number;
    name: string;
    src: string;
    keyCode: number;
    keyChar: string;
  };
};
