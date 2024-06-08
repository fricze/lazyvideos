import { makeProject } from "@motion-canvas/core";

// import scroll_content from "./scenes/content?scene";
import view_content from "./scenes/content_2?scene";
import view_range from "./scenes/content_view_range?scene";
import intro from "./scenes/intro?scene";
import outro from "./scenes/outro?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/css";
// import iphone_keyboard from "../public/computer_keyboard_sound.wav";

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [intro, view_range, outro],
  variables: { subTitle: "animation-timeline: view()" },
  // variables: { subTitle: "animation-timeline: scroll()" },
  // audio: iphone_keyboard,
});
