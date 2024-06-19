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
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => {
            setTimeout(() => {
                console.log("fetch data");
                resolve();
            }, 1000);
        });
    });
}
function processData() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => {
            setTimeout(() => {
                console.log("process data");
                resolve();
            }, 1000);
        });
    });
}
function executeData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchdata = yield fetchData();
            console.log(fetchdata);
        }
        catch (error) {
            console.log(error, "error");
        }
    });
}
executeData();
