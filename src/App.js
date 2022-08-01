import './App.css';
import Chat from './components/Chat'
import { useState } from "react"
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

function App() {

    const [name, setName] = useState('')

    const TargetName = (e) => {
        setName(e.target.alt);
    }

  return (
      <div className="w-full h-screen grid grid-cols-3 overflow-hidden">
        <div className="bg-gray-800 h-full sm:w-40 mr-5 sm:mr-0">
          <div className="flex justify-center pt-8 w-full">
              <h1 className="sm:text-xl text-white">Contacts</h1>
          </div>
          <div className="h-full w-full grid grid-cols-1 pt-12 overflow-hidden">
            <div className="flex justify-center">
                <Badge badgeContent="" overlap="circular" color="success">
                    <Avatar alt="Madis" onClick={TargetName} src={require("./assets/profPic1.jpg")} sx={{
                        height: {
                            xs: 75,
                            sm: 125,
                        },
                        width: {
                            xs: 75,
                            sm: 125,
                        }
                    }}/>
                </Badge>
            </div>
            <div className="flex justify-center -mt-24">
                <Badge badgeContent="" overlap="circular" color="success">
                    <Avatar alt="Kalle" onClick={TargetName} src={require("./assets/profPic3.jpg")} sx={{
                        height: {
                            xs: 75,
                            sm: 125,
                        },
                        width: {
                            xs: 75,
                            sm: 125,
                        }
                    }}/>
                </Badge>
            </div>
            <div className="flex justify-center -mt-24">
                <Badge badgeContent="" overlap="circular" color="success">
                    <Avatar alt="Laura" onClick={TargetName} src={require("./assets/profPic2.jpg")} sx={{
                        height: {
                            xs: 75,
                            sm: 125,
                        },
                        width: {
                            xs: 75,
                            sm: 125,
                        }
                    }}/>
                </Badge>
            </div>
            <div className="flex justify-center -mt-24">
              <Badge badgeContent="" overlap="circular" color="warning">
                  <Avatar alt="Kadri" src={require("./assets/profPic4.jpg")} sx={{
                      height: {
                          xs: 75,
                          sm: 125,
                      },
                      width: {
                          xs: 75,
                          sm: 125,
                      }
                  }}/>
              </Badge>
            </div>
          </div>
        </div>
        <div className="col-span-2">
            {(() => {
                switch(name) {
                    case 'Madis':
                        return <Chat profileName='Madis'/>;
                    case 'Kalle':
                        return <Chat profileName='Kalle'/>;
                    case 'Laura':
                        return <Chat profileName='Laura'/>;
                    default:
                        return <h1 className="font-bold pt-4">Click on a profile to begin chatting..</h1>
                }
             })()}
        </div>
      </div>
  );
}

export default App;
