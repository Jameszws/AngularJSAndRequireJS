define([], function() {
	var util = {

		coverObject: function(obj1, obj2) {

			var o = this.cloneObject(obj1, false);
			var name;
			for (name in obj2) {
				if (obj2.hasOwnProperty(name)) {
					o[name] = obj2[name];
				}
			}
			return o;
		},

		cloneObject: function(obj, deep) {
			if (obj === null) {
				return null;
			}
			var con = new obj.constructor();
			var name;
			for (name in obj) {
				if (!deep) {
					con[name] = obj[name];
				} else {
					if (typeof(obj[name]) == "object") {
						con[name] = commonOp.cloneObject(obj[name], deep);
					} else {
						con[name] = obj[name];
					}
				}
			}
			return con;
		},

		///TODO 检查属性
		checkPrototypes: function(objc) {
			for (var p in objc) {
				if (typeof(objc[p]) == "function") {
					return;
				}
				if (typeof(objc[p]) == "string") {
					var value = objc[p];
					Object.preventExtensions(objc, p, {
						value: value,
						writable: true,
						configurable: true
					});
				}
			}
		},

		/// TODO 实现拷贝对象
		extend: function(target, source) {
			for (var p in source) {
				if (source.hasOwnProperty(p)) {
					target[p] = source[p];
				}
			}
			return target;
		},

		//写cookies 
		setCookie: function(name, value, time) {
			var strsec = this.getsec(time);
			var exp = new Date();
			exp.setTime(exp.getTime() + strsec * 1);
			document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		},

		//读取cookies 
		getCookie: function(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg)) {
				return unescape(arr[2]);
			}
			return null;
		},

		//删除cookies 
		delCookie: function(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = this.getCookie(name);
			if (cval != null) {
				document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
			}
		},

		getsec: function(str) {
			var str1 = str.substring(1, str.length) * 1;
			var str2 = str.substring(0, 1);
			if (str2 == "s") {
				return str1 * 1000;
			} else if (str2 == "h") {
				return str1 * 60 * 60 * 1000;
			} else if (str2 == "d") {
				return str1 * 24 * 60 * 60 * 1000;
			}
		}

	};
	return util;
});