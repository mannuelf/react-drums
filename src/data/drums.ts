export interface Drum {
  id: number;
  name: string;
  sounds: object[];
}

export const drums: Drum[] = [
  {
    id: 1,
    name: "808",
    sounds: [
      {
        id: 1,
        name: "Rimshot",
        src: "https://themwebs.me/drums/808/rimshot/E808_RS-01.wav",
        keyCode: 77,
        keyChar: "M"
      },
      {
        id: 2,
        name: "Cow bell",
        src: "https://themwebs.me/drums/808/cowbell/E808_CB-01.wav",
        keyCode: 78,
        keyChar: "N"
      },
      {
        id: 3,
        name: "Bass drum II",
        src: "https://themwebs.me/drums/808/bass-drum/E808_BD[short]-02.wav",
        keyCode: 66,
        keyChar: "B"
      },
      {
        id: 4,
        name: "Bass drum I",
        src: "https://themwebs.me/drums/808/bass-drum/E808_BD[short]-01.wav",
        keyCode: 86,
        keyChar: "V"
      },
      {
        id: 5,
        name: "Snare drum I",
        src: "https://themwebs.me/drums/808/snare-drum/E808_SD-01.wav",
        keyCode: 70,
        keyChar: "F"
      },
      {
        id: 6,
        name: "Snare drum II",
        src: "https://themwebs.me/drums/808/snare-drum/E808_SD-02.wav",
        keyCode: 71,
        keyChar: "G"
      },
      {
        id: 7,
        name: "Snare drum III",
        src: "https://themwebs.me/drums/808/snare-drum/E808_SD-03.wav",
        keyCode: 72,
        keyChar: "H"
      },
      {
        id: 8,
        name: "Snare drum IV",
        src: "https://themwebs.me/drums/808/snare-drum/E808_SD-04.wav",
        keyCode: 74,
        keyChar: "J"
      },
      {
        id: 9,
        name: "Closed hi hat I",
        src: "https://themwebs.me/drums/808/closed-hi-hat/E808_CH-01.wav",
        keyCode: 82,
        keyChar: "R"
      },
      {
        id: 10,
        name: "Closed hi hat II",
        src: "https://themwebs.me/drums/808/closed-hi-hat/E808_CH-02.wav",
        keyCode: 84,
        keyChar: "T"
      },
      {
        id: 11,
        name: "Open hi hat I",
        src: "https://themwebs.me/drums/808/open-hi-hat/E808_OH-01.wav",
        keyCode: 89,
        keyChar: "Y"
      },
      {
        id: 12,
        name: "Open hi hat II",
        src: "https://themwebs.me/drums/808/open-hi-hat/E808_OH-02.wav",
        keyCode: 85,
        keyChar: "U"
      },
      {
        id: 13,
        name: "Clap I",
        src: "https://themwebs.me/drums/808/clap/E808_CP-01.wav",
        keyCode: 52,
        keyChar: "4"
      },
      {
        id: 14,
        name: "Clap II",
        src: "https://themwebs.me/drums/808/clap/E808_CP-02.wav",
        keyCode: 53,
        keyChar: "5"
      },
      {
        id: 15,
        name: "Clave I",
        src: "https://themwebs.me/drums/808/claves/E808_CL-01.wav",
        keyCode: 54,
        keyChar: "6"
      },
      {
        id: 16,
        name: "Clave II",
        src: "https://themwebs.me/drums/808/claves/E808_CL-02.wav",
        keyCode: 55,
        keyChar: "7"
      }
    ]
  }
];

export function getDrums() {
  return drums;
}

export function getDrumKitByName(kitName: string) {
  return drums.find(kit => kit.name === kitName);
}
