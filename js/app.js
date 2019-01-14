(function (exports) {
	'use strict';

	exports.vm = new Vue({
		el: ".todoapp",
		data: {
			inputValue: "",
			lists: [
				{
					id: 1,
					todo: "study",
					isFinshed: false
				},
				{
					id: 2,
					todo: "coding",
					isFinshed: true
				},
			],
			flag: true
		},
		methods: {
			add() {
				if (!this.inputValue) {
					return;
				}
				this.lists.push({
					id: this.lists.length + 1,
					todo: this.inputValue,
					isFinshed: false
				});
				this.inputValue = "";
			},
			del(id) {
				var index = this.lists.findIndex(item => {
					if (item.id == id) {
						return true;
					}
				});
				this.lists.splice(index, 1);
			},
			toggleAll() {
				this.lists.forEach(element => {
					element.isFinshed = this.flag;
				});
				this.flag = !this.flag;
			}
			
		}
	});

})(window);
