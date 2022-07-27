import './App.css';
import Chat from './components/Chat'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

function App() {
  return (
      <div className="w-full h-screen grid grid-cols-3 overflow-hidden">
        <div className="bg-slate-700 h-full w-2/3 sm:w-1/3">
          <div className="flex justify-center pt-8 w-full">
              <h1 className="sm:text-lg text-sm text-white font-bold">Contacts</h1>
          </div>
          <div className="h-full w-full grid grid-cols-1 pt-12">
            <div className="flex justify-center">
                <Badge badgeContent="" overlap="circular" color="success">
                    <Avatar alt="Madis" src={require("./assets/profPic1.jpg")} sx={{
                        height: '125px',
                        width: '125px',
                    }}/>
                </Badge>
            </div>
            <div className="flex justify-center -mt-8">
                <Badge badgeContent="" overlap="circular" color="success">
                    <Avatar alt="Kalle" src={require("./assets/profPic3.jpg")} sx={{
                        height: '125px',
                        width: '125px'
                    }}/>
                </Badge>
            </div>
            <div className="flex justify-center -mt-8">
                <Badge badgeContent="" overlap="circular" color="success">
                    <Avatar alt="Laura" src={require("./assets/profPic2.jpg")} sx={{
                        height: '125px',
                        width: '125px'
                    }}/>
                </Badge>
            </div>
            <div className="flex justify-center -mt-8">
              <Badge badgeContent="" overlap="circular" color="warning">
                  <Avatar alt="Laura" src={require("./assets/profPic4.jpg")} sx={{
                      height: '125px',
                      width: '125px'
                  }}/>
              </Badge>
            </div>
          </div>
        </div>
        <div className="col-span-2">
            <h1 className="font-bold pt-4">Click on a profile to begin chatting..</h1>
        </div>
      </div>
  );
}

export default App;
