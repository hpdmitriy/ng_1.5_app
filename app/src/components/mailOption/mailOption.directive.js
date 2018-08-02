const tpl = require('@/mailOption/mailOption.template.html');

const directiveFunc = function() {
	return {
		restrict: 'E',
		template: tpl
	}
}
const directiveName = 'mailOption';
export {directiveFunc, directiveName} ;
