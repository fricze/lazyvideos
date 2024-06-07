import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import future from "./scenes/future?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
// import { parser } from "@lezer/javascript";
import { parser } from "@lezer/css";
import iphone_keyboard from "../public/computer_keyboard_sound.wav";

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [
    // future,
    example,
  ],
  // audio: iphone_keyboard,
});
