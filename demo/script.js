function Truncate(obj) {
	this.className = obj.className;
	this.char = obj.char || 150;
	this.numOfTruncateBy = obj.numOfTruncateBy || 3;
	this.truncateBy = obj.truncateBy || ".";
	let paragraphTag = document.getElementsByClassName(className); 
	for(i=0;i<paragraphTag.length;i++){				
		var paragraph = paragraphTag[i].innerHTML;				
		var truncate = '';				
		if(typeof(paragraph) == 'string'){
			for(j=0;j<char;j++){
				truncate = truncate + paragraph.charAt(j);
			}
			for(k=0;k<numOfTruncateBy;k++){
				truncate = truncate + truncateBy;
			}						
		}
		paragraphTag[i].innerHTML = truncate;
	}		
}

