export interface Drum {
  id: number;
  name: string;
  sounds: {
    [key: string]: object;
  };
}

export const drums: Drum[] = [
  {
    id: 1,
    name: "808",
    sounds: {
      boom: {
        id: 1,
        name: "boom",
        clip: "./sounds/808/boom.wav",
        key: 81,
        letter: "q"
      },
      clap: {
        id: 2,
        name: "clap",
        clip: "./sounds/808/clap.wav",
        key: 87,
        letter: "w"
      },
      hihat: {
        id: 3,
        name: "hihat",
        clip: "./sounds/808/hihat.wav",
        key: 69,
        letter: "e"
      },
      kick: {
        id: 4,
        name: "kick",
        clip: "./sounds/808/kick.wav",
        key: 82,
        letter: "r"
      },
      openhat: {
        id: 5,
        name: "openhat",
        clip: "./sounds/808/openhat.wav",
        key: 84,
        letter: "t"
      },
      ride: {
        id: 6,
        name: "ride",
        clip: "./sounds/808/ride.wav",
        key: 89,
        letter: "y"
      },
      snare: {
        id: 7,
        name: "snare",
        clip: "./sounds/808/snare.wav",
        key: 85,
        letter: "u"
      },
      tink: {
        id: 8,
        name: "tink",
        clip: "./sounds/808/tink.wav",
        key: 73,
        letter: "i"
      },
      tom: {
        id: 9,
        name: "tom",
        clip: "./sounds/808/tom.wav",
        key: 79,
        letter: "o"
      }
    }
  }
];

export function getDrums() {
  return drums;
}

export function getDrumKitByName(kitName: string) {
  return drums.find(kit => kit.name === kitName);
}
