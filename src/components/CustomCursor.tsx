'use client'

import { useEffect, useState } from 'react'

interface HoverTargetRect {
  left: number
  top: number
  width: number
  height: number
  borderRadius: string
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [hoverRect, setHoverRect] = useState<HoverTargetRect | null>(null)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      const interactiveEl = target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      ) as HTMLElement | null

      if (interactiveEl) {
        const rect = interactiveEl.getBoundingClientRect()
        const computedStyle = window.getComputedStyle(interactiveEl)
        setHoverRect({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          borderRadius: computedStyle.borderRadius && computedStyle.borderRadius !== '0px'
            ? computedStyle.borderRadius
            : '16px',
        })
      } else {
        setHoverRect(null)
      }
    }

    const onMouseDown = () => setIsClicked(true)
    const onMouseUp = () => setIsClicked(false)
    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible])

  // Smooth trailing animation loop when NOT hovering a button
  useEffect(() => {
    if (isTouch) return

    let animationFrameId: number

    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        }
      })
      animationFrameId = requestAnimationFrame(updateTrailing)
    }

    animationFrameId = requestAnimationFrame(updateTrailing)
    return () => cancelAnimationFrame(animationFrameId)
  }, [position, isTouch])

  if (isTouch || !isVisible) return null

  const isHovered = hoverRect !== null

  const targetW = isHovered && hoverRect ? hoverRect.width + 8 : 32
  const targetH = isHovered && hoverRect ? hoverRect.height + 8 : 32
  const targetX = isHovered && hoverRect ? hoverRect.left - 4 : trailingPos.x - 16
  const targetY = isHovered && hoverRect ? hoverRect.top - 4 : trailingPos.y - 16
  const targetRadius = isHovered && hoverRect ? hoverRect.borderRadius : '9999px'

  const ringStyle = {
    left: 0,
    top: 0,
    width: `${targetW}px`,
    height: `${targetH}px`,
    borderRadius: targetRadius,
    transform: `translate3d(${targetX}px, ${targetY}px, 0) scale(${
      isClicked ? (isHovered ? 0.97 : 0.8) : 1
    })`,
    background: 'transparent',
    borderColor: isHovered ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.35)',
    boxShadow: isHovered
      ? '0 0 16px rgba(255, 255, 255, 0.15), inset 0 0 12px rgba(255, 255, 255, 0.05)'
      : '0 0 10px rgba(255, 255, 255, 0.1)',
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Magnetic Cover Ring Frame anchored cleanly for centered expansion */}
      <div
        className="fixed border transition-all duration-300 ease-out"
        style={ringStyle}
      />

      {/* Vector Arrow Pointer */}
      <div
        className="fixed top-0 left-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
            isClicked ? 0.85 : isHovered ? 1.1 : 1
          })`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <path
            d="M3 3L10.5 20.5L14 13.5L21 10L3 3Z"
            fill="url(#cursor-gradient)"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="cursor-gradient" x1="3" y1="3" x2="21" y2="20.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.6" stopColor="#e2e8f0" />
              <stop offset="1" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
