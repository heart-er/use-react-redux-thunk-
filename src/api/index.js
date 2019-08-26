
export function getItemList(){
  return fetch('http://localhost:3001/list').then(res=>res.json()).then(res=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(res)
      },1000)
    })
  })
}