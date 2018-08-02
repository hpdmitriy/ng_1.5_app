import mailBox from '@/mailBox/mailBox.module'
import {directiveName, directiveFunc, } from '@/inboxHead/inboxHead.directive'
import {controllerName, controllerFunc} from '@/inboxHead/inboxHead.controller'

console.log(controllerName);
mailBox.directive(directiveName, directiveFunc);
mailBox.controller(controllerName, controllerFunc);