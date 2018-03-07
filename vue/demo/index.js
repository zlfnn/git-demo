var vue = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 1,
				name: 'iPhone 7',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21488,
				count: 1
			}
		],
		choiceList: [],
	},
	computed: {
		totalPrice: function() {
			var total = 0;
			for( var i=0; i<this.choiceList.length;i++) {
				var cIndex = this.choiceList[i]
				var item = this.list[cIndex];
				total += item.price * item.count;
			}

			return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
		}
	},
	methods: {
		handleReduce: function(index) {
			if(this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd: function(index) {
			this.list[index].count++;
		},
		handleRemove:function(index) {
			this.list.splice(index, 1);
		},
		handleChoice: function(index) {
			var tip = this.choiceList.indexOf(index)
			if( tip > -1) {
				this.choiceList.splice(tip, 1);
			} else {
				this.choiceList.push(index);
			}
		}
	}
})