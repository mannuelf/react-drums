import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html, body {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

body {
  overflow: hidden;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image:  url('https://res.cloudinary.com/mannuel/image/upload/v1633978128/images/desk2.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  color: #ccc;
}


.app {
  position: relative;
  width: 100%;
  max-width: 312px;
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  background-color: #181818;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23404040' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  border-bottom: 1px solid #222;
  border-left: 1px solid #333;
  border-top: 1px solid #555;
}

@media screen and (min-width: 767px) {
  .app {
    max-width: 690px;
  }
}

.app::before {
  display: block;
  content: "";
  position: absolute;
  z-index: 1;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  background: rgb(22, 22, 22);
  background: -moz-linear-gradient(
    353deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(76, 76, 76, 1) 100%
  );
  background: -webkit-linear-gradient(
    353deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(76, 76, 76, 1) 100%
  );
  background: linear-gradient(
    353deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(76, 76, 76, 1) 100%
  );
  border-top: 1px solid rgba(255,255,255,0.6);
  border-left: 1px solid rgba(255,255,255,0.2);
}

.app-header {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #555;
  z-index: 5;
}

.app-header div {
  flex-grow: 1;
}

.app-header-lcd {
  background-color: #222;
  border: 1px solid #464646;
  margin: -10px 0;
  padding: 0.4em 1em;
  border-radius: 3px;
  box-shadow: inset 0 0 5px #111111;
  border-bottom: 1px solid #666;
}

.app-header .column:nth-child(2) {
  text-align: left;
}

.app-header .column:nth-child(2) div {
  color: yellow;
}

.app-header h1 {
  color: #ccc;
  font-family: "Press Start 2P", Arial, Helvetica, sans-serif;
  line-height: 1.4;
  font-size: 8px;
  font-weight: normal;
  text-transform: uppercase;
}

.app-header h2 {
  color: yellow;
  font-size: 12px;
}

.logo {
  width: 140px;
  height: auto;
}

.app-panel__controls > div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  grid-gap: 16px;
  padding: 1.5em 0 0 0;
  height: auto;
  width: 100%;
  border-top: 1px solid #222;
  z-index: 5;
}

.app-panel {
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 5;
}

.app-panel__controls {
  flex-grow: 1;
  &:first-child {
    display: none;
    @media (min-width: 767px) {
      display: block;
    }
  }
}

.pad-button {
  position: relative;
  outline: none;
  color: #fff;
  transition: all 0.4s ease-in-out;
}

.pad-button::before {
  display: block;
  content: "";
  position: absolute;
  z-index: 2;
  opacity: 0.8;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 3px;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
}
.pad-button::after {
  display: block;
  content: "";
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
.pad-button:nth-child(1) {
  background-color: #4d94fc;
  order: 16;
}

.pad-button:nth-child(2) {
  background-color: #4d94fc;
  order: 15;
}
.pad-button:nth-child(3) {
  background-color: #ff423e;
  order: 14;
}
.pad-button:nth-child(4) {
  background-color: #ff423e;
  order: 13;
}
.pad-button:nth-child(5) {
  background-color: #4d94fc;
  order: 12;
}
.pad-button:nth-child(6) {
  background-color: #19eaa3;
  order: 11;
}
.pad-button:nth-child(7) {
  background-color: #ffdd2f;
  order: 10;
}
.pad-button:nth-child(8) {
  background-color: #ffdd2f;
  order: 9;
}
.pad-button:nth-child(9) {
  background-color: #fc9824;
  order: 8;
}
.pad-button:nth-child(10) {
  background-color: #fc9824;
  order: 7;
}
.pad-button:nth-child(11) {
  background-color: #fc9824;
  order: 6;
}
.pad-button:nth-child(12) {
  background-color: #fc9824;
  order: 5;
}
.pad-button:nth-child(13) {
  background-color: #19eaa3;
  order: 4;
}
.pad-button:nth-child(14) {
  background-color: #19eaa3;
  order: 3;
}
.pad-button:nth-child(15) {
  background-color: #19eaa3;
  order: 2;
}
.pad-button:nth-child(16) {
  background-color: #19eaa3;
  order: 1;
}

.pad-button-name {
  font-size: 12px;
}

.pad-button-char {
  font-size: 10px;
  position: absolute;
  top: 4px;
  right: 4px;
}

.pad-button-id {
  font-size: 10px;
  position: absolute;
  top: 4px;
  left: 4px;
}

footer {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 0.2rem 0.5em;
  width: 100vw;
  text-align: center;
  font-size: 12px;
}

a:link,
a:visited {
  color: #fff;
}`;

export default GlobalStyle;
