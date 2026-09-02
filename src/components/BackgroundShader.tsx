import React, { useEffect, useRef } from 'react';

export const BackgroundShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let gl: WebGLRenderingContext | null = null;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const syncSize = () => {
      if (!canvas) return;
      const w = window.innerWidth || 1280;
      const h = window.innerHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        if (gl) {
          gl.viewport(0, 0, w, h);
        }
      }
    };

    window.addEventListener('resize', syncSize);
    syncSize();

    try {
      gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    } catch {
      gl = null;
    }

    if (!gl) {
      // Fallback 2D Canvas animation
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const render2D = (time: number) => {
          ctx.fillStyle = '#050505';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          const cols = Math.floor(canvas.width / 35);
          const rows = Math.floor(canvas.height / 35);
          
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              const x = i * 35 + 17;
              const y = j * 35 + 17;
              const dx = x - mouse.x;
              const dy = y - (canvas.height - mouse.y);
              const dist = Math.sqrt(dx * dx + dy * dy);
              const pulse = Math.sin(time * 0.002 + i * 0.2 + j * 0.2) * 1.2 + 1.5;
              const radius = Math.max(1, (100 - Math.min(dist, 100)) / 100 * 3 + pulse);
              
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = dist < 120 ? 'rgba(0, 219, 233, 0.45)' : 'rgba(219, 252, 255, 0.08)';
              ctx.fill();
            }
          }
          animationFrameId = requestAnimationFrame(render2D);
        };
        animationFrameId = requestAnimationFrame(render2D);
      }
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', syncSize);
        cancelAnimationFrame(animationFrameId);
      };
    }

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_mouse / u_resolution;
    
    // Create a subtle grid of dots
    vec2 gridUv = uv * 45.0;
    vec2 fUv = fract(gridUv);
    float dist = length(fUv - 0.5);
    
    // Pulse based on time and mouse proximity
    float mDist = length(uv - mouse);
    float pulse = 0.03 + 0.02 * sin(u_time * 0.6 + uv.x * 5.0 + uv.y * 5.0);
    pulse += 0.06 * exp(-mDist * 7.5);
    
    float mask = smoothstep(pulse, pulse - 0.015, dist);
    
    // Color: Deep charcoal background with subtle cyan dots
    vec3 bgColor = vec3(0.02, 0.02, 0.025);
    vec3 dotColor = vec3(0.0, 0.86, 0.95) * 0.45;
    
    // Add subtle ambient light
    float light = 0.04 * sin(u_time * 0.25 + uv.x * 2.0);
    bgColor += vec3(0.0, 0.12, 0.18) * light;
    
    vec3 finalColor = mix(bgColor, dotColor, mask);
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      return shader;
    }

    const vShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vShader || !fShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vShader);
    gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const render = (t: number) => {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', syncSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-45 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};
