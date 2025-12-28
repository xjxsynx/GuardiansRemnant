
export async function preload(assets){
  await Promise.all(assets.map(a=>new Promise(res=>{
    const i=new Image(); i.src=a; i.onload=res;
  })));
}
