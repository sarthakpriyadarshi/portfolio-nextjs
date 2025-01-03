'use client'

import type { CSSProperties, ReactElement, ReactNode } from 'react'
import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { ny } from '@/lib/utils'

interface MousePosition {
   x: number
   y: number
}

function useMousePosition(): MousePosition {
   const [mousePosition, setMousePosition] = useState<MousePosition>({
      x: 0,
      y: 0,
   })

   useEffect(() => {
      const handleMouseMove = (event: globalThis.MouseEvent) => {
         setMousePosition({ x: event.clientX, y: event.clientY })
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
         window.removeEventListener('mousemove', handleMouseMove)
      }
   }, [])

   return mousePosition
}

interface MagicContainerProps {
   children?: ReactNode
   className?: string
}

function MagicContainer({ children, className }: MagicContainerProps) {
   const containerRef = useRef<HTMLDivElement>(null)
   const mousePosition = useMousePosition()
   const mouse = useRef<{ x: number, y: number }>({ x: 0, y: 0 })
   const containerSize = useRef<{ w: number, h: number }>({ w: 0, h: 0 })
   const [boxes, setBoxes] = useState<Array<HTMLElement>>([])

   useLayoutEffect(() => {
      init()
      if (containerRef.current) {
         setBoxes(Array.from(containerRef.current.children).map(el => el as HTMLElement))
      }
      window.addEventListener('resize', init)

      return () => {
         window.removeEventListener('resize', init)
      }
   }, [])

   useEffect(() => {
      onMouseMove()
   }, [mousePosition]) // Adding `mousePosition` as a dependency

   const init = () => {
      if (containerRef.current) {
         containerSize.current.w = containerRef.current.offsetWidth
         containerSize.current.h = containerRef.current.offsetHeight
      }
   }

   const onMouseMove = () => {
      if (containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect()
         const { w, h } = containerSize.current
         const x = mousePosition.x - rect.left
         const y = mousePosition.y - rect.top
         const inside = x < w && x > 0 && y < h && y > 0

         mouse.current.x = x
         mouse.current.y = y
         boxes.forEach((box) => {
            const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
            const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y
            box.style.setProperty('--mouse-x', `${boxX}px`)
            box.style.setProperty('--mouse-y', `${boxY}px`)

            if (inside) box.style.setProperty('--opacity', `1`)
            else box.style.setProperty('--opacity', `0`)
         })
      }
   }

   return (
       <div className={ny('size-full', className)} ref={containerRef}>
          {children}
       </div>
   )
}

interface MagicCardProps {
   as?: ReactElement
   className?: string
   children?: ReactNode
   size?: number
   spotlight?: boolean
   spotlightColor?: string
   isolated?: boolean
   background?: string
   borderColor?: string
   [key: string]: string | number | ReactNode | undefined
}

const MagicCard: React.FC<MagicCardProps> = ({
                                                className,
                                                children,
                                                size = 600,
                                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                spotlight = true,
                                                borderColor = 'hsl(0 0% 98%)',
                                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                isolated = true,
                                                spotlightColor = 'rgba(255,255,255,0.03)',
                                                ...props
                                             }) => {
   return (
       <div
           style={{
              '--mask-size': `${size}px`,
              '--border-color': borderColor,
              '--spotlight-color': spotlightColor,
           } as CSSProperties}
           className={ny(
               'relative z-0 size-full rounded-2xl p-10',
               'bg-gray-300 dark:bg-gray-700',
               'bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),var(--border-color),transparent_100%)]',
               className
           )}
           {...props}
       >
          {children}
          {/* Background */}
          <div className="absolute inset-px -z-20 rounded-2xl bg-white dark:bg-black/95" />
       </div>
   )
}

export { MagicCard, MagicContainer }
