'use strict'
class PromiseConverter {
	constructor(){}

	fromFunctionToPromise (fn){
		let Resolving_Function;
		if(typeof fn === "function"){
			Resolving_Function = fn();
		}else{
			Resolving_Function = fn;
		}
		return new Promise(function (resolve,reject) {
			resolve(Resolving_Function);
		})
		.catch(function (err) {
			throw err;
		})
	}

	fromArrayToPromiseAll (Array_Of_Functions){
		let Array_Of_Promises = []
		for(let i=0;i<Array_Of_Functions.length;i++){
			if(typeof Array_Of_Functions[i] === "function"){
				Array_Of_Promises.push( new Promise(function (resolve,reject) {
								resolve(Array_Of_Functions[i]());
				}))
			}else{
				Array_Of_Promises.push( new Promise(function (resolve,reject) {
								resolve(Array_Of_Functions[i]);
				}))
			}
		}

		return Promise.all(Array_Of_Promises)

	}



}

