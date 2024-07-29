import { makeScene2D, Layout, Txt, Code } from "@motion-canvas/2d";
import {
  waitFor,
  createSignal,
  all,
  createRef,
  useScene,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const introRef = createRef<Layout>();

  const introFrame = createSignal(0);

  const subTitle = useScene().variables.get("subTitle", "");
  const subTitle2 = useScene().variables.get("subTitle2", "");

  const color = "#ddd";
  const fontSize = 114;

  const length1 = subTitle().length;
  const length2 = subTitle2().length;

  const mainLength = 10;

  view.fill("#242424").add(
    <Layout
      direction={"column"}
      width={1185}
      height={896}
      justifyContent={"center"}
      gap={4}
      layout
      x={0}
      y={0}
      ref={introRef}
    >
      <Txt
        text={() => "CSS animations".slice(0, introFrame())}
        fill={color}
        fontSize={fontSize}
      />
      <Code
        code={() =>
          subTitle().slice(
            0,
            introFrame() > mainLength ? introFrame() - mainLength : 0,
          )
        }
        fill={color}
        fontSize={fontSize / 1.62}
      />
      <Code
        code={() =>
          subTitle2().slice(
            0,
            introFrame() > mainLength + length1
              ? introFrame() - (mainLength + length1)
              : 0,
          )
        }
        fill={color}
        fontSize={fontSize / 1.62}
      />
    </Layout>,
  );

  yield* waitFor(0.3);

  const length = length1 + length2 + mainLength;
  const seqIntro = Array(length).fill(0);
  for (const _ of seqIntro) {
    yield introFrame(introFrame() + 1);
    yield* waitFor(1 / 60);
  }

  yield* waitFor(0.3);

  yield* all(introRef().filters.blur(10, 0.6), introRef().opacity(0, 0.6));
});
