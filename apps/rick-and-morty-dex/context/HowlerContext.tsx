import React, { createContext, useState } from "react";
import { Howl } from 'howler';

const HowlerContext = createContext(null);

function HowlerProvider(props){

  const [howler, setHowler] = useState(new Howl({
    src: ['https://gorickyourself.com/sounds/portal-presence.mp3'],
    loop: true,
    volume: 0.8,
    html5: true
  }));

  return (
    <HowlerContext.Provider value={howler}>
      {props.children}
    </HowlerContext.Provider>
  )
}

export { HowlerContext, HowlerProvider };
