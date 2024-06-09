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

import scrollVideo from "../../public/scroll2.mp4";
import scrollVideoViolet from "../../public/scroll_2.mp4";
import scrollVideoBW from "../../public/scroll_b_w2.mp4";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();
  const videoRef1 = createRef<Video>();
  const videoRef2 = createRef<Video>();
  const videoRef3 = createRef<Video>();

  const videoNode = createRef<Node>();

  const video2Node = (
    <Video ref={videoRef2} src={scrollVideoViolet} opacity={0.2} radius={5} />
  );
  const video3Node = (
    <Video ref={videoRef3} src={scrollVideoBW} opacity={0.2} radius={5} />
  );

  view.fill("#242424").add(
    <Rect
      direction={"row"}
      width={1185}
      height={896}
      gap={0}
      layout
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Node>
        <Code ref={code} fontSize={30} minWidth={660} maxWidth={660} />
      </Node>

      <Node ref={videoNode}>
        <Video ref={videoRef1} src={scrollVideo} opacity={0} radius={5} />
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


@keyframes background-change {${insert(`
    0% {
        background-color: #000;
    }`)}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}


@keyframes background-change {
    0% {
        background-color: #000;
    }${insert(`
    100% {
        background-color: #fff;
    }
`)}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;${insert(`
    animation-timeline: scroll();`)}
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
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
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

 `;

  yield* waitFor(0.6);

  yield* videoRef1().opacity(1, 0.6);
  yield videoRef1().play();
  yield* waitFor(4);

  yield videoRef1().pause();
  yield* videoRef1().opacity(0.2, 0.6);

  yield videoRef1().remove();
  yield videoNode().add(video2Node);

  yield* all(code().selection(DEFAULT, 0.6), videoRef2().opacity(1, 0.6));
  yield videoRef2().play();
  yield* waitFor(4);
  yield videoRef2().pause();
  yield* videoRef2().opacity(0.2, 0.6);

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;${insert(`
    animation-range-start: normal;
    animation-range-end: normal;`)}
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

 `;

  yield* code().selection(lines(4, 5), 0.6);

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-range-start: ${replace("normal", "0%")};
    animation-range-end: ${replace("normal", "100%")};
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

`;

  yield* code().selection(DEFAULT, 0.6);

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-range-start: 0%;
    animation-range-end: ${replace("100%", "50%")};
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

`;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-range-start: ${replace("0%", "50%")};
    animation-range-end: ${replace("50%", "100%")};
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

`;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-range-start: 50%;
    animation-range-end: 100%;${insert(`
    animation-fill-mode: both;`)}
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

`;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
    animation-range-start: ${replace("50%", "30%")};
    animation-range-end: ${replace("100%", "70%")};
    animation-fill-mode: both;
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
    100% {
        background-color: #fff;
    }
}

`;

  yield videoRef2().remove();
  yield videoNode().add(video3Node);

  yield* videoRef3().opacity(1, 0.6);
  yield videoRef3().play();
  yield* waitFor(4);
  yield videoRef3().pause();

  yield* all(code().filters.blur(10, 0.6), videoRef3().filters.blur(10, 0.6));
});
