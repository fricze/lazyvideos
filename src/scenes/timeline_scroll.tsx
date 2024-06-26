import {
  makeScene2D,
  Node,
  Rect,
  Code,
  replace,
  insert,
  remove,
  Video,
  lines,
} from "@motion-canvas/2d";
import {
  DEFAULT,
  waitFor,
  all,
  createRef,
  waitUntil,
} from "@motion-canvas/core";

import scroll_video_001 from "/timeline_scroll.mp4";
import scroll_video_002 from "/timeline_scroll_002.mp4";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const videoRef1 = createRef<Video>();
  const videoRef2 = createRef<Video>();

  const videoNode = createRef<Node>();
  const video2Node = (
    <Video
      ref={videoRef2}
      src={scroll_video_002}
      // opacity={0.2}
      radius={5}
      width={450}
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
      <Node>
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
body {

}

 `;
  yield* all(code().filters.blur(0, 0.6), code().opacity(1, 0.6));

  yield* code().code.edit(0.6)`\
body {
${insert("    animation-name: background-change;")}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}
${insert(`

@keyframes {

}
`)}
 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}


@keyframes${insert(" background-change")} {

}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}


@keyframes background-change {${replace(
    `
  `,
    `
    from {
        background: #f7f7f6;
    }`,
  )}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}


@keyframes background-change {
    from {
        background: #f7f7f6;
    }${insert(`

    to {
        background-color: #f9c0b9;
    }`)}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;${insert(`
    animation-timeline: scroll();`)}
}


@keyframes background-change {
    from {
        background: #f7f7f6;
    }

    to {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();${insert(`
    animation-timing-function: linear;`)}
}


@keyframes background-change {
    from {
        background: #f7f7f6;
    }

    to {
        background-color: #f9c0b9;
    }
}

 `;

  yield* videoRef1().opacity(1, 0.6);

  yield videoRef1().play();
  yield* waitFor(4);
  yield videoRef1().pause();
  // yield* videoRef1().opacity(0.2, 0.6);

  // yield* code().selection(code().findAllRanges(/#734c61/gi), 0.6);

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
}


@keyframes background-change {
    ${replace("from", "0%")} {
        background: #f7f7f6;
    }

    ${replace("to", "100%")} {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
}


@keyframes background-change {
    0% {
        background: #f7f7f6;
    }

    100% {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
}


@keyframes background-change {
    0% {
        background: #f7f7f6;
    }

    ${replace("100%", "50%")} {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
}


@keyframes background-change {
    0% {
        background: #f7f7f6;
    }

    50% {
        background-color: #f9c0b9;
    }${insert(`

    100% {
        background: #f7f7f6;
    }`)}
}

 `;

  yield videoRef1().remove();
  yield videoNode().add(video2Node);
  // yield* videoRef2().opacity(1, 0.6);
  yield videoRef2().play();
  yield* waitFor(4);

  // yield* all(code().selection(DEFAULT, 0.6), videoRef2().opacity(1, 0.6));
  // yield videoRef2().pause();
  // yield* videoRef2().opacity(0.2, 0.6);

  // yield* code().selection(DEFAULT, 0.6);

  // yield videoRef2().remove();
  // yield videoNode().add(video3Node);

  // yield* videoRef3().opacity(1, 0.6);
  // yield videoRef3().play();
  // yield* waitFor(4);
  // yield videoRef3().pause();

  // yield* all(code().filters.blur(10, 0.6), videoRef3().filters.blur(10, 0.6));
});
