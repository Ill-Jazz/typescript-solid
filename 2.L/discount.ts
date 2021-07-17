/* we have to create an interface to be implemented in the classes.
This way we don't have to use a type with if statements
*/
export interface Discount {
    _value: number;
apply(price:number):number;
showCalculation(price:number): string;
}