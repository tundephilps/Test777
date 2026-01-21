"use client";

export class DeviceFingerprint {
  canvas: HTMLCanvasElement | null = null;
  audioContext: AudioContext | null = null;

  async generateFingerprint() {
    const canvas = await this.generateCanvasFingerprint();
    const webgl = await this.generateWebGLFingerprint();
    const audio = await this.generateAudioFingerprint();
    const system = await this.generateSystemFingerprint();

    return { canvas, webgl, audio, system };
  }

  async combineFingerprints(components: any) {
    try {
      const msgBuffer = new TextEncoder().encode(JSON.stringify(components));
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      return { hash: hashHex };
    } catch (e) {
      // Fallback for non-secure contexts or errors
      const str = JSON.stringify(components);
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return { hash: Math.abs(hash).toString(16) };
    }
  }

  async generateCanvasFingerprint() {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas context not available");
    }

    // Draw various shapes and text to create unique rendering patterns
    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillStyle = "#2563eb";
    ctx.fillText("Device Fingerprint Test 🔒", 2, 2);

    ctx.font = "11px Times";
    ctx.fillStyle = "#059669";
    ctx.fillText("Canvas rendering patterns vary by hardware", 2, 20);

    // Draw geometric shapes
    ctx.beginPath();
    ctx.arc(30, 60, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#dc2626";
    ctx.fill();

    return canvas.toDataURL();
  }

  async generateWebGLFingerprint() {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext);

      if (!gl) return "WebGL not supported";

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (!debugInfo) return "WebGL debug info not available";

      const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

      return JSON.stringify({ vendor, renderer });
    } catch (e) {
      return "WebGL Error";
    }
  }

  async generateAudioFingerprint() {
    try {
      // @ts-ignore - window.OfflineAudioContext is standard but might need types
      const AudioContext =
        window.OfflineAudioContext || (window as any).webkitOfflineAudioContext;
      if (!AudioContext) return "Audio API not supported";

      const context = new AudioContext(1, 44100, 44100);
      const oscillator = context.createOscillator();
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(10000, context.currentTime);

      const compressor = context.createDynamicsCompressor();

      oscillator.connect(compressor);
      compressor.connect(context.destination);

      oscillator.start(0);
      const buffer = await context.startRendering();

      // Calculate a hash/fingerprint from the audio buffer data
      const data = buffer.getChannelData(0);
      let hash = 0;
      for (let i = 0; i < data.length; i++) {
        hash += Math.abs(data[i]);
      }

      return `audio-${hash}`;
    } catch (e) {
      return "Audio Fingerprint Error";
    }
  }

  async generateSystemFingerprint() {
    if (typeof window === "undefined") return "Server Side";

    return {
      userAgent: window.navigator.userAgent,
      language: window.navigator.language,
      platform: window.navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      colorDepth: window.screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }
}
