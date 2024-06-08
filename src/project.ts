import { makeProject } from "@motion-canvas/core";

import content from "./scenes/content?scene";
import intro from "./scenes/intro?scene";
import outro from "./scenes/outro?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/css";
// import iphone_keyboard from "../public/computer_keyboard_sound.wav";

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [intro, content, outro],
  // audio: iphone_keyboard,
});
