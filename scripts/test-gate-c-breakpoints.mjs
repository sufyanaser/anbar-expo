import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 3009;
const CDP_PORT = 9224;
const APP_DIR = path.resolve("G:\\جائزة صناع الابداع\\anbar-expo");
const ARTIFACTS_DIR = path.join(APP_DIR, "test-artifacts", "gate-c");

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const BREAKPOINTS = [
  {
    name: "1920px (Ultra-wide)",
    width: 1920,
    height: 1080,
    file: "hero-1920px.png",
  },
  {
    name: "1440px (Desktop)",
    width: 1440,
    height: 900,
    file: "hero-1440px.png",
  },
  { name: "768px (Tablet)", width: 768, height: 1024, file: "hero-768px.png" },
  { name: "390px (Mobile)", width: 390, height: 844, file: "hero-390px.png" },
  {
    name: "320px (Compact Mobile)",
    width: 320,
    height: 568,
    file: "hero-320px.png",
  },
];

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 0;
    this.pending = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.pending.has(msg.id)) {
          const { resolve, reject } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) {
            reject(new Error(JSON.stringify(msg.error)));
          } else {
            resolve(msg.result);
          }
        }
      };
    });
  }

  send(method, params = {}) {
    const id = ++this.msgId;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // server not ready yet
    }
    await new Promise((r) => setTimeout(r, 400));
  }
  throw new Error(
    `Server at ${url} did not become ready within ${timeoutMs}ms`,
  );
}

async function run() {
  console.log("=== STARTING GATE C EMPIRICAL RESPONSIVE & LAYOUT TEST ===");

  // 1. Start Next.js production server
  console.log(`Starting Next.js server on port ${PORT}...`);
  const nextBin = path.join(
    APP_DIR,
    "node_modules",
    "next",
    "dist",
    "bin",
    "next",
  );
  const serverProc = spawn("node", [nextBin, "start", "-p", String(PORT)], {
    cwd: APP_DIR,
    stdio: "pipe",
  });

  serverProc.stdout.on("data", () => {
    // console.log(`[Next.js stdout]`);
  });
  serverProc.stderr.on("data", () => {
    // console.error(`[Next.js stderr]`);
  });

  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), "chrome-gate-c-"));
  let chromeProc = null;

  try {
    await waitForServer(`http://127.0.0.1:${PORT}/ACMA26`);
    console.log("Next.js server is online and serving /ACMA26!");

    // 2. Start Headless Chrome with CDP
    console.log(`Starting Headless Chrome on CDP port ${CDP_PORT}...`);
    chromeProc = spawn(chromePath, [
      "--headless=new",
      `--remote-debugging-port=${CDP_PORT}`,
      "--disable-gpu",
      "--no-sandbox",
      "--hide-scrollbars",
      `--user-data-dir=${tempProfile}`,
    ]);

    await waitForServer(`http://127.0.0.1:${CDP_PORT}/json/version`, 10000);
    console.log("Headless Chrome connected!");

    // Create a new target page
    const newPageRes = await fetch(
      `http://127.0.0.1:${CDP_PORT}/json/new?http://127.0.0.1:${PORT}/ACMA26`,
      {
        method: "PUT",
      },
    );
    const pageData = await newPageRes.json();
    console.log("Target page created:", pageData.webSocketDebuggerUrl);

    const client = new CDPClient(pageData.webSocketDebuggerUrl);
    await client.connect();

    await client.send("Page.enable");
    await client.send("DOM.enable");
    await client.send("Runtime.enable");

    const results = [];

    // Run tests for each breakpoint
    for (const bp of BREAKPOINTS) {
      console.log(
        `\n--- Testing Breakpoint: ${bp.name} (${bp.width}x${bp.height}) ---`,
      );

      await client.send("Emulation.setDeviceMetricsOverride", {
        width: bp.width,
        height: bp.height,
        deviceScaleFactor: 1,
        mobile: bp.width <= 768,
      });

      await client.send("Emulation.setEmulatedMedia", {
        media: "screen",
        features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
      });

      // Reload page at this viewport
      await client.send("Page.navigate", {
        url: `http://127.0.0.1:${PORT}/ACMA26`,
      });

      // Wait for network and GSAP animation to complete (entrance duration is ~1.4s)
      await new Promise((r) => setTimeout(r, 2200));

      // Query layout measurements
      const evalRes = await client.send("Runtime.evaluate", {
        expression: `(() => {
          const doc = document.documentElement;
          const body = document.body;
          const hero = document.querySelector('section[aria-labelledby="award-title"]');
          const trophy = document.querySelector('img[alt*="المجسّم الرسمي"]');
          const trophyWrapper = trophy ? trophy.parentElement : null;
          const calligraphy = document.querySelector('img[alt*="مخطوطة"]');
          const calligraphyWrapper = calligraphy ? calligraphy.parentElement : null;
          const primaryBtn = document.querySelector('[class*="heroPrimaryBtn"]');
          const secondaryBtn = document.querySelector('[class*="heroSecondaryBtn"]');
          const editionPill = document.querySelector('[class*="editionPill"]');
          const heroStage = document.querySelector('[class*="heroStage"]');

          const trophyRect = trophy ? trophy.getBoundingClientRect() : null;
          const trophyWrapperRect = trophyWrapper ? trophyWrapper.getBoundingClientRect() : null;
          const calligraphyRect = calligraphy ? calligraphy.getBoundingClientRect() : null;
          const calligraphyWrapperRect = calligraphyWrapper ? calligraphyWrapper.getBoundingClientRect() : null;

          return {
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            overflow: {
              docScrollWidth: doc.scrollWidth,
              docClientWidth: doc.clientWidth,
              docOverflow: doc.scrollWidth - doc.clientWidth,
              bodyScrollWidth: body.scrollWidth,
              bodyClientWidth: body.clientWidth,
              bodyOverflow: body.scrollWidth - body.clientWidth,
              heroScrollWidth: hero ? hero.scrollWidth : 0,
              heroClientWidth: hero ? hero.clientWidth : 0,
              heroOverflow: hero ? hero.scrollWidth - hero.clientWidth : 0,
            },
            trophy: {
              renderedWidth: trophyRect ? trophyRect.width : 0,
              renderedHeight: trophyRect ? trophyRect.height : 0,
              aspectRatio: trophyRect && trophyRect.height > 0 ? (trophyRect.width / trophyRect.height) : 0,
              targetRatio: 2 / 3,
              aspectRatioDiff: trophyRect && trophyRect.height > 0 ? Math.abs((trophyRect.width / trophyRect.height) - (2 / 3)) : 0,
              wrapperWidth: trophyWrapperRect ? trophyWrapperRect.width : 0,
              wrapperHeight: trophyWrapperRect ? trophyWrapperRect.height : 0,
              objectFit: trophy ? window.getComputedStyle(trophy).objectFit : null,
              naturalWidth: trophy ? trophy.naturalWidth : 0,
              naturalHeight: trophy ? trophy.naturalHeight : 0,
              isClipped: trophyRect && trophyWrapperRect ? (trophyRect.width > trophyWrapperRect.width + 1 || trophyRect.height > trophyWrapperRect.height + 1) : false,
              opacity: trophyWrapper ? window.getComputedStyle(trophyWrapper).opacity : null,
            },
            calligraphy: {
              renderedWidth: calligraphyRect ? calligraphyRect.width : 0,
              renderedHeight: calligraphyRect ? calligraphyRect.height : 0,
              aspectRatio: calligraphyRect && calligraphyRect.height > 0 ? (calligraphyRect.width / calligraphyRect.height) : 0,
              targetRatio: 8000 / 1949,
              aspectRatioDiff: calligraphyRect && calligraphyRect.height > 0 ? Math.abs((calligraphyRect.width / calligraphyRect.height) - (8000 / 1949)) : 0,
              wrapperWidth: calligraphyWrapperRect ? calligraphyWrapperRect.width : 0,
              wrapperHeight: calligraphyWrapperRect ? calligraphyWrapperRect.height : 0,
              opacity: calligraphyWrapper ? window.getComputedStyle(calligraphyWrapper).opacity : null,
            },
            ctas: {
              primaryBtn: primaryBtn ? {
                text: primaryBtn.innerText.replace(/\\s+/g, ' ').trim(),
                width: primaryBtn.getBoundingClientRect().width,
                height: primaryBtn.getBoundingClientRect().height,
              } : null,
              secondaryBtn: secondaryBtn ? {
                text: secondaryBtn.innerText.replace(/\\s+/g, ' ').trim(),
                width: secondaryBtn.getBoundingClientRect().width,
                height: secondaryBtn.getBoundingClientRect().height,
              } : null,
              editionPill: editionPill ? {
                text: editionPill.innerText.replace(/\\s+/g, ' ').trim(),
                width: editionPill.getBoundingClientRect().width,
                height: editionPill.getBoundingClientRect().height,
              } : null,
            }
          };
        })()`,
        returnByValue: true,
      });

      if (evalRes.exceptionDetails) {
        console.error("Runtime.evaluate exception:", evalRes.exceptionDetails);
      }
      const metrics = evalRes.result?.value;

      // Capture screenshot
      const shotRes = await client.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
      });
      const shotBuffer = Buffer.from(shotRes.data, "base64");
      const shotPath = path.join(ARTIFACTS_DIR, bp.file);
      fs.writeFileSync(shotPath, shotBuffer);
      console.log(`Saved screenshot to: ${shotPath}`);

      const overflowPass =
        metrics.overflow.docOverflow === 0 &&
        metrics.overflow.bodyOverflow === 0;
      const trophyRatioPass = metrics.trophy.aspectRatioDiff < 0.01;
      const calligraphyRatioPass = metrics.calligraphy.aspectRatioDiff < 0.01;

      console.log(
        `- Horizontal Overflow: doc=${metrics.overflow.docOverflow}px, body=${metrics.overflow.bodyOverflow}px -> ${overflowPass ? "PASS (0 overflow)" : "FAIL"}`,
      );
      console.log(
        `- Trophy Size: ${metrics.trophy.renderedWidth.toFixed(1)}x${metrics.trophy.renderedHeight.toFixed(1)} px (Ratio: ${metrics.trophy.aspectRatio.toFixed(4)}, target 0.6667) -> ${trophyRatioPass ? "PASS (exact 2:3 preserved)" : "FAIL"}`,
      );
      console.log(
        `- Calligraphy Size: ${metrics.calligraphy.renderedWidth.toFixed(1)}x${metrics.calligraphy.renderedHeight.toFixed(1)} px (Ratio: ${metrics.calligraphy.aspectRatio.toFixed(4)}, target 4.1047) -> ${calligraphyRatioPass ? "PASS (authentic ratio)" : "FAIL"}`,
      );
      console.log(
        `- CTAs: Primary min-height=${metrics.ctas.primaryBtn?.height}px, Secondary min-height=${metrics.ctas.secondaryBtn?.height}px`,
      );

      results.push({
        breakpoint: bp.name,
        width: bp.width,
        height: bp.height,
        metrics,
        overflowPass,
        trophyRatioPass,
        calligraphyRatioPass,
        screenshot: shotPath,
      });
    }

    // Test Reduced Motion
    console.log(
      `\n--- Testing Reduced-Motion Mode (prefers-reduced-motion: reduce) ---`,
    );
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await client.send("Emulation.setEmulatedMedia", {
      media: "screen",
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });

    await client.send("Page.navigate", {
      url: `http://127.0.0.1:${PORT}/ACMA26`,
    });
    // Check immediately (50ms) to ensure it renders at resting state with 0 delay/tween
    await new Promise((r) => setTimeout(r, 100));

    const reducedMotionEval = await client.send("Runtime.evaluate", {
      expression: `(() => {
        const trophy = document.querySelector('img[alt*="المجسّم الرسمي"]');
        const trophyWrapper = trophy ? trophy.parentElement : null;
        const calligraphy = document.querySelector('img[alt*="مخطوطة"]');
        const calligraphyWrapper = calligraphy ? calligraphy.parentElement : null;
        const hero = document.querySelector('section[aria-labelledby="award-title"]');

        const trophyOpacity = trophyWrapper ? window.getComputedStyle(trophyWrapper).opacity : null;
        const trophyTransform = trophyWrapper ? window.getComputedStyle(trophyWrapper).transform : null;
        const calligraphyOpacity = calligraphyWrapper ? window.getComputedStyle(calligraphyWrapper).opacity : null;

        return {
          trophyOpacity,
          trophyTransform,
          calligraphyOpacity,
          isRestingState: trophyOpacity === "1" && calligraphyOpacity === "1",
        };
      })()`,
      returnByValue: true,
    });

    const reducedShotRes = await client.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
    });
    const reducedShotPath = path.join(ARTIFACTS_DIR, "hero-reduced-motion.png");
    fs.writeFileSync(
      reducedShotPath,
      Buffer.from(reducedShotRes.data, "base64"),
    );
    console.log(`Saved reduced motion screenshot to: ${reducedShotPath}`);

    const reducedMotionVal = reducedMotionEval.result?.value || {};
    console.log("Reduced motion evaluation result:", reducedMotionVal);

    client.close();

    // Write full empirical JSON report
    const reportData = {
      timestamp: new Date().toISOString(),
      breakpoints: results,
      reducedMotion: {
        evaluation: reducedMotionVal,
        screenshot: reducedShotPath,
        pass: reducedMotionVal.isRestingState,
      },
      summary: {
        allOverflowZero: results.every((r) => r.overflowPass),
        allTrophyRatiosPreserved: results.every((r) => r.trophyRatioPass),
        allCalligraphyRatiosPreserved: results.every(
          (r) => r.calligraphyRatioPass,
        ),
        reducedMotionPassed: Boolean(reducedMotionVal.isRestingState),
      },
    };

    const reportJsonPath = path.join(ARTIFACTS_DIR, "empirical-results.json");
    fs.writeFileSync(reportJsonPath, JSON.stringify(reportData, null, 2));
    console.log(`\nWritten empirical report to ${reportJsonPath}`);
    console.log("\n=== ALL BREAKPOINTS VERIFICATION COMPLETED ===");
  } finally {
    if (chromeProc) {
      chromeProc.kill("SIGKILL");
    }
    if (serverProc) {
      serverProc.kill("SIGKILL");
    }
    try {
      fs.rmSync(tempProfile, { recursive: true, force: true });
    } catch {
      // ignore cleanup errors
    }
  }
}

run().catch((err) => {
  console.error("Test failed with error:", err);
  process.exit(1);
});
