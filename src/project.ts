import { makeProject } from "@motion-canvas/core";

import timeline_scroll from "./scenes/timeline_scroll?scene";
import timeline_view from "./scenes/timeline_view?scene";
import timeline_view_range from "./scenes/timeline_view_range?scene";
import timeline_scroll_range from "./scenes/timeline_scroll_range?scene";
import intro from "./scenes/intro?scene";
import outro from "./scenes/outro?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/css";

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [intro, timeline_view_range, outro],
  variables: {
    subTitle: "animation-timeline: view()",
    subTitle2: "animation-range: ['start' 'end']",
  },
});
