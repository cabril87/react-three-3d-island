import { useEffect, useState } from "react"



const keys = { KeyW: "forward", KeyS: "backward", KeyA: "left", KeyD: "right", Space: "jump" }
const moveFieldByKey = (key) => keys[key]


const usePlayerControls = () => {
  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false })
  useEffect(() => {
    const handleKeyDown = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
    const handleKeyUp = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    // const handleKeyRight = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    // const handleKeyLeft = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    // document.addEventListener("keyright", handleKeyRight)
    // document.addEventListener("keyleft", handleKeyLeft)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
      // document.removeEventListener("keyright", handleKeyRight)
      // document.removeEventListener("keyleft", handleKeyLeft)
    }
  }, [])
  return movement
}
export default usePlayerControls