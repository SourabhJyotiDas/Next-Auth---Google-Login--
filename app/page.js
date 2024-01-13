

import Menu from "./components/Menu"
import Homepage from "./components/Homepage"
import SpecialOffer from "./components/SpecialOffer.jsx"
import Login from "./login/page"
import Profile from "./profile/page"

export default async function Home() {

  return (
    <>
      {/* <Homepage />
      <Menu />
      <SpecialOffer /> */}
      <Login/>
      <Profile/>
    </>
  )
}
