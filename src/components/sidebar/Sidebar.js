import React from 'react';
import '../sidebar/Sidebar.css'
function Sidebar({condition}) {
  return <div className='sidebar' style={condition ? {left:0} : {left:"-100%"}}>








  </div>;
}

export default Sidebar;
