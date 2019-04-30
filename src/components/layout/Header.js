import React from 'react'

const headerStyle = {
  textAlign: 'center',
  margin: '4px auto',
  color: 'skyblue',
  backgroundColor: '#3d3a3d',
  padding: '10px',
  fontFamily: "'ZCOOL KuaiLe', cursive"
}
export default function Header() {
  return (
   <header style={headerStyle}>
     <h1>Task Manager</h1>
   </header>
  )
}
