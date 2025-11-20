"use client"

import { Suspense, lazy, useCallback, useRef } from "react"
import type { Application } from "@splinetool/runtime"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (app: Application) => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const splineAppRef = useRef<Application | null>(null)

  const handleLoad = useCallback(
    (app: Application) => {
      splineAppRef.current = app
      // Use window-level events so the scene reacts even when the cursor is outside its container.
      app.setGlobalEvents?.(true)
      onLoad?.(app)
    },
    [onLoad]
  )

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  )
}
