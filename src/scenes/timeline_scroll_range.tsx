import {
  makeScene2D,
  Node,
  Rect,
  Code,
  replace,
  insert,
  Video,
  lines,
} from "@motion-canvas/2d";
import { waitFor, all, createRef, DEFAULT } from "@motion-canvas/core";

import scroll_video_001 from "/timeline_scroll_003.mp4";
import scroll_video_002 from "/timeline_scroll_004.mp4";
import scroll_video_003 from "/timeline_scroll_005.mp4";

const headerStyle = `header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;
}`;

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const codeNode = createRef<Node>();
  const videoRef1 = createRef<Video>();
  const videoRef2 = createRef<Video>();
  const videoRef3 = createRef<Video>();

  const videoNode = createRef<Node>();
  const video2Node = (
    <Video
      ref={videoRef2}
      src={scroll_video_002}
      radius={5}
      width={450}
      opacity={0.5}
    />
  );

  const video3Node = (
    <Video
      ref={videoRef3}
      src={scroll_video_003}
      radius={5}
      width={450}
      opacity={0.5}
    />
  );

  view.fill("#242424").add(
    <Rect
      direction="row"
      width={1680}
      height={896}
      gap={0}
      layout
      alignItems="center"
      justifyContent="start"
    >
      <Node ref={codeNode}>
        <Code ref={code} fontSize={30} minWidth={1000} maxWidth={1000} />
      </Node>

      <Node ref={videoNode}>
        <Video
          ref={videoRef1}
          src={scroll_video_001}
          opacity={0}
          radius={5}
          width={450}
        />
      </Node>
    </Rect>,
  );

  yield code().opacity(0);
  yield code().filters.blur(10);
  yield* code().code.edit(0)`\
header {

}
 `;
  yield* all(code().filters.blur(0, 0.6), code().opacity(1, 0.6));

  yield* code().code.edit(0.6)`\
header {
${insert(`    padding-top: 2em;
    padding-bottom: 2em;`)}
}
`;

  yield* code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;${insert(`
    animation-name: header-shrink;`)}
}
`;

  yield* code().code.edit(0.6)`\
${headerStyle}${insert(`

@keyframes {

}`)}
 `;

  yield* code().code.edit(0.6)`\
${headerStyle}

@keyframes${insert(" header-shrink")} {

}
`;

  yield* code().code.edit(0.6)`\
${headerStyle}

@keyframes header-shrink {${replace(
    `
  `,
    `
    to {
    }`,
  )}
}
`;

  yield* code().code.edit(0.6)`\
${headerStyle}

@keyframes header-shrink {
    to {${insert(`
        padding-top: 0.3em;
        padding-bottom: 0.3em;`)}
    }
}
`;

  yield* code().code.edit(0.6)`\
${headerStyle}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
}
`;

  // WAIT
  yield* waitFor(1);

  yield* code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;${insert(`
    animation-timeline: scroll();
    animation-timing-function: linear;`)}
}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
}
`;

  yield* code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;
    animation-timeline: scroll();
    animation-timing-function: linear;
}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
}
`;

  // WAIT
  // yield* waitFor(1);

  yield* videoRef1().opacity(1, 0.6);

  yield videoRef1().play();
  yield* waitFor(4);
  yield videoRef1().pause();
  yield* videoRef1().opacity(0.5, 0.6);

  yield* code().selection(lines(0, 7), 0.6);

  yield* all(
    code().selection(lines(0, 8), 0.6),
    code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;
    animation-timeline: scroll();
    animation-timing-function: linear;${insert(`
    animation-fill-mode: both;
    animation-range-end: 30%;`)}
}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
}
`,
  );

  yield* code().selection(DEFAULT, 0.6);

  yield videoRef1().remove();
  yield videoNode().add(video2Node);
  // yield* waitFor(1);
  yield* videoRef2().opacity(1, 0.6);
  yield videoRef2().play();
  yield* waitFor(5);
  yield* videoRef2().opacity(0.5, 0.6);

  yield* codeNode().y(-70, 0.6);

  yield* code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-range-end: 30%;
}${insert(`

@property --font-size {
    syntax: "<length>";
    inherits: true;
    initial-value: 94px;
}`)}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
}
`;

  yield* code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-range-end: 30%;
}

@property --font-size {
    syntax: "<length>";
    inherits: true;
    initial-value: 94px;
}${insert(`

header h1 {
    font-size: var(--font-size);
}`)}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
}
`;

  // wait

  yield* waitFor(1);
  yield* code().selection(lines(20, 26), 0.6);

  yield* code().code.edit(0.6)`\
header {
    padding-top: 2em;
    padding-bottom: 2em;
    animation-name: header-shrink;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-range-end: 30%;
}

@property --font-size {
    syntax: "<length>";
    inherits: true;
    initial-value: 94px;
}

header h1 {
    font-size: var(--font-size);
}

@keyframes header-shrink {
    to {
        padding-top: 0.3em;
        padding-bottom: 0.3em;${insert(`
        --font-size: 40px;`)}
    }
}
`;

  yield* code().selection(DEFAULT, 0.6);

  yield videoRef2().remove();
  yield videoNode().add(video3Node);
  yield* videoRef3().opacity(1, 0.6);
  yield videoRef3().play();
  yield* waitFor(3);

  yield* codeNode().y(10, 0.6);
  yield* waitFor(1);

  yield* all(
    code().filters.blur(10, 0.6),
    code().opacity(0, 0.6),
    videoRef3().filters.blur(10, 0.6),
    videoRef3().opacity(0, 0.6),
  );
});
