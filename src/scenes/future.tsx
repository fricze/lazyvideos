import {
  makeScene2D,
  Circle,
  Layout,
  Txt,
  Code,
  replace,
  insert,
  remove,
  Video,
  lines,
} from "@motion-canvas/2d";
import {
  sequence,
  DEFAULT,
  createRef,
  waitFor,
  createSignal,
  all,
  PlopSpring,
  SmoothSpring,
  createRef,
  spring,
  BeatSpring,
  JumpSpring,
  BounceSpring,
  SwingSpring,
  StrikeSpring,
} from "@motion-canvas/core";

import scrollVideo from "../../public/scroll2.mp4";
import scrollVideoViolet from "../../public/scroll_violet.mp4";
import scrollVideoBW from "../../public/scroll_b_w.mp4";

import "./fonts.css";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const videoRef1 = createRef<Video>();
  const videoRef2 = createRef<Video>();
  const videoRef3 = createRef<Video>();
  const textRef = createRef<Layout>();
  const introRef = createRef<Layout>();

  const introFrame = createSignal(0);

  const color = "#fff";
  const fontSize = 120;

  view.fill("#9718b3").add(
    <Layout
      direction={"column"}
      width={960}
      gap={4}
      layout
      x={0}
      y={0}
      ref={introRef}
    >
      <Txt
        text={() => "Future 2024".slice(0, introFrame())}
        fill={color}
        fontSize={fontSize}
        fontFamily={"REM"}
        minHeight={fontSize}
      />
      <Txt
        text={() =>
          "polyglot IT conference".slice(
            0,
            introFrame() > 10 ? introFrame() - 10 : 0,
          )
        }
        fill={color}
        fontFamily={"REM"}
        fontSize={fontSize - 32}
        minHeight={fontSize * 2}
      />
    </Layout>,
  );

  const seqIntro = Array(40).fill(0);
  for (const _ of seqIntro) {
    yield introFrame(introFrame() + 1);
    yield* waitFor(1 / 60);
  }

  // yield* introRef().filters.blur(10, 1);

  yield spring(StrikeSpring, 0, 800, 0.6, (value) => {
    introRef().position.y(value);
  });

  yield* waitFor(2);
  // yield* code().filters.blur(10, 0);
});
