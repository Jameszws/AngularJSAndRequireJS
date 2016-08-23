/* 
 *
 *验证 
 * 
 */
define([],function(){
	var validate={
		
		//判断字符串是否为空
		isNull: function(str) {
			if (str !== null && str !== undefined && str.trim() !== '') {
				return false;
			}
			return true;
		},

		//判断字符串是否为空
		objIsNull: function(str) {
			if (str !== null && str !== undefined) {
				return false;
			}
			return true;
		},

		isFunction: function(callback) {
			if (callback != null && typeof callback == "function") {
				return true;
			}
			return false;
		},
		
	};
	return validate;
});
