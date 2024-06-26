import { makeProject } from "@motion-canvas/core";

// import scroll_content from "./scenes/content?scene";
// import view_content from "./scenes/content_2?scene";
// import scroll_range from "./scenes/content_scroll_range?scene";
// import view_range from "./scenes/content_view_range?scene";
import timeline_scroll from "./scenes/timeline_scroll?scene";
import intro from "./scenes/intro?scene";
import outro from "./scenes/outro?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/css";

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [intro, timeline_scroll, outro],
  variables: { subTitle: "animation-timeline: scroll()" },
});
