import { useEffect, useRef } from 'react';
import { cn } from './lib/utils';

export function GlowArea({ className, size = 300, children, ...props }) {
  const el = useRef(null);
  const frameId = useRef(null);
  const latestCoords = useRef(null);

  function updateGlow() {
    if (latestCoords.current && el.current) {
      el.current.style.setProperty('--glow-x', `${latestCoords.current.x}px`);
      el.current.style.setProperty('--glow-y', `${latestCoords.current.y}px`);

      frameId.current = null;
    }
  }

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    latestCoords.current = {
      x: e.clientX - rect.top,
      y: e.clientY - rect.left,
    };

    if (!frameId.current) frameId.current = requestAnimationFrame(updateGlow);
  }

  function handleMouseLeave(e) {
    e.currentTarget.style.removeProperty('--glow-x');
    e.currentTarget.style.removeProperty('--glow-y');
  }

  return (
    <div
      ref={el}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--glow-size': `${size}px` }}
      className={cn('relative', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Glow({ color, className, children, ...props }) {
  const el = useRef(null);

  useEffect(function () {
    el.current?.style.setProperty('--glow-top', `${el.current?.offsetTop}px`);
    el.current?.style.setProperty('--glow-left', `${el.current?.offsetLeft}px`);
  }, []);

  return (
    <div ref={el} className={cn(className, 'relative')} {...props}>
      <div
        style={{
          backgroundImage: `
      radial-gradient(
        var(--glow-size) var(--glow-size) 
        at calc(var(--glow-x, -99999px) - var(--glow-left, 0px)) 
        calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), 
        ${color} 0%, 
        transparent 100%
      )
    `,
        }}
        className={cn(
          className,
          'absolute pointer-events-none inset-0 dark:mix-blend-lighten mix-blend-multiply after:content-[""] after:absolute after:bg-background/80 after:inset-0.25 after:rounded-inherit'
        )}
      ></div>
      {children}
    </div>
  );
}
