import mailBox from '@/mailBox/mailBox.module'
import {directiveName, directiveFunc, } from '@/userHead/userHead.directive'
import {controllerName, controllerFunc} from '@/userHead/userHead.controller'

console.log(controllerName);
mailBox.directive(directiveName, directiveFunc);
mailBox.controller(controllerName, controllerFunc);