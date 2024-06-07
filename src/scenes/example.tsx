import {
  makeScene2D,
  Circle,
  Node,
  Rect,
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
  DEFAULT,
  waitFor,
  createSignal,
  all,
  SmoothSpring,
  createRef,
  spring,
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

  const endingTextRef = createRef<Layout>();
  const introRef = createRef<Layout>();

  const frame = createSignal(0);
  const introFrame = createSignal(0);
  const frameCaret = createSignal(0);

  const color = "#ddd";
  const fontSize = 114;

  const video2Node = (
    <Video ref={videoRef2} src={scrollVideoViolet} opacity={0.2} radius={5} />
  );
  const video3Node = (
    <Video ref={videoRef3} src={scrollVideoBW} opacity={0.2} radius={5} />
  );

  view
    .fill("#242424")
    .add(
      <Rect
        // fill={"blue"}
        direction={"row"}
        width={1185}
        height={896}
        gap={0}
        layout
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Node>
          <Code
            ref={code}
            // fontSize={fontSize / 1.62 / 1.62 / 1.62}
            fontSize={30}
            minWidth={660}
            maxWidth={660}
          />
        </Node>

        <Node ref={videoNode}>
          <Video ref={videoRef1} src={scrollVideo} opacity={0} radius={5} />
        </Node>
      </Rect>,
    )
    .add(
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
            "animation-timeline: scroll()".slice(
              0,
              introFrame() > 10 ? introFrame() - 10 : 0,
            )
          }
          fill={color}
          fontSize={fontSize / 1.62}
        />
      </Layout>,
    )
    .add(
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

  yield* waitFor(0.3);

  const seqIntro = Array(40).fill(0);
  for (const _ of seqIntro) {
    yield introFrame(introFrame() + 1);
    yield* waitFor(1 / 60);
  }

  yield* waitFor(0.3);

  yield* all(introRef().filters.blur(10, 0.6), introRef().opacity(0, 0.6));
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
    }
`)}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
${insert(`
    50% {
        background-color: #734c61;
    }
`)}
}

 `;

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
}


@keyframes background-change {
    0% {
        background-color: #000;
    }

    50% {
        background-color: #734c61;
    }
${insert(`
    100% {
        background-color: #fff;
    }`)}
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

    50% {
        background-color: #734c61;
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

    50% {
        background-color: #734c61;
    }

    100% {
        background-color: #fff;
    }
}

 `;

  yield* waitFor(0.6);

  yield* waitUntil("speaking-stop-1"); // wait for an event called "event"
  // yield* all(code().position.x(-700, 0.6), code().position.y(50, 0.6));

  // yield* videoRef1().position.x(340, 0.6);
  yield* videoRef1().opacity(1, 0.6);
  yield videoRef1().play();
  yield* waitFor(4);
  yield videoRef1().pause();
  yield* videoRef1().opacity(0.2, 0.6);

  yield* code().selection(code().findAllRanges(/#734c61/gi), 0.6);

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
}


@keyframes background-change {
    0% {
        background-color: #000;
    }

    50% {
        background-color: ${replace("#734c61", "#ee82ee")};
    }

    100% {
        background-color: #fff;
    }
}

 `;

  yield videoRef1().remove();
  yield videoNode().add(video2Node);

  yield* all(code().selection(DEFAULT, 0.6), videoRef2().opacity(1, 0.6));
  yield videoRef2().play();
  yield* waitFor(4);
  yield videoRef2().pause();
  yield* videoRef2().opacity(0.2, 0.6);

  yield* code().selection(lines(7, 19), 0.6);

  yield* code().code.edit(0.6)`\
body {
    animation-name: background-change;
    animation-timeline: scroll();
    animation-timing-function: linear;
}


@keyframes background-change {
    0% {
        background-color: #000;
    }
${remove(`
    50% {
        background-color: #ee82ee;
    }
  `)}
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
}


@keyframes background-change {
    ${replace("0%", "from")} {
        background-color: #000;
    }

    ${replace("100%", "to")} {
        background-color: #fff;
    }
}

 `;

  yield* code().selection(DEFAULT, 0.6);

  yield videoRef2().remove();
  yield videoNode().add(video3Node);

  yield* videoRef3().opacity(1, 0.6);
  yield videoRef3().play();
  yield* waitFor(4);
  yield videoRef3().pause();

  yield* all(code().filters.blur(10, 0.6), videoRef3().filters.blur(10, 0.6));

  yield spring(SmoothSpring, 1500, -5, 0.2, (value) => {
    endingTextRef().position.x(value);
  });

  // const seq_ = Array(6).fill(0);
  // for (const _ of seq_) {
  //   yield frameCaret(frameCaret() + 1);
  //   yield* waitFor(1 / 60);
  // }

  const seq = Array(60).fill(0);
  for (const _ of seq) {
    yield frameCaret(frameCaret() + 1);
    yield frame(frame() + 1);
    yield* waitFor(1 / 60);
  }

  yield* waitFor(1);
});
