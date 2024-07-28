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

import scroll_video_001 from "/timeline_view_001.mp4";
import scroll_video_002 from "/timeline_view_002.mp4";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const videoRef1 = createRef<Video>();
  const videoRef2 = createRef<Video>();

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
.box {

}

 `;
  yield* all(code().filters.blur(0, 0.6), code().opacity(1, 0.6));

  yield* code().code.edit(0.6)`\
.box {
${insert("    animation-name: appear;")}
}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
}
${insert(`

@keyframes {

}
`)}
 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
}


@keyframes${insert(" appear")} {

}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
}


@keyframes appear {${replace(
    `
  `,
    `
    from {
        background-color: #29b9fe;
    }`,
  )}
}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
}


@keyframes appear {
    from {
        background-color: #29b9fe;
    }${insert(`

    to {
        background-color: #f9c0b9;
    }`)}
}

 `;

  // WAIT
  yield* waitFor(1);

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;${insert(`
    animation-timeline: view();`)}
}


@keyframes appear {
    from {
        background-color: #29b9fe;
    }

    to {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
    animation-timeline: view();${insert(`
    animation-timing-function: linear;`)}
}


@keyframes appear {
    from {
        background-color: #29b9fe;
    }

    to {
        background-color: #f9c0b9;
    }
}

 `;

  // WAIT
  yield* waitFor(1);

  yield* videoRef1().opacity(1, 0.6);

  yield videoRef1().play();
  yield* waitFor(4);
  // opacity

  yield videoRef1().pause();
  yield videoRef1().opacity(0.5, 0.6);

  yield* code().selection(lines(7, 24), 0.6);

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
    animation-timeline: view();
    animation-timing-function: linear;
}


@keyframes appear {
    ${replace("from", "0%")} {
        background-color: #29b9fe;
    }

    ${replace("to", "100%")} {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
    animation-timeline: view();
    animation-timing-function: linear;
}


@keyframes appear {
    0% {
        background-color: #29b9fe;${insert(`
        filter: blur(20px);
        scale: 0.5;`)}
    }

    100% {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
    animation-timeline: view();
    animation-timing-function: linear;
}


@keyframes appear {
    0% {
        background-color: #29b9fe;
        filter: blur(20px);
        scale: 0.5;
    }${insert(`

    50% {
    }`)}

    100% {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().code.edit(0.6)`\
.box {
    animation-name: appear;
    animation-timeline: view();
    animation-timing-function: linear;
}


@keyframes appear {
    0% {
        background-color: #29b9fe;
        filter: blur(20px);
        scale: 0.5;
    }

    50% {${insert(`
        filter: blur(0px);
        scale: 1;`)}
    }

    100% {
        background-color: #f9c0b9;
    }
}

 `;

  yield* code().selection(DEFAULT, 0.6);

  yield videoRef1().remove();
  yield videoNode().add(video2Node);

  yield* waitFor(1);
  yield videoRef2().opacity(1, 0.6);
  yield videoRef2().play();
  yield* waitFor(3);

  yield* all(
    code().filters.blur(10, 0.6),
    code().opacity(0, 0.6),
    videoRef2().filters.blur(10, 0.6),
    videoRef2().opacity(0, 0.6),
  );
});
