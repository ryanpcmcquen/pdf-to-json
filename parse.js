const pdfreader = require('pdfreader')

new pdfreader.PdfReader().parseFileItems("Signs - Food Truck Calendar - July 18.pdf", (err, item) => {
	if (err) {
		callback(err)
	}
	else if (!item) {
		callback()
	}
	else if (item) {
		const sortedObj = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'].reduce((newObj, val) => {
			newObj[val] = []
			return newObj
		}, {})

		switch (true) {
			case (item.x < 10 && item.x > 0):
				sortedObj.ten.push(item)
				break
			case (item.x < 20 && item.x > 10):
				sortedObj.twenty.push(item)
				break
			case (item.x < 30 && item.x > 20):
				sortedObj.thirty.push(item)
				break
			case (item.x < 40 && item.x > 30):
				sortedObj.forty.push(item)
				break
			case (item.x < 50 && item.x > 40):
				sortedObj.fifty.push(item)
				break
			case (item.x < 60 && item.x > 50):
				sortedObj.sixty.push(item)
				break
			case (item.x < 70 && item.x > 60):
				sortedObj.seventy.push(item)
				break
			case (item.x < 80 && item.x > 70):
				sortedObj.eighty.push(item)
				break
			case (item.x < 90 && item.x > 80):
				sortedObj.ninety.push(item)
				break
			case (item.x < 100 && item.x > 90):
				sortedObj.hundred.push(item)
				break
		}
		console.log(sortedObj)
	}
})