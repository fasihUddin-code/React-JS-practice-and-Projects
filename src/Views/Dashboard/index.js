import { useEffect } from "react";

function Dashboard(){
useEffect(()=>{
console.log('Dashboard useEffect Chala');
const onClick = ()=>{
    console.log('Click howa');
};

document.addEventListener('click',onClick)

return ()=>{
    console.log('Dashboard nepal chala gaya');
    document.removeEventListener('click',onClick)
};

},[])




return <div>Dashboard</div>

}

export default Dashboard;