define([], function() {
	var zPageView = {
		
		init: function(params) {			
			this._init();
		},

		_init: function() {
			this.initView();
			this.show();
		},

		/*
		 * TODO 页面加载的时候执行（无需考虑登陆态）
		 * 可以做初始化页面（如头部信息等功能）
		 * @method zPageView.onInitView
		 */
		initView: function() {
			if (Horse.validate.isFunction(this.onInitView)) {
				this.onInitView();
			}
		},

		/*
		 * TODO 页面加载的时候执行
		 * @method zPageView.onShow
		 */
		show: function() {
			if (Horse.validate.isFunction(this.onShow)) {
				this.onShow();
			}
		},
		
		extend:function(obj){
			var objEx= Horse.util.extend(this, obj);
			objEx.init();
		}
	};

	return zPageView;
});