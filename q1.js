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
let Greet = new Promise((res, rej) => {
    setTimeout(() => {
        res("soved");
    }, 2000);
});
function fetchGreeting() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let status = yield Greet;
            console.log(status, "try");
        }
        catch (exception) {
            console.log(exception, "catch");
        }
    });
}
fetchGreeting();
