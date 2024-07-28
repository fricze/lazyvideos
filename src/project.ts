import { makeProject } from "@motion-canvas/core";

import timeline_scroll from "./scenes/timeline_scroll?scene";
import timeline_view from "./scenes/timeline_view?scene";
import timeline_scroll_range from "./scenes/timeline_scroll_range?scene";
import intro from "./scenes/intro?scene";
import outro from "./scenes/outro?scene";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/css";

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [intro, timeline_scroll_range, outro],
  variables: {
    subTitle: "animation-range-end: ⟨percentage⟩",
  },
});
