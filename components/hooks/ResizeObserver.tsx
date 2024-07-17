import { useRef, useState } from 'react'

import { useDebounceCallback, useResizeObserver } from 'usehooks-ts'

type Size = {
  width?: number
  height?: number
}

export default function ResizeObserver() {
  const ref = useRef<HTMLDivElement>(null)
  const { width = 0, height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  })

  return (
    <div ref={ref} className='border border-[palevioletred] w-full h-full grid place-content-center'>
      {width} x {height}
    </div>
  )
}

export function WithDebounce() {
  const ref = useRef<HTMLDivElement>(null)
  const [{ width, height }, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  const onResize = useDebounceCallback(setSize, 200)

  useResizeObserver({
    ref,
    onResize,
  })

  return (
			<div
				ref={ref}
				className="border border-[palevioletred] w-full resize overflow-auto min-w-1 min-h-1 h-full  grid place-content-center"
			>
				debounced: {width} x {height}
			</div>
		);
}