import { makeScene2D, Layout, Txt } from "@motion-canvas/2d";
import {
  waitFor,
  createSignal,
  SmoothSpring,
  createRef,
  spring,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const endingTextRef = createRef<Layout>();

  const frame = createSignal(0);
  const frameCaret = createSignal(0);

  const color = "#ddd";
  const fontSize = 114;

  view.fill("#242424").add(
    <Layout
      direction={"row"}
      width={960}
      gap={4}
      layout
      x={1500}
      y={0}
      ref={endingTextRef}
    >
      <Txt
        text={() => "fricze.com / demos".slice(0, Math.floor(frame() / 1))}
        fill={color}
        fontSize={fontSize}
      />
      <Txt
        text={() => "|"}
        fill="#00b2ff"
        fontSize={fontSize}
        opacity={() => (Math.floor(frame() / 4) % 2 === 1 ? 0 : 1)}
      />
    </Layout>,
  );

  const width = endingTextRef().width;
  console.log("width");
  console.log(width());
  yield spring(SmoothSpring, 1500, -18, 0.2, (value) => {
    endingTextRef().position.x(value);
  });

  const seq = Array(60).fill(0);
  for (const _ of seq) {
    yield frameCaret(frameCaret() + 1);
    yield frame(frame() + 1);
    yield* waitFor(1 / 60);
  }

  yield* waitFor(1);
});
