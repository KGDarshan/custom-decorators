"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function isBooleanCheck() {
    return function (target, key, descriptor) {
        const referenceOfOriginalMethod = descriptor.value;
        console.log(target);
        console.log(key);
        console.log(descriptor);
        descriptor.value = ((args) => {
            if (args['hasChecked'].toLowerCase() === 'true' ||
                args['hasChecked'].toLowerCase() === 'false') {
                return referenceOfOriginalMethod({
                    hasChecked: true
                });
            }
            else {
                console.log("Please enter a valid input value");
            }
        });
    };
}
class myFunction {
    methodOnWhichDecoratorIsApplied(obj1) {
        console.log('called', typeof obj1['hasChecked']);
    }
}
__decorate([
    isBooleanCheck()
], myFunction.prototype, "methodOnWhichDecoratorIsApplied", null);
const obj1 = {
    hasChecked: 'true'
};
new myFunction().methodOnWhichDecoratorIsApplied(obj1);
