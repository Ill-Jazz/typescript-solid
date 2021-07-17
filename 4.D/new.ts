import {Restaurant} from "./Restaurant"
import {Oven} from "./Oven";
import {Stove} from "./Stove";

let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");