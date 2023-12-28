import { style } from "@vanilla-extract/css";

export const app = style({
  position: "relative",
  width: "100%",
  maxWidth: "312px",
  margin: "5em auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5em",
  backgroundColor: "#181818",
  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23404040\' fill-opacity=\'0.4\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E")',
  boxShadow: "3px 2px 3px rgba(0, 0, 0, 0.8)",
  borderRadius: "4px",
  borderBottom: "2px solid #000",
  borderLeft: "1px solid #333",
  borderTop: "1px solid #555",
  color: "#eee",
  '@media': {
    'screen and (min-width: 767px)': {
      maxWidth: "680px",
    }
  },
  '::before': {
    display: "block",
    content: "",
    position: "absolute",
    zIndex: 1,
    opacity: 0.6,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: "4px",
    backgroundColor: "rgb(22, 22, 22)",
    background: "linear-gradient(353deg, rgba(22, 22, 22, 1) 0%, rgba(76, 76, 76, 1) 100%)",
    borderTop: "1px solid rgba(255,255,255,0.6)",
    borderLeft: "1px solid rgba(255,255,255,0.2)",
  },
});

// #app .logo {
//   width: 140px,
//   height: auto,
// }

// #app h1[role="heading"] .logo {
//   width: 220px,
// }



// .pad-button {
//   position: relative,
//   outline: none,
//   color: #fff,
//   transition: all 0.4s ease-in-out,
// }

// .pad-button::before {
//   display: block,
//   content: "",
//   position: absolute,
//   z-index: 2,
//   opacity: 0.8,
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   border-radius: 3px,
//   border-top: 1px solid rgba(255, 255, 255, 0.8),
// }
// .pad-button::after {
//   display: block,
//   content: "",
//   position: absolute,
//   z-index: 1,
//   opacity: 0.3,
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   border-radius: 3px,
//   background: rgb(255, 255, 255),
//   background: radial-gradient(
//     circle,
//     rgba(255, 255, 255, 1) 0%,
//     rgba(0, 0, 0, 1) 100%
//   ),
// }

// .pad-button:nth-child(1) {
//   background-color: #4d94fc,
//   order: 16,
// }
// .pad-button:nth-child(2) {
//   background-color: #4d94fc,
//   order: 15,
// }
// .pad-button:nth-child(3) {
//   background-color: #ffdd2f,
//   order: 14,
// }
// .pad-button:nth-child(4) {
//   background-color: #ff423e,
//   order: 13,
// }
// .pad-button:nth-child(5) {
//   background-color: #4d94fc,
//   order: 12,
// }
// .pad-button:nth-child(6) {
//   background-color: #19eaa3,
//   order: 11,
// }
// .pad-button:nth-child(7) {
//   background-color: #ffdd2f,
//   order: 10,
// }
// .pad-button:nth-child(8) {
//   background-color: #ffdd2f,
//   order: 9,
// }
// .pad-button:nth-child(9) {
//   background-color: #fc9824,
//   order: 8,
// }
// .pad-button:nth-child(10) {
//   background-color: #fc9824,
//   order: 7,
// }
// .pad-button:nth-child(11) {
//   background-color: #fc9824,
//   order: 6,
// }
// .pad-button:nth-child(12) {
//   background-color: #fc9824,
//   order: 5,
// }
// .pad-button:nth-child(13) {
//   background-color: #19eaa3,
//   order: 4,
// }
// .pad-button:nth-child(14) {
//   background-color: #19eaa3,
//   order: 3,
// }
// .pad-button:nth-child(15) {
//   background-color: #19eaa3,
//   order: 2,
// }
// .pad-button:nth-child(16) {
//   background-color: #19eaa3,
//   order: 1,
// }

// .pad-button-name {
//   font-size: 12px,
// }

// .pad-button-char {
//   font-size: 10px,
//   position: absolute,
//   top: 4px,
//   right: 4px,
// }

// .pad-button-id {
//   font-size: 10px,
//   position: absolute,
//   top: 4px,
//   left: 4px,
// }

// `,

