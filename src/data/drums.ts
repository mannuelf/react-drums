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

export const drums: Kit[] = [
  {
    id: 1,
    name: "808",
    sounds: [
      {
        id: 1,
        name: "Rimshot",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114020/drums/808/E808_RS-01.wav",
        keyCode: 77,
        keyChar: "M",
      },
      {
        id: 2,
        name: "Cow bell",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114033/drums/808/E808_CB-01.wav",
        keyCode: 78,
        keyChar: "N",
      },
      {
        id: 3,
        name: "Bass drum II",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114674/drums/808/E808_BD_short_-02.wav",
        keyCode: 66,
        keyChar: "B",
      },
      {
        id: 4,
        name: "Bass drum I",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114683/drums/808/E808_BD_short_-01.wav",
        keyCode: 86,
        keyChar: "V",
      },
      {
        id: 5,
        name: "Snare drum I",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114696/drums/808/E808_SD-01.wav",
        keyCode: 70,
        keyChar: "F",
      },
      {
        id: 6,
        name: "Snare drum II",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114725/drums/808/E808_SD-02.wav",
        keyCode: 71,
        keyChar: "G",
      },
      {
        id: 7,
        name: "Snare drum III",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114753/drums/808/E808_SD-03.wav",
        keyCode: 72,
        keyChar: "H",
      },
      {
        id: 8,
        name: "Snare drum IV",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114753/drums/808/E808_SD-04.wav",
        keyCode: 74,
        keyChar: "J",
      },
      {
        id: 9,
        name: "Closed hi hat I",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114771/drums/808/E808_CH-01.wav",
        keyCode: 82,
        keyChar: "R",
      },
      {
        id: 10,
        name: "Closed hi hat II",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114787/drums/808/E808_CH-02.wav",
        keyCode: 84,
        keyChar: "T",
      },
      {
        id: 11,
        name: "Open hi hat I",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114803/drums/808/E808_OH-01.wav",
        keyCode: 89,
        keyChar: "Y",
      },
      {
        id: 12,
        name: "Open hi hat II",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114818/drums/808/E808_OH-02.wav",
        keyCode: 85,
        keyChar: "U",
      },
      {
        id: 13,
        name: "Clap I",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114833/drums/808/E808_CP-01.wav",
        keyCode: 52,
        keyChar: "4",
      },
      {
        id: 14,
        name: "Clap II",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114849/drums/808/E808_CP-02.wav",
        keyCode: 53,
        keyChar: "5",
      },
      {
        id: 15,
        name: "Clave I",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114866/drums/808/E808_CL-01.wav",
        keyCode: 54,
        keyChar: "6",
      },
      {
        id: 16,
        name: "Clave II",
        src:
          "https://res.cloudinary.com/mannuel/video/upload/v1594114884/drums/808/E808_CL-02.wav",
        keyCode: 55,
        keyChar: "7",
      },
    ],
  },
];

export function getDrums(): Kit[] {
  return drums;
}

export function getDrumKitByName(kitName: string): Kit | undefined {
  console.log(drums.find((kit) => kit.name === kitName));
  return drums.find((kit) => kit.name === kitName);
}
