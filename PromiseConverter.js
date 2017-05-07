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
		Array_Of_Functions.forEach((fn,index) => {
			if(typeof fn === "function"){
					Array_Of_Promises.push( new Promise(function (resolve,reject) {
								resolve(fn());
		 			}))
				}
			else{
					Array_Of_Promises.push( new Promise(function (resolve,reject) {
								resolve(fn);
		 			}))
				}
			})
			return Promise.all(Array_Of_Promises)
		}

	}

module.exports = PromiseConverter;



