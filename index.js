
class rvector{
	constructor(){
		this.elemens = [];
	}
	addElems(name){
		if(name.constructor == Array){
			if(name.every(function(i){ return typeof i === "number" })){
				for(var i = 0; i < name.length; ++i) this.elemens.push(name[i]);
			}
		}
		this.elemens.sort(function(a, b){return a - b;});
	}
	deleteElems(name){
		var index = this.elemens.indexOf(name);
		if(index < 0) return -1;
		while(index >= 0){
			this.elemens.splice(index,1);
			index = this.elemens.indexOf(name);
		}
		return 1;
	}
	position(x,esq,dre){
		if(esq > dre) return -1;
		else{
			var m = (esq+dre)/2;
			if(this.elemens[m] == x) return m;
			else if(this.elemens[m] > x) return this.position(x,esq,m-1);
			else return this.position(x,m+1,dre);
		}
	}
	binarysearch(x){
		return this.position(x,0,this.elemens.length);	
	}
	printVec(){
		var str = this.elemens.join(', ');
		console.log(str);
	}

}


module.exports = rvector;
