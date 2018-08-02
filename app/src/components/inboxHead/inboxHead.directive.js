const tpl = require('@/inboxHead/inboxHead.template.html');

const directiveFunc = function() {
	return {
		restrict: 'E',
		template: tpl
	}
}
const directiveName = 'inboxHead';
export {directiveFunc, directiveName} ;
