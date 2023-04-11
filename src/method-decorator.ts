function isBooleanCheck() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const referenceOfOriginalMethod = descriptor.value;
        descriptor.value = ((args: any) => {
            if (args['hasChecked'].toLowerCase() === 'true' ||
                args['hasChecked'].toLowerCase() === 'false') {
                return referenceOfOriginalMethod({
                    hasChecked: true
                })
            } else {
                console.log("Please enter a valid input value");
            }
        })
    }
}

class myFunction {
    @isBooleanCheck()
    methodOnWhichDecoratorIsApplied(obj1: any) {
        console.log('after-validation', typeof obj1['hasChecked'])
    }
}

const obj1 = {
    hasChecked: 'true'
}
new myFunction().methodOnWhichDecoratorIsApplied(obj1);