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
		}
	};
	return util;
});