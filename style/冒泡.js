let i = [1,2,6,5,3,4];
for(let x = 0;x<i.length;x++){
    for(let y = 0;y<i.length;y++){
        if(i[y]>i[y+1]){
            let q = i[y];
            i[y+1]=i[y];
            i[y]=q;
        }
    }
}
console.log(i);
console.log();