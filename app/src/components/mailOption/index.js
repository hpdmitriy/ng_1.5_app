import mailBox from '@/mailBox/mailBox.module'
import {directiveName, directiveFunc, } from '@/mailOption/mailOption.directive'
import {controllerName, controllerFunc} from '@/mailOption/mailOption.controller'

console.log(controllerName);
mailBox.directive(directiveName, directiveFunc);
mailBox.controller(controllerName, controllerFunc);