# Truncate.js

Simple text truncate witten in Pure JavaScript

## How to use Truncate.js

Truncate.js doesnt depends on any library, it's written purely in JS

To fire the plugin on an element you want to truncate call Truncate function and pass an object of

1.	className(required)			: 	class name which has to be truncate.

2.	char( default = 150)		:	number of characters after which you want to truncte the text.

3.	numofTuncateBy(default : 3)	:	number of times you want to show truncate symbol used to truncate the text.

4.	truncateBy(default : ".")	:	symbol/char/element by which you want to truncate the text.

### Example

```
<script type="text/javascript" src="script.min.js"></script>
<script type="text/javascript">

	Truncate({
		className:"truncate1",
		char : 100,
		truncateBy : "<span style='color:red'> read more</span>",
		numOfTruncateBy : 1

	});

	Truncate({
		className : "truncate2"
	});
</script>

```