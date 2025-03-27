"use client"

export default function Button({ children = "-", onClick, selected = false }) {
  return (
    <button
      onClick={onClick}
      className={`${selected ? "bg-purple-500" : "bg-purple-300"} p-8 rounded-xl hover:bg-purple-400 w-full`}
    >
      {children}
    </button>
  )
}
