"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchwithError() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((res, rej) => {
            setTimeout(() => {
                let randNum = Math.random();
                if (randNum > 0.5) {
                    console.log("promise solve success");
                }
                else {
                    console.log("promise failed");
                }
            }, 1000);
        });
    });
}
fetchwithError().then((data) => {
    console.log(data, "success");
}).catch((err) => {
    console.log("failed", err);
});
