const tpl = require('@/userHead/userHead.template.html');

const directiveFunc = function() {
	return {
		restrict: 'E',
		template: tpl
	}
}
const directiveName = 'userHead';
export {directiveFunc, directiveName} ;
