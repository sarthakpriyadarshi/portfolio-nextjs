'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface MeteorsProps {
   number?: number
}
export function Meteors({ number = 20 }: MeteorsProps) {
   const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
       [],
   )

   useEffect(() => {
      const styles = [...new Array(number)].map(() => ({
         top: `${Math.floor(Math.random() * -50)}px`,  // Start above the container
         left: `${Math.floor(Math.random() * window.innerWidth)}px`, // Random horizontal position
         animationDelay: `${Math.random() * 1 + 0.2}s`,
         animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`, // Random duration for each meteor
      }))
      setMeteorStyles(styles)
   }, [number])

   return (
       <>
          {[...meteorStyles].map((style, idx) => (
              // Meteor Head
              <span
                  key={idx}
                  className={clsx(
                      'pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
                  )}
                  style={style}
              >
               {/* Meteor Tail */}
                 <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
            </span>
          ))}
       </>
   )
}

export default Meteors
